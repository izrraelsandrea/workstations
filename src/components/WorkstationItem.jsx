import Status from "./Status";
import styles from "./WorkstationItem.module.css";
import Icon from "./icon";
import useGetWorkstation from "../hooks/useGetWorkstation";

const WorkstationItem = ({ id }) => {
  const [workstationData, , isWorkstationLoading, isWorkstationError] =
    useGetWorkstation(id);

  if (isWorkstationLoading) {
    return <p>Loading Workstation Data</p>;
  }

  if (isWorkstationError) {
    return <p>Error loading the data, please try again later</p>;
  }

  if (workstationData) {
    return (
      <div className={styles.parent}>
        {workstationData.map((workstation) => (
          <div key={workstation.id} className={styles.workstations}>
            <Icon />
            <div>ID: {workstation.id}</div>
            <div> Number: {workstation.deskNumber}</div>
            <div>
              Status: <Status statusData={workstation.bookStatus} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <p>Workstation not found</p>;
};
export default WorkstationItem;
