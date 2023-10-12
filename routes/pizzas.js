const {Router} = require ("express")
const router = Router()
const Pizza = require("../models/Pizza")
const pizzaController = require("../controllers/Pizza")


const pizzas = [
    {
        id: 1,
        name: 'margherita',
        price:'9'
    },
    {
        id: 2,
        name: 'cannibal',
        price: '12'
    }
]

/**
router.get("/",(req, res)=>{
    res.send(pizzas)
})


router.get("/:id",(req, res)=>{


    const { id } = req.params
    let pizza = pizzas.find(p=>
        p.id == id
    )
    res.send(pizza)

})
**/

router.post('/add', pizzaController.createPizza)


router.delete('/remove/:name', pizzaController.removePizza)

router.get("/show/:name",pizzaController.showPizza)

router.put("/edit/:name",pizzaController.editPizza)

router.get("/index/",pizzaController.index)


/**
router.post('/new',(req, res)=>{

    let pizza = {}
    pizza.id = Math.max(...pizzas.map(pizz=>pizz.id))+1

    let {...pizzaRecue} = req.body

    Object.assign(pizza,pizzaRecue)

    pizzas.push(pizza)
    res.send(pizzas)

})

router.delete("/remove/:name",(req, res)=>{

    const { id } = req.params
    let pizza = pizzas.find(p=>
        p.id == id
    )
    pizzas.splice(pizza["id"])
    res.send("supprimé c'est tout bon")

})**/


module.exports = router