


// Mock Data
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
];
let products = [
  { id: 1, name: "Mobile" },
  { id: 2, name: "Laptop" }
];


async function getAllUsers(req,res) {
    res.json(users);
}

async function getUserById(req,res) {
    const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

async function getAllProducts(req,res) {
    res.json(products);
}

async function getProductById(req,res) {
    const product = products.find(u => u.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "product not found" });
  }
}

module.exports={
    getUserById,getAllUsers,getProductById,getAllProducts
}