import React,{useState,useEffect} from 'react';
import MyNavbar from './components/Navbar';
import HomeContent from './components/HomeContent';
import AboutSiteContent from './components/AboutSiteContent'
import AboutMeContent from './components/AboutMeContent';
import ResumeContent from './components/ResumeContent';


const App = () => {
    // const themeHook=useState("navy");
    const pageRefs = [
		["home", HomeContent],
		["about this site", AboutSiteContent],
		["about me", AboutMeContent],
		["education & skills", ResumeContent]
    ];
    const [page, setPage] = useState("home");
    const [pageHTML, setPageHTML] = useState(pageRefs["home"]);

    useEffect(() => {
        if (pageRefs[page]){
            setPageHTML(pageRefs[page]);
        }
    }, [page]);
    
    return(
        <div>
            <MyNavbar pageRefs={pageRefs} setPage={setPage}/>
            {pageHTML}
        </div>
    );
}

export default App;