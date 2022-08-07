"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopQueries = void 0;
const TableName = "shop_track";
exports.ShopQueries = {
    GetShopTransactions: `
    SELECT transactionTime, playerUUID, eventType, amount, price, item
    FROM ${TableName} as t
    WHERE playerUUID = ? AND transactionTime > ? AND transactionTime < ?
    `,
};
