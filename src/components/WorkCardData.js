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
                    text="Embark on unforgettable adventures and explore the world's 
                        wonders with our comprehensive travel guides and curated itineraries."
                    view = "https://atechtrippy.netlify.app/"
                    source = "https://github.com/A-Tech-Services/Travel-Webpage.git"
                />

                <WorkCard 
                    pic={Pro2}
                    title="SK Home Builder"
                    text="Discover endless possibilities to design and build your dream 
                        home with our expert home decorator and builder services."
                    view = "https://atechbuilder.netlify.app/"
                    source = "https://github.com/A-Tech-Services/SKbuilder.git"
                />

                <WorkCard 
                    pic={Pro3}
                    title="My Portfolio Design"
                    text="Experience my creative journey through a captivating portfolio 
                        showcasing my diverse skills, expertise, and passion for innovative design."
                    view = "https://atechreactfolio.netlify.app/"
                    source = "https://github.com/A-Tech-Services/react-portfolio.git"
                />
            </div>
    </div>
  )
}

export default WorkCardData;