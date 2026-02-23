// programacion orientada a objetos
//Una clase en js es una plantilla para crear objetos, que comparten mismas propiedades y metodos
// una clase es como un molde que describe como seran los objetos y que podran hacer

class Product {
    constructor (productName = ``, productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    formatproduct(){
        return `El producto ${this.productName} tiene un precio de ${this.productPrice}`;
    }


}

const product1 = new Product("Remote control", 15000)
const product2 = new Product("SSD", 250000)

console.log(product1.formatproduct());
console.log(product2.formatproduct());


//================================
//Herencia en java script permite que lo objetos reutilicen las propiedades y metodos de otros

class Book extends Product {
    constructor( bookName, bookPrice, isbn){
        super(``, bookPrice);
        (bookName, bookName);
        this.isbn = isbn;
    }

    formatproduct(){
        return `${super.formatproduct()} y su isbn es ${this.isbn}`;

    }
};

const book1 = new Book("El producto", 20000, 13579);

book1.formatproduct();

console.log(book1.formatproduct());



