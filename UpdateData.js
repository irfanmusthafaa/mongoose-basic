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

//update data
fruit.updateOne({_id: '60a1aba4becf9b01481c21e9'}, {name: 'Jeruk'}, function(error) {
    if(error){
        console.log(error)
    }else{
        console.log('Data berhasil di update')
    }
})

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