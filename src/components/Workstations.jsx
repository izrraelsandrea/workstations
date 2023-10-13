import WorkstationItem from "./WorkstationItem";
import style from "./Workstations.module.css";

const TEST_DATA = [1, 2, 3, 4, 5, 6, 7];

const Workstatations = () => {
  return (
    <div className={style.container}>
      {TEST_DATA.map((id) => {
        return <WorkstationItem id={id} key={id} />;
      })}
    </div>
  );
};
export default Workstatations;
