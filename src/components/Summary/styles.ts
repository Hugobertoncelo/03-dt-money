import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1.6rem;
    margin-top: -3rem;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 1rem;
  }
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 3.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};

    @media (max-width: 480px) {
      gap: 1rem;
    }
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;

    @media (max-width: 768px) {
      font-size: 2.8rem;
      margin-top: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 2.4rem;
    }
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
