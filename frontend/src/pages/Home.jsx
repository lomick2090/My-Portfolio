import { useEffect, useState } from "react"
import API_KEY from "../API_KEY"

export default function Home() {
    const [background, setBackground] = useState('')

    useEffect(() => {
        async function getPhoto() {
            const response = await fetch(`https://api.unsplash.com/photos/random/?count=1&query=nature+landscape&orienation=landscape&client_id=${API_KEY}`)
            const data = await response.json();
            setBackground(data[0].urls.raw)
        }
        getPhoto()
    }, [])

    const backgroundStyle = {
        backgroundImage: `url(${background})`
    }
    
    return (
        <div>
            <div className='background' style={backgroundStyle}>
                <div className='center'>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h1>Jesse Stahl</h1>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <section id='bio' className="bio">

                <h1>Bio</h1>

                <hr/>

                <p>
                I'm Jesse Stahl, a skilled and dedicated front-end developer with a passion for creating interesting projects with a perfect 
                user experience. I have honed my skills in HTML, CSS, and JavaScript, staying up-to-date with the latest frameworks and 
                technologies such as React, and I take pride in writing clean, well-structured code that not only meets the project 
                requirements but also ensures maintainability and scalability.
                </p>

                <p>
                Having worked on various projects, I am proficient in translating design concepts into pixel-perfect websites, ensuring a 
                seamless user interface and optimal performance across different devices and browsers. I am well-versed in implementing 
                accessibility standards, ensuring that everyone can access and use the applications I develop.
                </p>
                
                <p>
                After being my own boss for three years, I am self-motivated, detail-oriented, and possess a strong problem-solving mindset. 
                I am comfortable working independently, managing my time effectively, and delivering high-quality work.
                My past employments as a truck driver and a line cook have taught me how to work well in a team setting, getting time-sensitive
                items done while collaborating with others.
                </p>

                
                
                
            </section>

        </div>
    )
}