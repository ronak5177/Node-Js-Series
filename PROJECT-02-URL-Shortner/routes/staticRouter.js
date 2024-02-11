const express = require("express")
const URL = require("../models/url")
const { restrictedTo } = require("../middlewares/auth")

const router = express.Router()

router.get("/admin/urls", restrictedTo(['ADMIN']), async (req, res)=>{
    const allUrls = await URL.find({})
    return res.render("home", {
        urls: allUrls,
    })
})

router.get("/", restrictedTo(['NORMAL', 'ADMIN']), async (req, res)=>{
    const allUrls = await URL.find({ createdBy: req.user._id })
    return res.render("home", {
        urls: allUrls,
    })
})

router.get("/signup", async (req, res)=>{
    return res.render("signup")
})

router.get("/login", async (req, res)=>{
    return res.render("login")
})

module.exports = router;