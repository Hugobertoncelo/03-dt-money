import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  margin: 6.4rem auto 0;
  padding: 0 2.4rem;

  @media (max-width: 768px) {
    margin: 4rem auto 0;
    padding: 0 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    margin: 3rem auto 0;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;

    thead {
      display: none;
    }

    tbody,
    tr,
    td {
      display: block;
    }

    tr {
      background: ${(props) => props.theme["gray-700"]};
      border-radius: 6px;
      margin-bottom: 1rem;
      padding: 1.6rem;
    }

    td {
      background: transparent !important;
      border-radius: 0 !important;
      padding: 0.8rem 0 !important;
      border-bottom: 1px solid ${(props) => props.theme["gray-600"]};

      &:last-child {
        border-bottom: none;
        padding-top: 1rem !important;
        text-align: center;
      }

      &:before {
        content: attr(data-label) ": ";
        font-weight: bold;
        color: ${(props) => props.theme["gray-400"]};
        display: inline-block;
        min-width: 100px;
      }

      &:last-child:before {
        content: "";
      }
    }
  }

  thead th {
    background: ${(props) => props.theme["gray-600"]};
    padding: 2rem 3.2rem;
    text-align: left;
    font-weight: bold;
    color: ${(props) => props.theme["gray-300"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      text-align: center;
    }
  }

  td {
    padding: 2rem 3.2rem;
    background: ${(props) => props.theme["gray-700"]};

    @media (max-width: 768px) {
      padding: 1.6rem 2rem;
      min-width: 120px;
    }

    @media (max-width: 480px) {
      padding: 1.2rem 1.6rem;
      font-size: 1.4rem;
      min-width: 100px;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

      @media (max-width: 768px) {
        min-width: 200px;
      }
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      text-align: center;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:hover {
    background: ${(props) => props.theme["gray-600"]};
  }

  svg {
    color: ${(props) => props.theme["red-300"]};

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
