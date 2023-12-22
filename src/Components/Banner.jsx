import { Link } from "react-router-dom";
import img from "../assets/window.png";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh] bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="mockup-window border bg-base-300">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white">
            TaskHub - Collaborative Task Management Platform
          </h1>
          <p className="py-6 text-white">
            Plan, organize, and collaborate on any project with task management
            that can be customized for every need.
          </p>
          <Link to="/dashboard">
            <button className="btn btn-primary">Let’s Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
