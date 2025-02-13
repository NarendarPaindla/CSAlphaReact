import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const result = await response.json();
        console.log("Title:", result.title);
        setData(result.title);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after the first render

  return (
    <div>
      <p>{data ? `Title: ${data}` : "Data is being fetched..."}</p>
    </div>
  );
}

export default UseEffectExample;