import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContexts";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { FiTrash2 } from "react-icons/fi";

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.deleteTransaction
  );

  async function handleDelete(id: number) {
    await deleteTransaction(id);
  }

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td width="20%">
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td width="20%">{transaction.category}</td>
                  <td width="15%">
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td width="5%" style={{ textAlign: "center" }}>
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                      title="Remover"
                    >
                      <FiTrash2 size={18} color="#e63946" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
