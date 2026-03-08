import products from "../../../data/products";

export async function getProducts() {
    try{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);});
    }
    catch(error){
        console.error("Error fetching products:", error);
         throw error;
    }
}
export async function getCategories() {
    try{
        const categories = [...new Set(products.map((product) => product.category))];   
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(categories);
            }, 500);
        });
    }   
    catch(error){
        console.error("Error fetching categories:", error);
        throw error;
    }
    
}
export async function getProductById(id) {
    try{
        const product = products.find((p) => p.id === parseInt(id));
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (product) {
                    resolve(product);
                } else {
                    reject(new Error("Product not found"));
                }
            }, 500);
        });
    }
    catch(error){
        console.error("Error fetching product by ID:", error);
        throw error;
    }
}