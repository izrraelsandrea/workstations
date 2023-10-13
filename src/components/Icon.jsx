import iconURL from "../assets/computer.png";

const Icon = () => {
  return (
    <div>
      <img
        src={iconURL}
        width="25px"
        height="25px"
        alt="Workstation Icon"
        loading="lazy"
      />
    </div>
  );
};
export default Icon;
