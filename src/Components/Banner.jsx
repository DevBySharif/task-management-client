import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh] bg-transparent">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
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
