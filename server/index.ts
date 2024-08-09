// const { Snaptrade } = require("snaptrade-typescript-sdk");
// const express = require('express');
// const bodyParser = require('body-parser');
// const socketIo = require('socket.io');
// const http = require('http');

// const app = express();

// const jsonParser = bodyParser.json();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(express.json());
// const server = http.createServer(app);
// const io = socketIo(server);
 
// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// io.on('connection', (socket) => {
//   console.log('Клієнт підключився:', socket.id);

//   // Обробка події відключення
//   socket.on('disconnect', () => {
//     console.log('Клієнт відключився:', socket.id);
//   });
// });

// const snaptrade = new Snaptrade({
//   consumerKey: 'lvjONDuH7231UgFgNNtdNUqMbKq7J26ToForrSZXmWJjNcy578',
//   clientId: 'MVMNT-TEST',
// });

// app.get('/', async (req, res) => {
//   res.send('Nothing here');
// })

// app.get('/check', async (req, res) => {
//   const checkResponse = await snaptrade.apiStatus.check();
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(checkResponse.data));
//   res.end();
// })

// app.post('/list', async (req, res) => {
//   const listSnapTradeUsersResponse = await snaptrade.authentication.listSnapTradeUsers();
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(listSnapTradeUsersResponse.data));
//   res.end();
// })

// app.post('/listUser', urlencodedParser, async (req, res) => {
//   console.log(req.body);
//   const listUserAccountsResponse =
//   await snaptrade.accountInformation.listUserAccounts({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(listUserAccountsResponse.data));
//   res.end();
// })

// app.post('/login', urlencodedParser, async (req, res) => {
//   const loginSnapTradeUserResponse =
//   await snaptrade.authentication.loginSnapTradeUser({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     broker: req.body.broker,
//     immediateRedirect: true,
//     customRedirect: '',
//     reconnect: "",
//     connectionType: "read",
//     connectionPortalVersion: "v2",
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(loginSnapTradeUserResponse.data));
//   res.end();
// })

// app.post('/delete', urlencodedParser, async (req, res) => {
//   const deleteSnapTradeUserResponse = await snaptrade.authentication.deleteSnapTradeUser({
//     userId: req.body.userId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(deleteSnapTradeUserResponse.data));
//   res.end();
// })

// app.post('/reg', urlencodedParser, async (req, res) => {
//   const registerSnapTradeUserResponse =
//   (await snaptrade.authentication.registerSnapTradeUser({
//     userId: req.body.userId,
//   })).data;
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(registerSnapTradeUserResponse));
//   res.end();
// })

// app.post('/reset', urlencodedParser, async (req, res) => {
//   const resetSnapTradeUserSecretResponse =
//   await snaptrade.authentication.resetSnapTradeUserSecret({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(resetSnapTradeUserSecretResponse.data));
//   res.end();
// })

// app.post('/getAll', urlencodedParser, async (req, res) => {
//       const getAllUserHoldingsResponse = await snaptrade.accountInformation.getAllUserHoldings({
//         userId: req.body.userId,
//         userSecret: req.body.userSecret,
//         brokerageAuthorizations: req.body.brokerageAuthorizations,
//       });
  
//       // Відправка даних назад клієнту (або всім клієнтам)
//       io.emit('data', JSON.stringify(getAllUserHoldingsResponse.data));
//       res.status(200).send({ message: 'Дані отримано і оброблено.' });
//     // Відключення клієнта
//   // const getAllUserHoldingsResponse =
//   // await snaptrade.accountInformation.getAllUserHoldings({
//   //   userId: req.body.userId,
//   //   userSecret: req.body.userSecret,
//   //   brokerageAuthorizations: req.body.brokerageAuthorizations,
//   // });
//    //     res.writeHead(200, { 'Content-Type': 'application/json' });
//   // res.write(JSON.stringify(getAllUserHoldingsResponse.data));
//   // res.end();
// })

