import { v4 as uuidv4 } from "uuid";
// {
    //     username:"linu18",
    //     name:"Lina",
    //     password:"linaaaa"
    // },
    // {
    //     username:"saurabh18",
    //     name:"Saurabh",
    //     password:"saurabhhh"
    // },
let users = [];
export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.name} added to the database`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, name, password } = req.body;
  const user = users.find((user) => user.id === id);
  if (name) user.name = name;
  if (username) user.username = username;
  if (password) user.password = password;

  res.send(`User with the id ${id} has been updated`);
};
