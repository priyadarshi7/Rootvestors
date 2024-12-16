import React from "react"

import img1 from "../assets/Newsletter/CoverImages/Rootvestors_mobile.png"
import Rootwise_16dec from "../assets/pdf/Rootwise_16December.pdf"
const NewsletterData = [
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