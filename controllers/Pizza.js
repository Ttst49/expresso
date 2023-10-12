const Pizza = require("../models/Pizza");

const createPizza = async function create(req, res){

    let { ...pizzaParams} = req.body

    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}

const index = async function index(req,res){
    let pizzas = await Pizza.find()
    res.send(200, pizzas)
}


const showPizza = async function show(req, res){
    let { name} = req.params
    let pizza = await Pizza.find({name: name})

        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Pizza with name " + name });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pizza with name=" + name });
        });

}


const removePizza = async function remove(req,res){

    const { name } = req.params
    let thisPizza = await Pizza.deleteOne({name: name})
    res.sendStatus(200)

}

const editPizza = async function edit(req,res){

    const { price,name } = req.body
    let thisPizza = await Pizza.findOneAndUpdate({name: name,price: price})
    res.sendStatus(200)

}



module.exports = { createPizza, removePizza, showPizza, editPizza, index }
