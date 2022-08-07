const TableName = "balance_track";
export const BalanceQueries = {
    GetBalances: `
    SELECT transactionTime, playerUUID, eventType, price
    FROM ${TableName} as t
    WHERE playerUUID = ? AND transactionTime > ? AND transactionTime < ?
    `,
};