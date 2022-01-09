import styled from "@emotion/styled";

export const NoResultMessage = styled.p`
  font-size: 20px;
  line-height: 2;

  color: var(--txt-color);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-height: 300px;
  overflow-y: auto;
  padding: 30px 15px;

  border: none;
  border-radius: 2px;
  box-shadow: 0 5px 7px 2px #45815b, 0 5px 7px 2px #2a2a2a,
    0 2px 2px rgb(0 0 0 / 12%);

  background-image: linear-gradient(180deg, #334439, #151b17);

  &::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #45815b;
  }
`;

export const Author = styled.p`
  color: var(--main-txt-color);
  font-size: 22px;
  line-height: 2;
  text-transform: uppercase;
`;

export const Message = styled.p`
  text-indent: 40px;
  color: var(--txt-color-green);
  font-size: 18px;
  line-height: 1.5;
`;

export const CreatedDate = styled.time`
  align-self: flex-end;
  color: var(--main-txt-color);
`;
