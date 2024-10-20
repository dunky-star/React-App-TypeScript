import { useEffect, useState } from "react";
import axios from "axios";
const url =
  "https://dni523ixjonzvn4ikzkvn7yngy0ilmff.lambda-url.us-east-2.on.aws/";

const MyComp = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const studentsFromLambda = await axios.get(url);
      const data = studentsFromLambda.data;
      setStudents(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h3>My Cloud Computing Lab</h3>
      <ol>
        {students.map((student, i) => (
          <li key={i}>{student}</li>
        ))}
      </ol>
    </div>
  );
};
export default MyComp;
