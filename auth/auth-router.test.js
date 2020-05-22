const request = require("supertest");
const server = require('../api/server');

describe("auth-router", ()=>{
  beforeEach(async()=>{
      await db('users').truncate();
  })
})

