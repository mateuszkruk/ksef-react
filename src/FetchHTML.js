import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"

function FetchHTML() {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  var ID = searchParams.get("ID");
  var URL = `/API/GetKsefHtml/?ID=${ID}`
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/xhtml+xml", // Set the appropriate content type
          },
        });
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="invoice">
      {data ? (
        <div dangerouslySetInnerHTML={{ __html: data }} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default FetchHTML;
