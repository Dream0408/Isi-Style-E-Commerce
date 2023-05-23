const products = [
  {
    id: "1",
    name: "Black Long Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699294/Products/Jeans/jean-1_i0at0h.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 290,
  },

  {
    id: "2",
    name: "Denim Long Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699294/Products/Jeans/jean-2_wnwzfy.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 390,
  },

  {
    id: "3",
    name: "Wide Leg Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699294/Products/Jeans/jean-3_scz0am.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 350,
  },

  {
    id: "4",
    name: "Black Jacket Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699294/Products/Jeans/jean-4_s0qtzv.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 690,
  },

  {
    id: "5",
    name: "Denim Jacket Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699295/Products/Jeans/jean-5_jej1oh.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 500,
  },

  {
    id: "6",
    name: "White Long Jean",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682699295/Products/Jeans/jean-6_yzru9u.jpg",
    category: "Jeans",
    stock: "In stock",
    price: 490,
  },

  {
    id: "7",
    name: "Street Fashion T-Shirt",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704871/Products/T-Shirt/T-Shirt-3._us4kom.jpg",
    category: "T-Shirt",
    stock: "In stock",
    price: 190,
  },

  {
    id: "8",
    name: "CARHARTT Top T-Shirt",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704453/Products/T-Shirt/T-shirt-2_ppfh0r.jpg",
    category: "T-Shirt",
    stock: "In stock",
    price: 150,
  },

  {
    id: "9",
    name: "Denim HASPEN Graphic T-Shirt",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704453/Products/T-Shirt/T-shirt-1_yf4mxp.jpg",
    category: "T-Shirt",
    stock: "Out of stock",
    price: 290,
  },

  {
    id: "10",
    name: "JIL SANDER T-Shirt oversize",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704453/Products/T-Shirt/T-shirt-4_fyyqsk.jpg",
    category: "T-Shirt",
    stock: "In stock",
    price: 300,
  },

  {
    id: "11",
    name: "Slogan graphic drop shoulder tee",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704453/Products/T-Shirt/T-shirt-5_p9ddf0.jpg",
    category: "T-Shirt",
    stock: "Out of stock",
    price: 250,
  },

  {
    id: "12",
    name: "90s Vintage Oversize Hipster",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682704454/Products/T-Shirt/T-shirt-6_gacukj.jpg",
    category: "T-Shirt",
    stock: "In stock",
    price: 200,
  },

  {
    id: "13",
    name: "Black Blazer Crop",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-1_s4bfqu.jpg",
    category: "Blazer",
    stock: "Out of stock",
    price: 350,
  },

  {
    id: "14",
    name: "Celeste Blazer Crop",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-2_ce75zn.jpg",
    category: "Blazer",
    stock: "In stock",
    price: 400,
  },

  {
    id: "15",
    name: "Brown Blazer",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-3_wnw1u3.jpg",
    category: "Blazer",
    stock: "In stock",
    price: 490,
  },

  {
    id: "16",
    name: "Gray Blazer",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-4_m265xg.jpg",
    category: "Blazer",
    stock: "In stock",
    price: 420,
  },

  {
    id: "17",
    name: "Indigo Blazer",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-5_xmy3ee.jpg",
    category: "Blazer",
    stock: "Out of stock",
    price: 470,
  },

  {
    id: "18",
    name: "Light Blue Blazer",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705062/Products/Blazer/blazer-6_gp533n.jpg",
    category: "Blazer",
    stock: "In stock",
    price: 400,
  },

  {
    id: "19",
    name: "Sunflower Black Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-1_uqsvlr.jpg",
    category: "Pants",
    stock: "Out of stock",
    price: 340,
  },

  {
    id: "20",
    name: "Cream Short Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-2_xogsce.jpg",
    category: "Pants",
    stock: "In stock",
    price: 300,
  },

  {
    id: "21",
    name: "Floral Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-3_lqcemi.jpg",
    category: "Pants",
    stock: "In stock",
    price: 290,
  },

  {
    id: "22",
    name: "Sport White-Red Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-4_vzayr3.jpg",
    category: "Pants",
    stock: "In stock",
    price: 290,
  },

  {
    id: "23",
    name: "Pink Long Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-5_txccnz.jpg",
    category: "Pants",
    stock: "Out of stock",
    price: 290,
  },

  {
    id: "24",
    name: "Green Short Pant",
    image:
      "https://res.cloudinary.com/dhu2obv3j/image/upload/v1682705188/Products/Pants/pant-6_uuqbi2.jpg",
    category: "Pants",
    stock: "In stock",
    price: 190,
  },
];

module.exports = products;
