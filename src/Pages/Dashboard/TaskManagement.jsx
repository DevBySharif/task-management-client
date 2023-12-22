import { useRef } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTask from "../../Hooks/useTask";
import Completed from "./Completed";
import OnGoing from "./OnGoing";
import ToDo from "./ToDo";

const TaskManagement = () => {
  const { refetch } = useTask();
  const { user } = useAuth();
  const priorityRef = useRef();
  const axiosPublic = useAxiosPublic();
  const handleAddTask = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const deadline = event.target.date.value;
    const priority = priorityRef.current.value;

    const taskInfo = {
      title,
      description,
      deadline,
      priority,
      userEmail: user?.email,
    };

    axiosPublic
      .post("/task", taskInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Task Added");
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-between ml-16 mr-16 items-center">
        <h1 className="text-4xl capitalize font-bold">task management</h1>
        <button
          className="btn btn-neutral btn-sm"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          <svg
            className="w-[20px] h-[20px] fill-[#ffffff]"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
          </svg>{" "}
          Create Task
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleAddTask}>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <input
                  type="text"
                  name="description"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
              <div className="col-span-full sm:col-span-2">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  name="date"
                  type="date"
                  className="text-sm w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900 font-poppins p-3 input input-bordered"
                />
              </div>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Priority</span>
                </div>
                <select className="select select-bordered" ref={priorityRef}>
                  <option disabled defaultValue={"pick one"}>
                    Pick one
                  </option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </label>

              <button type="submit" className="btn mt-6">
                Add Task
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <ToDo></ToDo>
      <OnGoing></OnGoing>
      <Completed></Completed>
    </div>
  );
};

export default TaskManagement;
