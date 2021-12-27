import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: nowrap;

  margin: 20px 0;
  padding: 10px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;

  width: 70px;
  height: 40px;
  padding: 0;

  cursor: pointer;

  svg {
    color: var(--main-txt-color);
    width: 100%;
    height: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    svg {
      color: var(--txt-color);
    }
  }

  &:hover:not(:disabled),
  &:focus {
    transform: scale(1.1);
    svg {
      color: var(--main-text-color-hover);
    }
  }
`;

export const PageNum = styled.span`
  color: var(--main-txt-color);
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
`;
