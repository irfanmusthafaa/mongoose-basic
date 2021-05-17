const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose-db', {useNewUrlParser: true, useUnifiedTopology: true}); //konek ke mongose

//membuat database fruit
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const fruit = mongoose.model("Fruit", fruitSchema);

//membaca seluruh data 
fruit.find(function(error, fruits) {
    if(error){
        console.log(error)
    }else{
        mongoose.connection.close(); //mengclose
        //console.log(fruits) // tampil seluruh data

        fruits.forEach(function(fruit) { //menampilkan beberapa data saja
            console.log(fruit.name)
        })
    }
})