import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;
export const Content = styled(Dialog.Content)`
  min-width: 40.1rem;
  border-radius: 6px;
  padding: 4rem 4.8rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 90vw;
    min-width: auto;
    max-width: 50rem;
    padding: 3rem 2.4rem;
    margin: 2rem;
  }

  @media (max-width: 480px) {
    width: 95vw;
    padding: 2.4rem 2rem;
    margin: 1rem;
    max-height: 90vh;
    overflow-y: auto;
  }
  form {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    @media (max-width: 480px) {
      margin-top: 2.4rem;
      gap: 1.2rem;
    }

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1.6rem;

      @media (max-width: 480px) {
        padding: 1.4rem;
        font-size: 1.4rem;
      }

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 2rem;
      border-radius: 6px;
      margin-top: 2rem;
      cursor: pointer;

      @media (max-width: 480px) {
        height: 4.8rem;
        margin-top: 1.6rem;
        font-size: 1.4rem;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 0.8rem;

  @media (max-width: 480px) {
    gap: 1.2rem;
    margin-top: 0.6rem;
  }
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme["gray-300"]};

  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;
    gap: 0.6rem;
    font-size: 1.4rem;
  }

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }
  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme["gray-600"]};
  }
  &[data-state="checked"] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
