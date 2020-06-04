export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  contact: string;


  constructor(id: number, firstName: string, lastName: string, email: string, contact?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
  }

}
