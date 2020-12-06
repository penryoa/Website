import React from 'react';

const AboutSiteContent = () => {
    return (
        <div>
            <h1>about this site</h1>

            <h2>goals</h2>
            <p>I first started making this site at the beginning of June 2020 with some simple goals:</p>
            <ul class="simple-list">
                <li>grow my skills by trying out new tools (like Bootstrap, Angular, etc)</li>
                <li>show off some of those skills</li>
                <li>create a platform that feels like "me"</li>
            </ul>
            <p>There's a ton of things I look forward to doing and I'm only starting out. Having my own website lets me document my journey <em>~in style~</em>.</p>

            <h2>plans and features</h2>
            <p>I plan to develop and release the following features:</p>
            <ul class="simple-list">
                {/* <li>interactive travel app
                    <ul>
                        <li>it'd help me plan my trips nicely and save info about the trips I've been on.</li>
                        <li>the main purpose is to use a database</li>
                    </ul>
                </li> */}
                <li>an arcade-like mini game
                    <ul>
                        <li>no strong ideas yet. I just want something that lets me further practice object oriented design and makes me laugh.</li>
                        <li>will be written in Java or C++</li>
                        <li>will be open source and possibly on Steam</li>
                        </ul></li>
                <li>interactive budgeting app</li>
                <li>gallery of photos of my cats and hamster</li>
                <li>poem collection</li>
                <li>original music collection (audio, lyrics, download, etc.)</li>
                <li>video game project
                    <ul>
                        <li>this will be a full game released independently or through Steam</li>
                        <li>so far it is still in the design process with limited art and music, but I plan on releasing content as I progress.</li>
                        <li>all the music, art, and code will be done by me, so it's a huge project! it'll be a while before it's released.</li>
                    </ul>
                </li>
            </ul>          
        </div>
    );
};


export default AboutSiteContent;