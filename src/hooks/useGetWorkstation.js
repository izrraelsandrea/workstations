import { useEffect, useState } from "react";

const useGetWorkstation = (id) => {
  const [workstationData, setWorkstationData] = useState(null);
  const [isWorkstationLoading, setIsWorkstationLoading] = useState(false);
  const [isWorkstationError, setIsWorkstationError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsWorkstationLoading(true);
    fetch(
      "https://65286cf7931d71583df23d13.mockapi.io/testapi/workstations/?id=" +
        id,
      { signal: controller.signal }
    )
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setIsWorkstationLoading(false);
        setWorkstationData(jsonData);
      })
      .catch(() => {
        setIsWorkstationError(true);
        setIsWorkstationLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return [workstationData, isWorkstationLoading, isWorkstationError];
};
export default useGetWorkstation;
