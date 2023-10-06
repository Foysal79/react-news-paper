import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
     
      <button className="btn btn-primary rounded-r-none">Breaking News</button>
      <Marquee className="border bg-sky-200 text-black rounded-r-md" pauseOnHover={true} speed={150}>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
       <Link className="mr-12 bg-red-300" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
       <Link className="mr-12" to='/'> I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
      
    </div>
  );
};

export default BreakingNews;
