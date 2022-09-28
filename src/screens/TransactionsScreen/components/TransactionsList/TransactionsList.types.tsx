export interface Props {
    searchPhrase: string,
    transactionsList: Array<TransactionsListItem>,
}

export interface TransactionsListItem {
    amount: number
    comment: string
    created_at: string
    id: string
    is_paid: number
    updated_at: string
    user_id: number
}