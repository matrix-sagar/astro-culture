import axios, { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";

const useApi = () => {
  const [status, setStatus] = useState("pending");
const [data, setData] = useState<any>(null);
  const request = useCallback(async (config: AxiosRequestConfig<any>) => {
    try {
      const res = await axios(config);
      if (res.status === 200) {
        setStatus("success");
        setData(res?.data);
      }
    } catch (err) {
      setStatus("failed");
      setData(null);
    }
  }, []);
  return { status, data, request };
};

export default useApi;
