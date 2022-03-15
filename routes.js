const router = require('express').Router();

router.get('/', (req,res,next) => {
    const {page,total} = req.query;
    
    res.send(
       `
       <h1>
       Welcome to Express</h1>
       <br/>
       <br/>
       <h2>
       routes: 
       /profile
       /product
       </h2>
       `
    );
});

router.get('/profile', (req,res,next) => {

    res.send({
        name : "user",
        address: {},
        age: 21 
    });
});

router.get('/product',(req,res) => {
    const product = [
        {name: "mouse",
        merk: "logitech" },
        {
            price: "200",
            total: "1"
        }
    ];
    res.status(200).json(product);
});

router.get('/product/:id',(req,res) => {
    console.log(req.query);
    res.send({
        id: req.params.id
    });
});

router.get('/:category/:tag',(req,res) => {
    const {category,tag} =req.params;
    res.json({
        category: category,
        tag: tag
    });
});

module.exports = router;

