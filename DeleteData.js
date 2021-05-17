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

//delete data
fruit.deleteOne({_id: '60a1ae010bd9c42514929bde'}, function(error) {
    if(error){
        console.log(error)
    }else{
        console.log('Data berhasil di delete')
    }
})

//membaca seluruh data 
fruit.find(function(error, fruits) {
    if(error){
        console.log(error)
    }else{
        mongoose.connection.close(); //mengclose
        //console.log(fruits) // tampil seluruh data
        console.log('Tampilkan data setelah di delete')
        fruits.forEach(function(fruit) { //menampilkan beberapa data saja
            console.log(fruit.name)
        })
    }
})