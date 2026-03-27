const express = require("express");
const {handleGetAllUsers, 
        handleGetUsersById, 
        handleUpdateUsersById, 
        handleDeleteUserById,
        handleCreateNewUser,} = require("../controllers/user");
const router = express.Router();

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router
    .route("/:id")
    .get(handleGetUsersById)
    .patch(handleUpdateUsersById)
    .delete(handleDeleteUserById);

module.exports = router;