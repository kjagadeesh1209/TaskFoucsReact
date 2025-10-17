export default function Progresstracker({ tasks = [] }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">
      <p>
        {completedTasks} of {totalTasks} tasks completed
      </p>

      <div
        className="progress-bar"
        style={{ background: "#ddd", height: "10px", borderRadius: "5px", overflow: "hidden" }}
      >
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            background: "green",
            height: "100%",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
}
