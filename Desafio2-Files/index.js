import ProductManager from "./manager/productManager.js";


const manager = new ProductManager()

const productManager = async() => {
    let products =await manager.getProducts();
    //console.log(products);

   await manager.addProduct("mesa","de madera",5000,"https://cdn1.iconfinder.com/data/icons/office-material-5/128/laptop_laptops._laptop_computer_computer_computing-512.png",177,40)

    products =await manager.getProducts();
    console.log(products);

    console.log("se corrobora que devuelve el producto con el id especificado:")
    let producto = await manager.getProductById(1);
    console.log(producto)

    console.log("se cambia el campo de un producto:")
    await manager.updateProduct(1,"title","tituloNuevo")

    console.log("se elimina un producto:")
    await manager.deleteProduct(3)
    

}

productManager();
