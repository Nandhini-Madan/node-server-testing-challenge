const db=require("../data/config")


async function create(data){
    const [id]=await db("hobbits").insert(data)
    return findById(id)
} 

function findById(id){
    return db("hobbits").where({id}).first()
}
function remove(id) {
	return db("hobbits").where({ id }).del()
}

module.exports={
    create,
    findById,
    remove,
}