import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";

import jwt from "jsonwebtoken";
import { json } from "express";
let mongo: any;

declare global {
  var signup: (id?: string) => string[];
}
jest.mock("../nats-wrapper");

process.env.STRIPE_KEY =
  "sk_test_51MU8vCEBYkuy01VGZ3weWRzv2CwOOA17TTEcXczqpY0QlcHHleeiIbZmDADN6PEsp4qfQhuMsmlkguevW0hT1iRR00V6xS6Wzy";

beforeAll(async () => {
  process.env.JWT_KEY = "asdf";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signup = (id?: string) => {
  //Build a JWT payload. {id,email}
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };
  //Create the JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  //Build session object. {jwt: MY_JWT}
  const session = { jwt: token };

  //Turn that session into JSON
  const sessionJSON = JSON.stringify(session);

  //Take JSON and encode is as base64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  //return a string with the encoded data
  return [`session=${base64}`];
};
