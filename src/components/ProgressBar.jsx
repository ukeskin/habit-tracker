export default function ProgressBar({ current, goal }) {
  const percent = (current / goal) * 100;
  return (
    <>
      <div className="progress-bar">
        <div
          className={
            percent < 25
              ? "progress-bar-fill progress-bar-fill-red"
              : percent < 50
              ? "progress-bar-fill progress-bar-fill-orange"
              : percent < 80
              ? "progress-bar-fill progress-bar-fill-yellow"
              : "progress-bar-fill progress-bar-fill-green"
          }
          style={{ width: `${percent}%` }}
        />
      </div>
    </>
  );
}
