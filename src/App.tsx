
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
    //привет
    //flex flex-col justify-start
    //flex-auto
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Created);
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const location = useLocation();
    const [isTopOfPage, setTopOfPage] = useState<boolean>(true);
    useEffect(() => {
        const scrollAction = () => {
            if (window.scrollY === 0) {
                setTopOfPage(true);
            }

            if (window.scrollY !== 0) {
                setTopOfPage(false);
            }
        };
        window.addEventListener("scroll", scrollAction);
        return () => window.removeEventListener("scroll", scrollAction);
    }, []);

    return (
        <div className="App relative max-w-[1600px] mx-auto">
            {isMenu && <Menu setIsMenu={setIsMenu} isMenu={isMenu} />}
            {location.pathname === `/profile` 
            ? 
            <div className=" relative bg-banner bg-cover bg-center overflow-hidden bg-no-repeat h-[300px] w-[100%] before:bg-black before:w-full before:absolute before:h-full before:opacity-50 before:z-0">
                <Header isMenu={isMenu} setIsMenu={setIsMenu} />
            </div>
            : 
                <Header isMenu={isMenu} setIsMenu={setIsMenu} />
            }
            <Routes>
                <Route path="profile" element={<Profile setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>}/>
                <Route path="/" element= { <Home />}/>
            </Routes>
            
        </div>
    );
};

export default App;
