import React from "react"

//CoverImages
import img1 from "../assets/Newsletter/CoverImages/Rootvestors_mobile.png"
import dec302k24 from "../assets/Newsletter/CoverImages/30Dec2k24.png"
import jan132k25 from "../assets/Newsletter/CoverImages/13Jan2k25.png"
import jan272k25 from "../assets/Newsletter/CoverImages/27Jan2k25.png"

//PDFs
import Rootwise_16dec from "../assets/Newsletter/Pdf/Rootwise_16December.pdf"
import Rootwise_30dec from "../assets/Newsletter/Pdf/Rootwise_30December.pdf"
import Rootwise_13jan from "../assets/Newsletter/Pdf/Rootwise_13January.pdf"
import Rootwise_27Jan_2025 from "../assets/Newsletter/Pdf/Rootwise_27January.pdf"

const NewsletterData = [
    {
        id:4,
        date:"January 27, 2025",
        edition:2,
        volume:2,
        coverImage:jan272k25,
        content: "Clone it like Deepseek!",
        pdfSrc:Rootwise_27Jan_2025,
        route:"/newsletter/view?id=1&edition=1&volume=2"
    },
    {
        id:3,
        date:"January 13, 2025",
        edition:2,
        volume:1,
        coverImage:jan132k25,
        content: "New Year, New Tech!",
        pdfSrc:Rootwise_13jan,
        route:"/newsletter/view?id=1&edition=1&volume=2"
    },
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