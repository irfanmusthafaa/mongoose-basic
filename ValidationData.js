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

//menambah data apple
const melon = new fruit({
    name: "Melon",
    rating: 10,
    review: "Buahnya manis sekali"
})

//menyimpan data apple
melon.save(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Data Melon berhasil disimpan")
    }
});
