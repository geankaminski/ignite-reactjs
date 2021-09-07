import { Container } from "../Header/styles";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}