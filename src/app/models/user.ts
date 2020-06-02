export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;

  constructor(id: number, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

}
