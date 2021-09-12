import styled from "styled-components";

//Navbar

export const Header = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 5%;
  background-color: #323277;
`;

export const HeaderTitle = styled.h3`
  color: #f1f1f1;
  font-size: 26px;
  cursor: pointer;
`;

//Home
export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Box = styled.section`
  height: 100vh;
  width: 90vw;
  margin-top: 10px;
`;

export const StyledTextField = styled.input`
  width: 89%;
  height: 25px;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid black;
  placeholder: "Search your To-dos";
  color: black;
  :focus {
    border-bottom: 1px solid black;
  }
`;

export const Button = styled.button`
  background-color: #555555;
  border: none;
  color: white;
  padding: 5px 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const ContainerSB = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li`
  text-decoration: none;
  padding: 5px 5px;
  margin: 10px 5px;
`;

export const Input = styled.input`
  padding: 0px 10px;
`;

export const DButton = styled.button`
  background-color: none;
  border: none;
`;