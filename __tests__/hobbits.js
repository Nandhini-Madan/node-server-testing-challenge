const superTest=require("supertest")
const server=require("../server")
const db=require("../data/config")

describe("hobbits integration Testing",()=>{
    it ("post hobbits",async ()=>{
        const res=await superTest(server)
                    .post("/hobbits")
                    .send({name:"blippi"})
                expect(res.statusCode).toBe(201)
                expect(res.type).toBe("application/json")
                expect(res.body.name).toBe("blippi")
                expect(res.body.id).toBeDefined()
    })
    it ("post hobbits",async ()=>{
        const res=await superTest(server)
                    .del("/hobbits/1")
                
                expect(res.statusCode).toBe(200)
                expect(res.type).toBe("application/json")
                // expect(res.body.name).toBe("blippi")
                // expect(res.body.id).toBeDefined()

    })
})