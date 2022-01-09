import styled from "@emotion/styled";
import defaultImage from "../../images/avatar.png";

export const NoResultMessage = styled.p`
  font-size: 20px;
  line-height: 2;

  color: var(--txt-color);
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Card = styled.li`
  flex: 1 1 100%;
  max-width: 150px;
  min-height: 308px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 5px;
  padding: 14px 7px;
  background-color: #ffe4c4;
  border-radius: 3px;
`;

export const InfoParagraph = styled.p`
  font-style: italic;
  font-size: 14px;
`;

export const AvatarThumb = styled.div`
  align-self: end;

  width: 130px;
  height: 195px;
  background-image: url(${defaultImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;
