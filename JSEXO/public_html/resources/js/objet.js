function Product(nameOfProduct, description, weight, dimension, photo) {
    this.name = nameOfProduct;
    this.description = description;
    this.weight = weight;
    this.dimension = dimension;
    this.picture = photo;
    this.addfeature = function (price, value) {
        this[price] = value;
    }
}
debugger;
var moto = new Product("Suzuki 600 Gsr", "une moto pour les vrai hommes qui envoient du gros gazzz !", "215 kg" , "200 cm ", "../img/gsr.jpg");
console.log(moto);
document.getElementById("name").innerHTML = moto.name;
document.getElementById("description").innerHTML = moto.description;
document.getElementById("weight").innerHTML = moto.weight;
document.getElementById("dimension").innerHTML = moto.dimension;
document.getElementById("picture").src = moto.picture;