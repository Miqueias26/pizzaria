import { useState } from "react";
import styled from "styled-components";

const ButtonUI = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Dispa = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <StyledWrapper>
        <button className="font-bold" onClick={Dispa}>
          Descubre
        </button>
      </StyledWrapper>
      {isVisible && <div className="">Olá, você clicou no botão!</div>}
    </>
  );
};

const StyledWrapper = styled.div`
  button {
    width: 9em;
    height: 3em;
    border-radius: 30em;
    font-size: 15px;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #d2210d;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  }

  button::before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #d2210d 0%, #d2210d 100%);
    transition: 0.5s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 9em;
  }
  button:hover {
    color: white;
  }
`;

export default ButtonUI;
