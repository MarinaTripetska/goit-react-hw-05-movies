import styled from "@emotion/styled";
export const Background = styled.div`
  width: 100%;
  padding: 30px;
  margin-bottom: 50px;
  background-image: repeating-linear-gradient(
    -45deg,
    #747272,
    #747272 10px,
    #435a4c 0,
    #435a4c 20px
  );
`;
export const Form = styled.form`
  margin: 0 auto;

  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  border: none;
  background-color: #fff;
  width: 40px;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    color: #808080;
  }
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border: none;
  padding: 5px 15px;
  outline: none;
  &:focus {
    border: solid 1px #808080;
  }
`;
