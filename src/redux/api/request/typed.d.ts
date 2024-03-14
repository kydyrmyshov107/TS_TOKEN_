/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Todo {
  type GetRequest = void;

  type GetResponse = {
    _id: number | string;
    userName: string;
    email: string | number;
    password: string | number;
    __v: number;
  }[];

  type PostRequest = {
    userName: string;
    email: string | number;
    password: string | number;
  };
  type PostResponse = {
    _id: number | string;
    userName: string;
    email: string | number;
    password: string | number;
  }[];

  type PostLoginRequest = {
    email: string | number;
    password: string | number;
  };

  type PostLoginResponse = {
    _id: number | string;
    userName: string;
    email: string | number;
    password: string | number;
  }[];

  type GetProductRequest = void;

  type GetProductResponse = {
    _id: number;
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
  }[];

  type PostProductRequest = {
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
  };
  type PostProductResponse = {
    _id: number | string;
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
  }[];
}
