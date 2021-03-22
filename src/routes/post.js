import express, { Router } from "express"
const router = express.Router()

import {
  getPostList,
  // getPostByID,
  createNewPost,
  // updatePost,
  // deletePost,
} from "../controllers/post.controller"
// const employeeController = require("../controllers/employee.controller")

/*get all post  */
router.get("/", getPostList)

/*get  post by ID */
// router.get("/:id", getPostByID)

/*create new post*/
router.post("/", createNewPost)

/* update post */
// router.put("/:id", updatePost)

/* delete post */
// router.delete("/:id", deletePost)

export default router
// module.exports = router
