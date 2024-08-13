const express = require('express');
const http = require('http');
require('dotenv').config();
const socketIo = require('socket.io');
const { Snaptrade } = require("snaptrade-typescript-sdk");

// Створення Express-додатка
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Порт для запуску сервера
const PORT = 5000;
const snaptrade = new Snaptrade({
      consumerKey: process.env.consumerKey,
      clientId: process.env.clientId,
    });

const getAll = io.of('/getAll');
getAll.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getAllUserHoldingsResponse = await snaptrade.accountInformation.getAllUserHoldings({
      userId: userData.userId,
      userSecret: userData.userSecret,
      brokerageAuthorizations: userData.brokerageAuthorizations,
    });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getAllUserHoldingsResponse.data));
  });
});

const listUser = io.of('/listUser');
listUser.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const listUserAccountsResponse =
  await snaptrade.accountInformation.listUserAccounts({
    userId: userData.userId,
    userSecret: userData.userSecret,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(listUserAccountsResponse.data));
  });
});

const deleteCom = io.of('/delete');
deleteCom.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const deleteSnapTradeUserResponse = await snaptrade.authentication.deleteSnapTradeUser({
      userId: userData.userId,
    });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(deleteSnapTradeUserResponse.data));
  });
});

const reg = io.of('/reg');
reg.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const registerSnapTradeUserResponse =
  await snaptrade.authentication.registerSnapTradeUser({
    userId: userData.userId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(registerSnapTradeUserResponse.data));
  });
});

const reset = io.of('/reset');
reset.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const registerSnapTradeUserResponse =
    await snaptrade.authentication.resetSnapTradeUserSecret({
      userId: userData.userId,
      userSecret: userData.userSecret,
    });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(registerSnapTradeUserResponse.data));
  });
});

const listBroker = io.of('/listBroker');
listBroker.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const listBrokerageAuthorizationsResponse =
  await snaptrade.connections.listBrokerageAuthorizations({
    userId: userData.userId,
    userSecret: userData.userSecret,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(listBrokerageAuthorizationsResponse.data));
  });
});

const accBalance = io.of('/accBalance');
accBalance.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserAccountBalanceResponse =
  await snaptrade.accountInformation.getUserAccountBalance({
    userId: userData.userId,
    userSecret: userData.userSecret,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserAccountBalanceResponse.data));
  });
});

const accOrders = io.of('/accOrders');
accOrders.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserAccountOrdersResponse =
  await snaptrade.accountInformation.getUserAccountOrders({
    userId: userData.userId,
    userSecret: userData.userSecret,
    state: userData.state,
    days: userData.days,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserAccountOrdersResponse.data));
  });
});

const accPositions = io.of('/accPositions');
accPositions.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserAccountPositionsResponse =
    await snaptrade.accountInformation.getUserAccountPositions({
    userId: userData.userId,
    userSecret: userData.userSecret,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserAccountPositionsResponse.data));
  });
});

const userHoldings = io.of('/userHoldings');
userHoldings.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserHoldingsResponse =
  await snaptrade.accountInformation.getUserHoldings({
    userId: userData.userId,
    userSecret: userData.userSecret,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserHoldingsResponse.data));
  });
});

const orderImpact = io.of('/orderImpact');
orderImpact.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getOrderImpactResponse = await snaptrade.trading.getOrderImpact({
      userId: userData.userId,
      userSecret: userData.userSecret,
      accountId: userData.accountId,
      action: "BUY",
      order_type: "Limit",
      price: 31.33,
      stop: 31.33,
      time_in_force: "FOK",
      universal_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
      notional_value: 100,
    });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getOrderImpactResponse.data));
  });
});

const accQuotes = io.of('/accQuotes');
accQuotes.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserAccountQuotesResponse =
  await snaptrade.trading.getUserAccountQuotes({
    userId: userData.userId,
    userSecret: userData.userSecret,
    symbols: userData.symbols,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserAccountQuotesResponse.data));
  });
});

const listHoldings = io.of('/listHoldings');
listHoldings.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const listOptionHoldingsResponse = await snaptrade.options.listOptionHoldings({
      userId: userData.userId,
      userSecret: userData.userSecret,
      accountId: userData.accountId,
    });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(listOptionHoldingsResponse.data));
  });
});

const getActivities = io.of('/getActivities');
getActivities.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getActivitiesResponse =
  await snaptrade.transactionsAndReporting.getActivities({
    startDate: userData.startDate,
    endDate: userData.endDate,
    accounts:
    userData.accountId,
    brokerageAuthorizations:
    userData.brokerageAuthorizations,
    type: userData.type,
    userId: userData.userId,
    userSecret: userData.userSecret,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getActivitiesResponse.data));
  });
});

const accDetails = io.of('/accDetails');
accDetails.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const getUserAccountDetailsResponse =
  await snaptrade.accountInformation.getUserAccountDetails({
    userId: userData.userId,
    userSecret: userData.userSecret,
    accountId: userData.accountId,
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(getUserAccountDetailsResponse.data));
  });
});

const login = io.of('/login');
login.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const loginSnapTradeUserResponse =
  await snaptrade.authentication.loginSnapTradeUser({
    userId: userData.userId,
    userSecret: userData.userSecret,
    broker: userData.broker,
    immediateRedirect: true,
    customRedirect: '',
    reconnect: "",
    connectionType: "read",
    connectionPortalVersion: "v2",
  });
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(loginSnapTradeUserResponse.data));
  });
});

const list = io.of('/list');
list.on('connection', (socket) => {
  console.log('Клієнт підключився:', socket.id);
      
  // Обробка події від клієнта
  socket.on('sendUserData', async (userData) => {
    console.log('Отримано дані від клієнта:', userData);
    const listSnapTradeUsersResponse = await snaptrade.authentication.listSnapTradeUsers();
    // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
    socket.emit('data', JSON.stringify(listSnapTradeUsersResponse.data));
  });
});
// Підключення клієнтів
io.on('connection', async (socket) => {
        console.log('Клієнт підключився:', socket.id);
        const checkResponse = await snaptrade.apiStatus.check();
        socket.emit('data', JSON.stringify(checkResponse.data));
        socket.on('disconnect', () => {
          console.log('Клієнт відключився:', socket.id);
        });
      });

// Запуск сервера
server.listen(process.env.PORT || PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});