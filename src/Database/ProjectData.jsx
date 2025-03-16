import React from 'react'
import img1 from '../Assets/Projectimg/weatherapp.avif'
// import img2 from '../Assets/Projectimg/food recipe web.avif'
import img3 from '../Assets/Projectimg/E-Dashboad.avif'
import img4 from '../Assets/Projectimg/social media app.jpeg'
import img5 from '../Assets/Projectimg/Gitprofile.jpg'
import img6 from '../Assets/Projectimg/Shoping web.jpeg'
import img7 from '../Assets/Projectimg/Chatbot.jpeg'
import img8 from '../Assets/Projectimg/color generator.webp'
// import img9 from '../Assets/Projectimg/construction branding blog.jpg'
import img10 from '../Assets/Projectimg/home designer.avif'

const Projectdata = [
    {
        image: img3,
        name: "E-Dashboard Web App",
        technology: "ReactJs, TailwindCSS, ExpressJs, Firebase, JWT",
        details: "A web-based dashboard for real-time analytics, data visualization, and user role management, helping businesses monitor key metrics efficiently.",
        state: "Coming Soon",
        link:""
    },
    {
        image: img1,
        name: "Weather App",
        technology: "ReactJs, Bootstrap, APIs",
        details: "A weather forecasting app that provides real-time updates, including temperature, humidity, and wind speed, using OpenWeather API.",
        state: "Deployed",
        link:"https://react-project-3-weather-app.vercel.app/"
    },
    {
        image: img8,
        name: "Color Generator",
        technology: "HTML, CSS, JavaScript, Bootstrap",
        details: "An interactive tool that generates random colors, displays their hex and RGB values, and allows users to copy colors for design projects.",
         state: "Deployed",
         link:""
    },
    {
        image: img4,
        name: "Social Media App",
        technology: "ReactJs, TailwindCSS, Socket.io, ExpressJs, MongoDB",
        details: "A social networking platform where users can create posts, like, comment, follow others, and chat in real-time with secure authentication.",
         state: "Coming Soon",
         link:""
    },
    {
        image: img6,
        name: "Shopping Website",
        technology: "NextJS, TailwindCSS, MaterialUI",
        details: "A modern eCommerce platform with product browsing, cart management, secure checkout, user authentication, and order tracking.",
        state: "Coming Soon",
        link:""
    },
    {
        image: img7,
        name: "ChatBot App",
        technology: "ReactJs, TailwindCSS, APIs, NodeJS",
        details: "An AI-powered chatbot that understands user queries, provides automated responses, and assists with tasks in real-time conversations.",
        state: "Coming Soon",
        link:""
    },
    {
        image: img10,
        name: "Home Design App",
        technology: "NextJs, TypeScript, TailwindCSS, APIs ",
        details: "A home design tool that allows users to visualize and customize interior and exterior spaces with interactive layouts and 3D elements.",
        state: "Coming Soon",
        link:""
    },
    {
        image: img5,
        name: "GitHub Profile Finder",
        technology: "HTML, CSS, JavaScript, APIs",
        details: "A tool that allows users to search GitHub profiles, displaying user details, repositories, and other information using the GitHub API.",
        state: "Deployed",
        link: "https://gitfilefindx.netlify.app/"
    }
]
export default Projectdata
