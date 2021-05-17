const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose-db', {useNewUrlParser: true, useUnifiedTopology: true}); //konek ke mongose

//membuat database fruit
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
})

const fruit = mongoose.model("Fruit", fruitSchema);

// //menambah data apple
// const apple = new fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Buahnya manis sekali"
// })

//menyimpan data apple
// apple.save(function(error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Data Apple berhasil disimpan")
//     }
// });

 //insert data/ menambah data
 const anggur = new fruit({
     name: "Anggur",
    rating: 5,
   review: "Buahnya asam"
 })

const pisang = new fruit({
    name: "Pisang",
    rating: 9,
    review: "Buahnya sempurna"
})

const mangga = new fruit({
    name: "Mangga",
    rating: 5,
    review: "Buahnya busuk"
})

fruit.insertMany([anggur, pisang, mangga], function(error) {
    if(error){
        console.log(error)
    }else{
        mongoose.connection.close(); //mengclose
        console.log("Data berhasil ditambahkan")
    }
})