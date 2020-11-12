import { Product } from './product';
export class ShoppingCartItem{

    title:string;
    imageUrl:string;
    price:number;
    $key:string;
    quantity:number;
    
    get totalPrice(){
        return this.price * this.quantity;
    }
}