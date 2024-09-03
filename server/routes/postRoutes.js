import { post, getPost } from "../controllers/post.js";
import Express from "express";


const router = Express.Router()

router.post("/post", post)
// router.get("/getall", getPosts)
router.get("/getall", getPost)

export default router
