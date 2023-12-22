import useTask from "../../Hooks/useTask";

const ToDo = () => {
  const { task } = useTask();
  console.log(task);
  return (
    <div className="border rounded-box mx-16 my-12">
      <h2 className="text-xl my-4 mx-4">TO-DO</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Deadlines</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {task?.map((item, indx) => (
              <tr key={item._id}>
                <th>{indx + 1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.deadline}</td>
                <td>{item.priority}</td>
                <td>default</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToDo;
