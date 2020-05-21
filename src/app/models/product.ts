export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  picture: string;

  constructor(name: string,description?: string,price?: number,picture?: string){
    this.name=name;
    this.description=description;
    this.price=price;
    this.picture=picture;
  }
}
