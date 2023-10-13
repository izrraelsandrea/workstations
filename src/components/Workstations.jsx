import { useState, useEffect } from "react";
import WorkstationItem from "./WorkstationItem";
const Workstatations = () => {
  const [workstationData, setWorkstationData] = useState([]);

  useEffect(() => {
    //mockup API
    fetch("https://65286cf7931d71583df23d13.mockapi.io/testapi/workstations", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setWorkstationData(jsonData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <WorkstationItem workstationData={workstationData} />
    </>
  );
};
export default Workstatations;
