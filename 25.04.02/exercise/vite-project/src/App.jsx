import AddForm from "./components/AddForm";
import Courses from "./components/Courses";
import array from "./data/data";
import { useState } from "react";


function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = data.filter((q) => {
    return q.name
    .toLowerCase()
    .trim()
    .includes(searchQuery.trim().toLowerCase());

  })

  return (
    <>
      <AddForm/>
      
      <Courses data={filteredCourses}/>
      
    </>
  )
}

export default App
