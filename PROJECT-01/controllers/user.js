const User = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
      <ul>
          ${allDbUsers
            .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
            .join("")}
      </ul>`;
  return res.status(200).send(html);
};

const handleDisplayAllUsersAPI = async (req, res) => {
    const allDbUsers = await User.find({});
    return res.status(200).json(allDbUsers);
  }

const handleGetUserById = async (req, res) => {
    // Get user with id
    const user = await User.findById(req.params.id);
    return res.status(200).send(user);
  }

const handleUpdateUserById = async (req, res) => {
    // Edit user with iddata.
    const body = req.body;
    const id = req.params.id;
    await User.findByIdAndUpdate(id, {
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    return res.status(200).send({ status: "Updation Success", id });
  }

  const handleDeleteUserById = async (req, res) => {
    // Delete user with id
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    return res.status(201).send({ status: "Deletion Success", id });
  }

  const handleCreateNewUser = async (req, res) => {
    // Create a new user
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res
        .status(400)
        .json({ error: "All field are required to create user" });
    }
    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
    console.log("result", result);
    return res.status(201).json({ message: "Success !!", id: result._id });
  }

module.exports ={
    handleGetAllUsers,
    handleDisplayAllUsersAPI,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}