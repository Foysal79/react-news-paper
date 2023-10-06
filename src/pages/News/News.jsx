import { useParams } from "react-router-dom";
import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";


const News = () => {
    const {id} = useParams();
    return (
        <div>
             <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                   <h2>News Details</h2>
                   <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;