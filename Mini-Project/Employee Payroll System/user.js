import fs from "fs";
import  bcrypt from "bcrypt"

 let  filePath = "user.json";
export function createUser(req, res) {
  try {
    const { name,  email, password } = req.body;

    if (!name ||!email || !password) {
      return res.status(400).send("All fields are required");
    }

    let users = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      users = JSON.parse(data);

      const existingUser = users.find(u => u.id === id);
      if (existingUser) {
        return res.status(409).send("User already exists");
      }
    }

    let solt = bcrypt.genSaltSync(10);
    let haspassword = bcrypt.hashSync(password, solt)


    const newUser = {
      id: Date.now(),
      name,
      email,
      password:haspassword
    };

    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    res.status(201).send("User created successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
}