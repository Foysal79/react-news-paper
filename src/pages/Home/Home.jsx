import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className="space-y-4">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6"> 
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="lg:col-span-2  space-y-10 p-4">
                {
                    news.map(aNews => <NewsCard key={aNews.id} news={aNews}  ></NewsCard> )
                }
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;