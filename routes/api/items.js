const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/items');

//@routes Get api/items
//@desc Get all items
//acess public
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
})

//@routes Post api/items
//@desc Get all items
//acess public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        description: req.body.body,
    });

    newItem.save()
        .then(item => res.json(item));
});

//@routes Delete api/items
//@desc Delete a items
//acess public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({sucess: 'Item deleted'})))
        .catch((err) => res.status(404).json({error: 'Item not found'}))
})



module.exports = router;