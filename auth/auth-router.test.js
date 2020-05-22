const request = require("supertest");
const server = require('../api/server');
const db = require("../database/dbConfig");

describe("auth-router", ()=>{
  beforeEach(async()=>{
      await db('users').truncate();
  })
})


// beforeEach(() => {
//     return db.migrate
//       .rollback()
//       .then(() => db.migrate.latest())
//       .then(() => db.seed.run());
//   });

describe("POST /api/auth/register",()=>{
    it("should return status 201 when (unique)username and password created",()=>{
        return request(server)
        .post("/api/auth/register")
        .send({
            username: "pinky",
            password: "pass"
        })
        .then(res=>{
            expect(res.status).toBe(201)
        })
    })

    it("should return status 400 when username and password is missing",()=>{
        return request(server)
        .post("/api/auth/register")
        .then(res=>{
            expect(res.status).toBe(400);
        })
    })
})

//login

describe("POST /api/auth/login",()=>{
    it('should return status 200 when sending valid login info',()=>{
        return request(server)
        .post('/api/auth/login')
        .send({
            username: 'pinky',
            password: 'pass'
        })
        .then(res=>{
            expect(res.status).toBe(200);
        })
    })

    it('should return status 400 when sending invalid password',()=>{
        return request(server)
        .post('/api/auth/login')
        .send({
            username: 'joe',
            cassword: 'smith'
        })
        .then(res=>{
            expect(res.status).toBe(400);
        })
    })
})

