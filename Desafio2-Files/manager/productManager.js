import fs from 'fs';

export default class ProductManager{

    constructor() {
        this.path = './files/products.json'
        this.products = [];
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = async(title, description, price, thumbnail, code, stock) => {


        if(this.products.some(e=>e.code==code)){
            console.log("Producto repetido")
        }else{
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
            
            //await fs.promises.writeFile(this.path,JSON.stringify(this.products, null, '\t'))
            return product
        }

        
    }

    getProductById = async(id) => {

        const prods = await this.getProducts();
        const product = prods.find(e => e.id==id)
        if(product)
            return product
        else 
            return null
    }

    getProducts = async() => {
        try {
            if (fs.existsSync(this.path)){
                const data = await fs.promises.readFile(this.path,'utf-8')
                const prods = JSON.parse(data)
                return prods
            }else
                return []
        } catch (error) {
            console.log("error")
        }
    }
    test =()=>{
        console.log("funciona")
    }

    updateProduct = async(id,campo,nuevaData) =>{
        try {
            const prods = await this.getProducts();
            const i = prods.findIndex(e=>e.id==id)
            switch(campo) {
                case "title":
                  prods[i].title=nuevaData;
                  console.log(prods)
                  break;
                case "description":
                    prods[i].description=nuevaData;
                  break;
                  case "price":
                    prods[i].price=nuevaData;
                  break;
                  case "thumbnail":
                    prods[i].thumbnail=nuevaData;
                  break;
                  case "code":
                    prods[i].code=nuevaData;
                  break;
                  case "stock":
                    prods[i].stock=nuevaData;
                  break;
                default:
                  // code block
              }
              //await fs.promises.writeFile(this.path,JSON.stringify(this.products, null, '\t'))
        } catch (error) {
            console.log("error")
        }
    }

    deleteProduct = async(id)=>{
        try {
            const prods = await this.getProducts();
            const i = prods.findIndex(e=>e.id==id)
            console.log(i)
            prods.splice(i,1)
            console.log("verifico eliminacion:")
            console.log(prods)
            //await fs.promises.writeFile(this.path,JSON.stringify(prods))
        } catch (error) {
            console.log("error")
        }
           
            
    }
}
