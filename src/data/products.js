const products = [
  {
    id: 1,
    name: "Wireless Headphones ",
    price: 1299,
    image: [
      "https://elomus-theme.myshopify.com/cdn/shop/products/14_28f9bb5d-5199-4495-ab00-ff92113bebdc.jpg?crop=center&v=1573741265",
     " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PMYOAavmiNDnfCcf9b6a6OS-rfbnPxRc6w&s",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwa2YdjCN8oMdy42LV9sL-Ifw5Hq0i2RcyA&s"
    ],
    category: "Electronics",
    description: "Great sound quality with Bluetooth 5.0.",
    rating: 4.2
  },
  {
    id: 2,
    name: "Smartphone Stand",
    price: 249,
    image: [
      "https://m.media-amazon.com/images/I/519FYF2vLBL._UF1000,1000_QL80_.jpg",
      "https://www.bbassets.com/media/uploads/p/l/40280962_2-se7en-mobile-stand-adjustable-foldable-for-all-smart-phones-tablets-assorted.jpg",
      "https://images.meesho.com/images/products/527198688/cjy8r_512.webp"
    ],
    category: "Electronics",
    description: "Adjustable aluminum mobile stand for desk.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 799,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEi6Z-lN8rCxh1Tocwb6Y4f_jGX55-ldzd5g&s",
      "https://m.media-amazon.com/images/I/51dQYfrzFNL._UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/61ttEnPDQhL._UF1000,1000_QL80_.jpg"
    ],
    category: "Electronics",
    description: "High precision RGB gaming mouse with 6 buttons.",
    rating: 4.1
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 499,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9zwqW26dv38L6CfY3c15mA9NPUGqGls2A5w&s",
      "https://tiimg.tistatic.com/fp/1/006/524/mens-single-fold-stylish-leather-wallet-136.jpg",
      "https://www.jiomart.com/images/product/original/rvbwwxfo0s/shopmantra-pu-leather-one-dollar-printed-wallet-bt00000716-product-images-rvbwwxfo0s-3-202207280050.jpg?im=Resize=(500,630)"
    ],
    category: "Clothing",
    description: "Genuine leather wallet with multiple compartments.",
    rating: 4.3
  },
  {
    id: 5,
    name: "Sports Water Bottle",
    price: 299,
    image: [
      "https://m.media-amazon.com/images/I/317xCRYCiEL._SR290,290_.jpg",
      "https://m.media-amazon.com/images/I/51tKNgxY0AL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTO6CM88GvDaKcDAh2h-yg3cnJsM896_USA&s"
    ],
    category: "Home",
    description: "1L BPA-free reusable sports water bottle.",
    rating: 4.6
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 999,
    image: [
      "https://www.boat-lifestyle.com/cdn/shop/files/STONE350PRO_Blue_07.jpg?v=1720589782",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jgarhtQHu6WU11mpRYb5u_4OchZLPLErSg&s",
      "https://5.imimg.com/data5/ANDRIDDefault/2023/1/XP/QH/ZO/141922347/product-jpeg-500x500.jpg"
    ],
    category: "Electronics",
    description: "Portable speaker with rich bass and 10-hour playtime.",
    rating: 4.4
  },
  {
    id: 7,
    name: "Yoga Mat",
    price: 649,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxywBrWulXoMl5G0jygM4b5WvpZM1y1AiZ5Q&s",
      "https://wiselife.in/cdn/shop/files/1_32c253e4-e519-4e48-a3ed-29832ee22215.png?v=1753097881&idh=416",
      "https://images-static.nykaa.com/media/catalog/product/c/c/cc270b1YS-TPE-YM601-P&B_1.jpg"
    ],
    category: "Home",
    description: "Anti-slip mat for home and gym workouts.",
    rating: 4.0
  },
  {
    id: 8,
    name: "Cotton T-shirt",
    price: 349,
    image: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwi-kmZEVBeJyYcsBdv0l6cm3FaO-PvwFy7Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfknEZSR_V5_TQWRtGxqcSAYgoC3aaxn054A&s",
      "https://thebanyantee.com/cdn/shop/products/One-Direction-Tshirt--night-changes.jpg?v=1749388006"
    ],
    category: "Clothing",
    description: "100% breathable cotton for daily comfort.",
    rating: 4.1
  },
  {
    id: 9,
    name: "Laptop Cooling Pad",
    price: 699,
    image: [
      "https://techiestore.in/wp-content/uploads/2023/05/5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvJBuOxMgcqi4iGczKttm7nBd1-6U1rXHEQ&s",
      "https://m.media-amazon.com/images/I/51lpVGciwfL._UF1000,1000_QL80_.jpg"
    ],
    category: "Electronics",
    description: "Efficient cooling with silent fans and adjustable height.",
    rating: 4.2
  },
  {
    id: 10,
    name: "Kitchen Knife Set",
    price: 899,
    image: [
      "https://m.media-amazon.com/images/I/51x3mzRql2L.jpg",
      "https://m.media-amazon.com/images/I/312u+KcS5XL.jpg",
      "https://tiimg.tistatic.com/fp/1/007/508/national-kitchenware-kitchen-combo-4-in-1-santro-category-90-kitchen-knife-peeler-set-3-pcs-set--627.jpg"
    ],
    category: "Home",
    description: "Stainless steel knife set for all chopping needs.",
    rating: 4.5
  },
  {
    id: 11,
    name: "Digital Alarm Clock",
    price: 599,
    image: [
      "https://m.media-amazon.com/images/I/71JnHkvvpHL.jpg",
      "https://m.media-amazon.com/images/I/61b7GtEgzLS.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1vNZieNpY0P48M6nqXSCbe70cPp-zunyrQ&s"
    ],
    category: "Home",
    description: "LED display clock with alarm and temperature display.",
    rating: 4.0
  },
  {
    id: 12,
    name: "Canvas Backpack",
    price: 1099,
    image:[
       "https://m.media-amazon.com/images/I/81jqng0Dp2L._UY1100_.jpg",
       "https://4.imimg.com/data4/DC/JE/MY-799611/canvas-backpack-1-500x500.jpg",
       "https://bombaytrooper.com/wp-content/uploads/2022/06/BGMT009-600x800.webp"
    ],
    category: "Clothing",
    description: "Durable canvas backpack for school and travel.",
    rating: 4.3
  },
  {
    id: 13,
    name: "LED Desk Lamp",
    price: 749,
    image: [
      "https://m.media-amazon.com/images/I/211PTIeRKvL._UF894,1000_QL80_.jpg",
      "https://rukminim2.flixcart.com/image/704/844/xif0q/table-lamp/m/x/a/osring-s-971-led-desk-lamp-rechargeable-study-lamp-with-pen-original-imagvr9zpzj7uuea.jpeg?q=90&crop=false",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PLivRId1s36MEWozJ9dgbPPgAIV4LCAQ&s"
    ],
    category: "Electronics",
    description: "Adjustable brightness with USB charging port.",
    rating: 4.4
  },
  {
    id: 14,
    name: "Wireless Earbuds",
    price: 1599,
    image: [
      "https://m.media-amazon.com/images/I/71RFdy6y6LL.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg5vc4u1Pz9GBGv5-OtPx_G0tAZ0vhksZhA&s",
      "https://www.unboxify.in/cdn/shop/files/71_BBZBBT2L._SL1500.jpg?height=645&pad_color=fff&v=1735905649&idh=645"
    ],
    category: "Electronics",
    description: "True wireless stereo earbuds with mic.",
    rating: 4.2
  },
  {
    id: 15,
    name: "Ceramic Coffee Mug",
    price: 199,
    image: [
      "https://www.bbassets.com/media/uploads/p/l/40245682_2-tibros-ceramic-stoneware-1116-single-teacoffee-mug-lightweight-durable-ivory.jpg",
      "https://images.woodenstreet.de/image/cache/data/homeware/tableware/coffee-mugs/brown-hand-painted-ceramic-coffee-mug-with-spoon/updated/44-810x702.jpg",
      "https://www.fnp.com/images/pr/l/v20221208160014/black-n-gold-ceramic-mug-with-mirror-id1.jpg"
    ],
    category: "Home",
    description: "Microwave-safe ceramic mug with printed design.",
    rating: 4.6
  }
]
;

export default products;