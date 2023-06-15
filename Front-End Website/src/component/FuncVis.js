import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShowChart from "./ShowChart";

function FuncVis() {
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState(null);
  const [label, setLabel] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const visualization = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("negara", type.charAt(0).toUpperCase() + type.slice(1));
      formData.append("tahun", year);
      let response = await fetch(
        "https://inimodel-dot-eco-live-389407.et.r.appspot.com/predict",
        {
          method: "POST",
          body: formData,
        }
      );
      response = await response.json();
      const labels = Array.from(
        Array(Object.keys(response["CO2 Levels"]).length).keys()
      );
      const dataModel = Object.values(response["CO2 Levels"]);
      setLabel(labels);
      setData(dataModel);
    } catch (err) {
      alert("Negara tidak ada");
    }
  };

  return (
    <div>
      <Container>
        <Row className="text-center">
          <form onSubmit={visualization}>
            <label style={{ marginRight: "10px" }}>Year:</label>
            <input
              type="number"
              value={year}
              onChange={handleYearChange}
              style={{ width: "80px" }}
            />
            <label style={{ marginLeft: "30px", marginRight: "10px" }}>
              Country:
            </label>
            <input type="text" value={type} onChange={handleTypeChange} />
            <br />
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginTop: "20px" }}
            >
              Analyze
            </button>
          </form>
        </Row>
        {data && <ShowChart data={data} labels={label} />}
        {/* {imageSrc && <img src={imageSrc} alt="Generated Image" />} */}
      </Container>
    </div>
  );
}

export default FuncVis;
