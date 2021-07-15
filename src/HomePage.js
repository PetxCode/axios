import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  const [fetchData, setFetchData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    if (res) {
      setFetchData(res.data);
      console.log("This is the Data: ", fetchData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {fetchData.map(({ id, title, description, image, category }) => (
        <RouteLink to={`/detail/${id}`}>
          <Wrapper key={id}>
            <Image src={image} />
            <span>{title}</span>
            <div>{category}</div>
          </Wrapper>
        </RouteLink>
      ))}
    </Container>
  );
};

export default HomePage;

const RouteLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 5px;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 230px;
  background-color: #4a154b;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  font-size: 12px;

  > span {
    font-size: 8px;
    font-weight: bold;
    margin-top: 10px;
    font-family: Poppins;
  }
  > div {
    font-size: 5px;
    display: flex;
    justify-content: flex-end;
    color: red;
    letter-spacing: 1.3px;
    margin-top: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
