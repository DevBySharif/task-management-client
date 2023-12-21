import Completed from "./Completed";
import OnGoing from "./OnGoing";
import ToDo from "./ToDo";

const TaskManagement = () => {
  return (
    <div>
      <div className="flex justify-between ml-16 mr-16 items-center">
        <h1 className="text-4xl capitalize font-bold">task management</h1>
        <button className="btn btn-neutral btn-sm">
          <svg
            className="w-[20px] h-[20px] fill-[#ffffff]"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
          </svg>{" "}
          Create Task
        </button>
      </div>
      <ToDo></ToDo>
      <OnGoing></OnGoing>
      <Completed></Completed>
    </div>
  );
};

export default TaskManagement;
