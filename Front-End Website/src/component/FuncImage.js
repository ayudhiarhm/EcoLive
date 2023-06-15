import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FuncImage() {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onSubmit = async(e) => {
    e.preventDefault();
	console.log(selectedImage);
	const formData = new FormData();
	formData.append("image",selectedImage);
	let response = await fetch("https://eco-live-389407.et.r.appspot.com/predict", {
		method: "POST",
		body: formData
	})
	response = await response.json();
	alert(response['predict']);
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };

  return (
    <>      
      <Container>
        <Row className='text-center'>
          <form onSubmit={onSubmit} className="form-inline">
            <div className="form-group">
              <input type="file" className="form-control" onChange={imageChange} accept="image/*" />
            </div>
            <br />
            <button type="submit" className="btn btn-success">Analyze</button>
          </form>

          {selectedImage && (
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb" />
              <button onClick={removeSelectedImage} style={styles.delete}>
                Repeat
              </button>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}


export default FuncImage;

//Style
const styles = {
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Menengahkan secara horizontal
      alignItems: "center",
    },
    image: { flex: 1, maxWidth: 500, maxHeight: 400 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };
