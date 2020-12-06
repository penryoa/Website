import React from 'react';

const ResumeContent = () => {
    return (
        <div>
            <h1>education & skills</h1>
            <div id="educationDiv">
                <h2>education</h2>
                <p>B.S. in Computer Science, 2020
                <br/>Rose-Hulman Institute of Technology
                <br/>Terre Haute, IN
                </p>
            </div>

            <div id="resumeDiv">
                <h2>resume</h2>
                <object id="resume_obj" data="../items/Resume_Addi-Penry.pdf" type="application/pdf" width="100%" height="500px"/>
            </div>

            <div id="codeDiv">
                <h2>code</h2>
                <p>Given how much it helps me when others have open-source code, I try to do the same when appropriate. I have some sample code <a className="simple_link" target="_blank" rel="noopener noreferrer" href='https://github.com/penryoa/rose-hulman_backup'>from class projects I've been part of</a>, as well as code <a className="simple_link" target="_blank" rel="noopener noreferrer" href='https://github.com/KixorTech/CourseUp/tree/staging'>from my senior project</a> working with a client who has the codebase as open-source. Code <a className="simple_link" target="_blank" rel="noopener noreferrer" href='https://github.com/penryoa/Website'>for this site</a> is accessible as well.</p>
            </div>
        </div>
    );
};

export default ResumeContent;