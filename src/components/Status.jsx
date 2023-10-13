import style from "./Status.module.css";

const Status = ({ statusData }) => {
  return (
    <>
      {statusData ? (
        <>
          Booked <span className={style.booked}>•</span>
        </>
      ) : (
        <>
          Available <span className={style.available}>•</span>
        </>
      )}
    </>
  );
};
export default Status;
