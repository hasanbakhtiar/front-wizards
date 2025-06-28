const category = [
  { name: "Laptops", icon: "laptop" },
  { name: "Smartphones", icon: "mobile" },
  { name: "Tablets", icon: "tablet" },
  { name: "Televisions", icon: "tv" },
  { name: "Headphones", icon: "headphones" },
  { name: "Smartwatches", icon: "watch" },
  { name: "Cameras", icon: "camera" },
  { name: "Game Consoles", icon: "gamepad" },
  { name: "Laptop Accessories", icon: "keyboard" },
  { name: "Home Electronics", icon: "home" },
];

const products = [
  {
    title: "Apple MacBook Pro M2",
    price: 3200,
    stock: 12,
    newProduct: true,
    category: "Laptops",
    color: ["space gray", "silver"],
    image: "https://images.unsplash.com/photo-1587202372775-d72c2b254e8d"
  },
  {
    title: "Dell XPS 13",
    price: 2600,
    stock: 8,
    newProduct: false,
    category: "Laptops",
    color: ["black", "white"],
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    title: "iPhone 14 Pro Max",
    price: 2800,
    stock: 15,
    newProduct: true,
    category: "Smartphones",
    color: ["black", "purple"],
    image: "https://images.unsplash.com/photo-1661961112952-04aa7d402d1b"
  },
  {
    title: "Samsung Galaxy S24",
    price: 2500,
    stock: 20,
    newProduct: true,
    category: "Smartphones",
    color: ["blue", "white"],
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Xiaomi Pad 6",
    price: 850,
    stock: 10,
    newProduct: true,
    category: "Tablets",
    color: ["gray", "green"],
    image: "https://images.unsplash.com/photo-1580894908361-9671950335fe"
  },
  {
    title: "iPad Air 2024",
    price: 1300,
    stock: 5,
    newProduct: false,
    category: "Tablets",
    color: ["silver", "rose gold"],
    image: "https://images.unsplash.com/photo-1601049671421-1c2b44b5d299"
  },
  {
    title: "LG OLED C3 55\"",
    price: 3000,
    stock: 6,
    newProduct: true,
    category: "Televisions",
    color: ["black"],
    image: "https://images.unsplash.com/photo-1606813909022-8f7b3be0c9e9"
  },
  {
    title: "Samsung QLED Q80",
    price: 2800,
    stock: 4,
    newProduct: false,
    category: "Televisions",
    color: ["black"],
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974"
  },
  {
    title: "Sony WH-1000XM5",
    price: 750,
    stock: 18,
    newProduct: true,
    category: "Headphones",
    color: ["black", "silver"],
    image: "https://images.unsplash.com/photo-1585386959984-a4155222f480"
  },
  {
    title: "Apple AirPods Pro 2",
    price: 550,
    stock: 25,
    newProduct: false,
    category: "Headphones",
    color: ["white"],
    image: "https://images.unsplash.com/photo-1571867424485-369464b6a26c"
  },
  {
    title: "Apple Watch Series 9",
    price: 950,
    stock: 14,
    newProduct: true,
    category: "Smartwatches",
    color: ["midnight", "starlight"],
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  },
  {
    title: "Samsung Galaxy Watch 6",
    price: 850,
    stock: 10,
    newProduct: false,
    category: "Smartwatches",
    color: ["graphite", "silver"],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    title: "Canon EOS R10",
    price: 2200,
    stock: 3,
    newProduct: true,
    category: "Cameras",
    color: ["black"],
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    title: "Sony Alpha ZV-E10",
    price: 1800,
    stock: 6,
    newProduct: false,
    category: "Cameras",
    color: ["white", "black"],
    image: "https://images.unsplash.com/photo-1536053296544-54a3ab7c2b77"
  },
  {
    title: "PlayStation 5 Slim",
    price: 1400,
    stock: 9,
    newProduct: true,
    category: "Game Consoles",
    color: ["white"],
    image: "https://images.unsplash.com/photo-1606813909022-8f7b3be0c9e9"
  },
  {
    title: "Xbox Series X",
    price: 1350,
    stock: 11,
    newProduct: false,
    category: "Game Consoles",
    color: ["black"],
    image: "https://images.unsplash.com/photo-1616604326448-d3b8315687a5"
  },
  {
    title: "Logitech MX Keys",
    price: 250,
    stock: 16,
    newProduct: true,
    category: "Laptop Accessories",
    color: ["gray"],
    image: "https://images.unsplash.com/photo-1601049671421-1c2b44b5d299"
  },
  {
    title: "Razer DeathAdder V2",
    price: 180,
    stock: 30,
    newProduct: false,
    category: "Laptop Accessories",
    color: ["black"],
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
  },
  {
    title: "Xiaomi Mi Air Purifier 4",
    price: 600,
    stock: 7,
    newProduct: true,
    category: "Home Electronics",
    color: ["white"],
    image: "https://images.unsplash.com/photo-1601049671421-1c2b44b5d299"
  },
  {
    title: "Philips Hue Smart Bulb",
    price: 120,
    stock: 40,
    newProduct: false,
    category: "Home Electronics",
    color: ["multi"],
    image: "https://images.unsplash.com/photo-1581092334394-4c4f50d9df3f"
  }
]


export {products,category};