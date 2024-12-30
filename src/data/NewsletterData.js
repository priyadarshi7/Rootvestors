import React from "react"

import img1 from "../assets/Newsletter/CoverImages/Rootvestors_mobile.png"
import dec302k24 from "../assets/Newsletter/CoverImages/30Dec2k24.png"

import Rootwise_16dec from "../assets/pdf/Rootwise_16December.pdf"
import Rootwise_30dec from "../assets/pdf/Rootwise_30December.pdf"

const NewsletterData = [
    {
        id:2,
        date:"December 30, 2024",
        edition:1,
        volume:2,
        coverImage:dec302k24,
        content: "Your go-to guide for mastering money—featuring investing hacks, compound interest secrets, and the mindset to level up your finances!",
        pdfSrc:Rootwise_30dec,
        route:"/newsletter/view?id=1&edition=1&volume=2"
    },
    {
        id:1,
        date:"December 16, 2024",
        edition:1,
        volume:1,
        coverImage:img1,
        content: "A practical guide to financial literacy, covering budgeting, saving, investing, and key concepts to master money management effectively.",
        pdfSrc:Rootwise_16dec,
        route:"/newsletter/view?id=1&edition=1&volume=1"
    }
]

export default NewsletterData;