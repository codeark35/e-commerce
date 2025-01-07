import { createContext, useContext, useState } from "react";

/* import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks";
 */
import { getCountriesRequest } from "../api/country";

const CountryContext = createContext();

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) throw new Error("useCountry must be used within a CountryProvider");
  return context;
};

export function CountryProvider({ children }) {
  const [countries, setCountry] = useState([]);
   console.log(countries)
  
  const getCountries = async () => {
    const res = await getCountriesRequest();

    setCountry(res.data.data);
   
  };/*

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      if (res.status === 201) return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    //console.log(id)
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <CountryContext.Provider
      value={{
        countries,
        getCountries,
        /* getTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask, */
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
