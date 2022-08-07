"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceQueries = void 0;
const TableName = "balance_track";
exports.BalanceQueries = {
    GetBalances: `
    SELECT transactionTime, playerUUID, eventType, price
    FROM ${TableName} as t
    WHERE playerUUID = ? AND transactionTime > ? AND transactionTime < ?
    `,
};
