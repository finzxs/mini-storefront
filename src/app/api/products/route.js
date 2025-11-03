// products

export async function GET() {
  const products = [
    { id: 'p1',  name: 'Laptop 14"',       price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2',  name: 'Noise-Cancel Headphones', price: 199,  category: 'Electronics', stock: 6 },
    { id: 'p3',  name: 'Smartphone',       price: 899,  category: 'Electronics', stock: 4 },
    { id: 'p4',  name: 'Standing Desk',    price: 329,  category: 'Furniture',   stock: 3 },
    { id: 'p5',  name: 'Ergo Chair',       price: 179,  category: 'Furniture',   stock: 2 },
    { id: 'p6',  name: 'Coffee Beans 2lb', price: 24,   category: 'Grocery',     stock: 12 },
    { id: 'p7',  name: 'Electric Kettle',  price: 49,   category: 'Home',        stock: 7 },
    { id: 'p8',  name: 'LED Desk Lamp',    price: 39,   category: 'Home',        stock: 9 },
    { id: 'p9',  name: 'Mechanical Keyboard', price: 129, category: 'Electronics', stock: 5 },
    { id: 'p10', name: 'Bookshelf',        price: 99,   category: 'Furniture',   stock: 4 },
  ];
  return Response.json(products);
};
