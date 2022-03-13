'use strict'

const server =require('../index.js');
const supertest=require('supertest');
const req=supertest(server);//this line is to start fake test by using the req 
const {db}=require('../src/models/seq-index.js');



//----------------------------------------------

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
}); 
//-----------------------------------------------

describe ('test',()=>{

it ('test sign up',async()=>{
const res=await req.post('/signUp').send({
  name:"marah",
  password:"123456"

})
expect(res.status).toBe(201);
})

it ('test sign In',async()=>{
  
  const res=await req.post('/signIn').auth('marah','123456');
  expect(res.status).toBe(200);

})

})

