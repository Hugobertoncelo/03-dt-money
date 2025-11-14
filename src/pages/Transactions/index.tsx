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
  DeleteButton,
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
        <SearchForm />{" "}
        <TransactionsTable>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td data-label="Descrição" width="40%">
                    {transaction.description}
                  </td>{" "}
                  <td data-label="Valor" width="20%">
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td data-label="Categoria" width="20%">
                    {transaction.category}
                  </td>{" "}
                  <td data-label="Data" width="15%">
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td width="5%" style={{ textAlign: "center" }}>
                    <DeleteButton
                      onClick={() => handleDelete(transaction.id)}
                      title="Remover transação"
                    >
                      <FiTrash2 size={18} />
                    </DeleteButton>
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
