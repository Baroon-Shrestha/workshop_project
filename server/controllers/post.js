import { Post } from "../models/postModel.js"

export const post = async (req, res) => {
    const { content } = req.body

    if (!content) return res.status(400).send("don't leave it empty")

    try {
        const createContent = await Post.create({ content })

        res.status(200).json({
            success: true,
            message: "content posted",
            createContent
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

export const getPost = async (req, res) => {
    const post = await Post.find()

    res.send({
        success: true,
        post
    })
}