import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
// import "../../css/user_experince/home.css";

const Home = () => {
  return (
    <div className="bg">
      <div className="custom-container">
        <Container className="text-center py-5">
          <Row className="justify-content-center align-items-center">
            <Col md={8}>
              <h1 className="custom-text display-4">Make</h1>
              <h1 className="custom-text display-4">Fun</h1>
              <p className="custom-paragraph lead my-4">
                Lorem Ipsum adalah teks dummy dari industri percetakan dan
                typesetting. Lorem Ipsum telah menjadi teks dummy standar
                industri sejak 1500-an, ketika seorang pencetak tidak dikenal
                mengambil galley dari jenis dan mengacaknya untuk membuat buku
                spesimen. Itu telah bertahan tidak hanya lima abad, tetapi juga
                melompat ke typesetting elektronik, tetap tidak berubah secara
                esensial.
              </p>
              <Button className="custom-button btn-light btn-lg my-2">
                Explore Now
              </Button>
              <div className="social-icons mt-4">
                <FaInstagram size={30} className="icon mx-2" />
                <FaFacebook size={30} className="icon mx-2" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;