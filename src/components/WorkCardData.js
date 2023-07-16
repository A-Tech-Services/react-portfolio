import "./WorkCard.css";
import React from 'react';
import Pro1 from "../images/project1.png";
import Pro2 from "../images/project2.png";
import Pro3 from "../images/project3.png";
import Pro4 from "../images/project4.png";
import WorkCard from "./WorkCard";


const WorkCardData = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                <WorkCard 
                    pic={Pro1}
                    title="Travel Web Page"
                    text="Thriving Facebook community and 
                            top-ranked podcast, Amy inspires a 
                            grounded tangible and self-affirming 
                            sense of 'Wow! I really can do this' 
                            for over 100,000 online entrepreneurs. 
                            Best-selling marketing courses."
                    view = "https://atechtrippy.netlify.app/"
                    source = "https://github.com/A-Tech-Services/Travel-Webpage.git"
                />

                <WorkCard 
                    pic={Pro2}
                    title="LMS/Course Website Design"
                    text="Thriving Facebook community and 
                            top-ranked podcast, Amy inspires a 
                            grounded tangible and self-affirming 
                            sense of 'Wow! I really can do this' 
                            for over 100,000 online entrepreneurs. 
                            Best-selling marketing courses."
                    view = "/"
                    source = "/"
                />

                <WorkCard 
                    pic={Pro3}
                    title="My Portfolio Design"
                    text="Thriving Facebook community and 
                            top-ranked podcast, Amy inspires a 
                            grounded tangible and self-affirming 
                            sense of 'Wow! I really can do this' 
                            for over 100,000 online entrepreneurs. 
                            Best-selling marketing courses."
                    view = "https://atechreactfolio.netlify.app/"
                    source = "https://github.com/A-Tech-Services/react-portfolio.git"
                />

                {/* <WorkCard 
                    pic={Pro4}
                    title={"Web Application"}
                    text="Thriving Facebook community and 
                            top-ranked podcast, Amy inspires a 
                            grounded tangible and self-affirming 
                            sense of 'Wow! I really can do this' 
                            for over 100,000 online entrepreneurs. 
                            Best-selling marketing courses."
                />*/}
            </div>
    </div>
  )
}

export default WorkCardData;