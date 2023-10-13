import Status from "./Status";
import styles from "./WorkstationItem.module.css";
import Icon from "./icon";

const WorkstationItem = ({ workstationData }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.parent}>
        {workstationData.map((workstation) => (
          <li key={workstation.id} className={styles.workstations}>
            <Icon />
            <div>ID: {workstation.id}</div>
            <div> Number: {workstation.deskNumber}</div>
            <div>
              Status: <Status statusData={workstation.bookStatus} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WorkstationItem;
