import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 4rem 0 12rem;

  @media (max-width: 768px) {
    padding: 2rem 0 8rem;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1.6rem;
    flex-direction: column;
    gap: 2rem;
  }

  img {
    cursor: pointer;

    @media (max-width: 768px) {
      width: 8rem;
      height: auto;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 5rem;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 30rem;
    height: 4.8rem;
    font-size: 1.4rem;
  }

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }
`;
