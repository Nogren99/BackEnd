class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code:code,
            stock:stock
        }
        
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProductById = (id) => {

        const product = this.products.find(e => e.id==id)
        if(product)
            console.log(product)
        else 
            console.log("Producto no encontrado")
    }
}

const productTest = new ProductManager();

productTest.addProduct("mesa","de madera",5000,null,1,40)
productTest.addProduct("Campera","de cuero",10000,null,456,10)


console.log(productTest.getProducts());
console.log("--------")

console.log("Busco producto ID=1")
productTest.getProductById(1)
console.log("--------")

console.log("Busco producto ID=2")
productTest.getProductById(2)
console.log("--------")

console.log("Busco producto inexistente")
productTest.getProductById(3)
console.log("--------")