import axios from "axios";

export async function productsData() {
     try {
      const response = await axios.get('https://fakestores.onrender.com/api/products');
     
      return response
     } catch (error) {
      throw error
      
      
     }
   
   
      
}