// app.post('/listBroker', urlencodedParser, async (req, res) => {
//   const listBrokerageAuthorizationsResponse =
//   await snaptrade.connections.listBrokerageAuthorizations({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(listBrokerageAuthorizationsResponse.data));
//   res.end();
// })

// app.post('/accBalance', urlencodedParser, async (req, res) => {
//   const getUserAccountBalanceResponse =
//   await snaptrade.accountInformation.getUserAccountBalance({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getUserAccountBalanceResponse.data));
//   res.end();
// })

// app.post('/accDetails', urlencodedParser, async (req, res) => {
//   const getUserAccountDetailsResponse =
//   await snaptrade.accountInformation.getUserAccountDetails({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getUserAccountDetailsResponse.data));
//   res.end();
// })

// app.post('/accOrders', urlencodedParser, async (req, res) => {
//   const getUserAccountOrdersResponse =
//   await snaptrade.accountInformation.getUserAccountOrders({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     state: req.body.state,
//     days: req.body.days,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getUserAccountOrdersResponse.data));
//   res.end();
// })

// app.post('/accPositions', urlencodedParser, async (req, res) => {
//   io.on('connection', async (socket) => {
//     console.log('Клієнт підключився:', socket.id);
//     const getUserAccountPositionsResponse =
//     await snaptrade.accountInformation.getUserAccountPositions({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//   });
  
//     // Обробка події від клієнта
//     socket.on('sendUserData', (userData) => {
//       console.log('Отримано дані від клієнта:', userData);
  
//       // Відправка даних назад клієнту (або всім клієнтам)
//       // const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
//       socket.emit('data', JSON.stringify(getUserAccountPositionsResponse.data));
//     });
  
//     // Відключення клієнта
//     socket.on('disconnect', () => {
//       console.log('Клієнт відключився:', socket.id);
//     });
//   });
//   // const getUserAccountPositionsResponse =
//   // await snaptrade.accountInformation.getUserAccountPositions({
//   //   userId: req.body.userId,
//   //   userSecret: req.body.userSecret,
//   //   accountId: req.body.accountId,
//   // });
//   // res.writeHead(200, { 'Content-Type': 'application/json' });
//   // res.write(JSON.stringify(getUserAccountPositionsResponse.data));
//   res.end();
// })

// app.post('/userHoldings', urlencodedParser, async (req, res) => {
//   const getUserHoldingsResponse =
//   await snaptrade.accountInformation.getUserHoldings({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getUserHoldingsResponse.data));
//   res.end();
// })

// app.post('/orderImpact', urlencodedParser, async (req, res) => {
//   const getOrderImpactResponse = await snaptrade.trading.getOrderImpact({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//     action: "BUY",
//     order_type: "Limit",
//     price: 31.33,
//     stop: 31.33,
//     time_in_force: "FOK",
//     universal_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
//     notional_value: 100,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getOrderImpactResponse.data));
//   res.end();
// })

// app.post('/accQuotes', urlencodedParser, async (req, res) => {
//   const getUserAccountQuotesResponse =
//   await snaptrade.trading.getUserAccountQuotes({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     symbols: req.body.symbols,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getUserAccountQuotesResponse.data));
//   res.end();
// })

// app.post('/listHoldings', urlencodedParser, async (req, res) => {
//   const listOptionHoldingsResponse = await snaptrade.options.listOptionHoldings({
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//     accountId: req.body.accountId,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(listOptionHoldingsResponse.data));
//   res.end();
// })

// app.post('/getActivities', urlencodedParser, async (req, res) => {
//   const getActivitiesResponse =
//   await snaptrade.transactionsAndReporting.getActivities({
//     startDate: req.body.startDate,
//     endDate: req.body.endDate,
//     accounts:
//     req.body.accountId,
//     brokerageAuthorizations:
//     req.body.brokerageAuthorizations,
//     type: req.body.type,
//     userId: req.body.userId,
//     userSecret: req.body.userSecret,
//   });
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(getActivitiesResponse.data));
//   res.end();
// })

// server.listen(process.env.PORT || 5000);

// console.log("Server is working");
