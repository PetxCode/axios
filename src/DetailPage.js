import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import img from "./codelab.jpg";

const DetailPage = () => {
  const { id } = useParams();
  const [myData, setMyData] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setMyData(res.data[id - 1]);
      console.log(myData);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Image src={myData && myData.image} />
        <p>{myData && myData.description}</p>
        <p>{id}</p>
        <p>{id}</p>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px;
`;
