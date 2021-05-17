const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose-db', {useNewUrlParser: true, useUnifiedTopology: true}); //konek ke mongose

//membuat database fruit
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Data tidak boleh kosong']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Data tidak boleh kosong']
    },
    age: {
        type: Number,
    },
    favoriteFruit: fruitSchema
})

const People = mongoose.model("People", peopleSchema);

//menambah data duku
const fruitDuku = new fruit({
    name: "Duku",
    rating: 8,
    review: "Buahnya manis sekali"
})

//menyimpan data apple
fruitDuku.save(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Data Duku berhasil disimpan")
    }
});

const people = new People({
    name: "Irfan",
    age: 21,
    favoriteFruit: fruitDuku
})

people.save(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Data Irfan relationship duku")
    }
});