module.exports = {
  products: {
    "47f70b84-74c0-43e4-a0ab-ba55cccdd1ae": { name: "Hamburger", price: 1.44, balance: 100 },
    "4566ae41-77da-4a84-87fb-c4344277c091": { name: "Cheeseburger", price: 1.62, balance: 100 },
    "1bc3474d-2657-413f-9850-72adf60fd57f": { name: "BigMac", price: 2.1, balance: 100 },
    "413c2139-2dce-4869-b78d-2d79d9cc7f16": { name: "Chickenburger", price: 1.37, balance: 100 },
    "60a91b54-8b85-44cc-9277-558f54da3666": { name: "Fishburger", price: 1.4, balance: 100 },
    "d975d82d-4492-41d1-9d75-50a31e67de78": { name: "Coka-Cola", price: 0.8, balance: 100 },
    "57056c68-8f28-486a-a889-d8007b52fa49": { name: "7-up", price: 0.8, balance: 100 },
    "60651d8f-271e-4abb-aca2-cbf238526649": { name: "Merinda", price: 0.8, balance: 100 },
  },

  users: {
    "eb7527e8-b181-41ab-83fa-8289be2148ab": { role: "admin", fullname: "Hugh Jass" },
    "1dce8466-c9c3-433e-b851-782ac8b4d45e": { role: "manager", fullname: "Mike Rotch" },
    "d642e5db-25fc-40a2-8000-8d6cb2b3cc72": { role: "manager", fullname: "Ben Dover" },
    "c264414a-b54a-4aea-a69c-3ea3efbf825c": { role: "customer", fullname: "Mike Hunt" },
    "2eb56fdf-65d8-44ed-9f4d-95f87ce1a150": { role: "customer", fullname: "Jack Mehoff" },
    "1d441374-cca0-4a00-ad82-6634b5cfa118": { role: "customer", fullname: "Amanda Hugginkiss" },
  },

  orders: {
    "230909b4-f3d9-40ff-9bf0-5303f17ce81c": {
      date: "2017-06-18T00:51:45.834Z",
      customerId: "c264414a-b54a-4aea-a69c-3ea3efbf825c",
      managerId: "1dce8466-c9c3-433e-b851-782ac8b4d45e",
      status: "inprogress",
      items: [
        { productId: "47f70b84-74c0-43e4-a0ab-ba55cccdd1ae", amount: 1 },
        { productId: "4566ae41-77da-4a84-87fb-c4344277c091", amount: 2 },
        { productId: "d975d82d-4492-41d1-9d75-50a31e67de78", amount: 2 },
      ]
    },

    "44ed7e9a-82c3-48fc-b211-4f1b33a7aab4": {
      date: "2017-06-18T00:53:45.834Z",
      customerId: "2eb56fdf-65d8-44ed-9f4d-95f87ce1a150",
      managerId: "d642e5db-25fc-40a2-8000-8d6cb2b3cc72",
      status: "inprogress",
      items: [
        { productId: "1bc3474d-2657-413f-9850-72adf60fd57f", amount: 3 },
        { productId: "413c2139-2dce-4869-b78d-2d79d9cc7f16", amount: 1 },
        { productId: "57056c68-8f28-486a-a889-d8007b52fa49", amount: 2 },
      ]
    },

    "948eea79-7c28-4b4b-b20e-2ff09676a4ad": {
      date: "2017-06-18T00:55:45.834Z",
      customerId: "1d441374-cca0-4a00-ad82-6634b5cfa118",
      managerId: "1dce8466-c9c3-433e-b851-782ac8b4d45e",
      status: "inprogress",
      items: [
        { productId: "60a91b54-8b85-44cc-9277-558f54da3666", amount: 1 },
        { productId: "47f70b84-74c0-43e4-a0ab-ba55cccdd1ae", amount: 1 },
        { productId: "60651d8f-271e-4abb-aca2-cbf238526649", amount: 2 },
      ]
    },
  }
}
