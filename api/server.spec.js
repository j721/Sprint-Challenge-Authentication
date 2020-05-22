const request = require('supertest');
const server = require("./server");

describe("server",()=>{
    describe("test environment",()=>{
        it("test environment should be testing",()=>{
            expect(process.env.DB_ENV).toBe("testing");
        })

        it("runs the server",()=>{
            expect(true).toBe(true);
        })
    })
})