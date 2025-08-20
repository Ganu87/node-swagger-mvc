


// Mock Data
let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
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

module.exports={
    getUserById,getAllUsers
}