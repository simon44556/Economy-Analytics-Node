const TableName = "shop_track";
export const ShopQueries = {
    
    GetShopTransactions: `
    SELECT transactionTime, playerUUID, eventType, amount, price, item
    FROM ${TableName} as t
    WHERE playerUUID = ? AND transactionTime > ? AND transactionTime < ?
    `,
};