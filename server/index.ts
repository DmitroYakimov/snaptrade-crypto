const { Snaptrade } = require("snaptrade-typescript-sdk");
const uuid = require("uuid");
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const snaptrade = new Snaptrade({
  consumerKey: 'lvjONDuH7231UgFgNNtdNUqMbKq7J26ToForrSZXmWJjNcy578',
  clientId: 'MVMNT-TEST',
});

app.get('/list', async (req, res) => {
  const listSnapTradeUsersResponse = await snaptrade.authentication.listSnapTradeUsers();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(listSnapTradeUsersResponse.data));
  res.end();
})

app.post('/listUser', urlencodedParser, async (req, res) => {
  console.log(req.body);
  const listUserAccountsResponse =
  await snaptrade.accountInformation.listUserAccounts({
    userId: req.body.userId,
    userSecret: req.body.userSecret,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(listUserAccountsResponse.data));
  res.end();
})

app.post('/login', urlencodedParser, async (req, res) => {
  const loginSnapTradeUserResponse =
  await snaptrade.authentication.loginSnapTradeUser({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    broker: req.data.broker,
    immediateRedirect: true,
    customRedirect: '',
    reconnect: "",
    connectionType: "read",
    connectionPortalVersion: "v2",
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(loginSnapTradeUserResponse.data));
  res.end();
})

app.post('/delete', urlencodedParser, async (req, res) => {
  const deleteSnapTradeUserResponse = await snaptrade.authentication.deleteSnapTradeUser({
    userId: req.data.userId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(deleteSnapTradeUserResponse.data));
  res.end();
})

app.post('/reg', urlencodedParser, async (req, res) => {
  const registerSnapTradeUserResponse =
  (await snaptrade.authentication.registerSnapTradeUser({
    userId: req.data.userId,
  })).data;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(registerSnapTradeUserResponse));
  res.end();
})

app.post('/reset', urlencodedParser, async (req, res) => {
  const resetSnapTradeUserSecretResponse =
  await snaptrade.authentication.resetSnapTradeUserSecret({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(resetSnapTradeUserSecretResponse.data));
  res.end();
})

app.post('/getAll', urlencodedParser, async (req, res) => {
  const getAllUserHoldingsResponse =
  await snaptrade.accountInformation.getAllUserHoldings({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    brokerageAuthorizations: req.data.brokerageAuthorizations,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getAllUserHoldingsResponse.data));
  res.end();
})

app.post('/listBroker', urlencodedParser, async (req, res) => {
  const listBrokerageAuthorizationsResponse =
  await snaptrade.connections.listBrokerageAuthorizations({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(listBrokerageAuthorizationsResponse.data));
  res.end();
})

app.post('/accBalance', urlencodedParser, async (req, res) => {
  const getUserAccountBalanceResponse =
  await snaptrade.accountInformation.getUserAccountBalance({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserAccountBalanceResponse.data));
  res.end();
})

app.post('/accDetails', urlencodedParser, async (req, res) => {
  const getUserAccountDetailsResponse =
  await snaptrade.accountInformation.getUserAccountDetails({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserAccountDetailsResponse.data));
  res.end();
})

app.post('/accOrders', urlencodedParser, async (req, res) => {
  const getUserAccountOrdersResponse =
  await snaptrade.accountInformation.getUserAccountOrders({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    state: req.data.state,
    days: req.data.days,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserAccountOrdersResponse.data));
  res.end();
})

app.post('/accPositions', urlencodedParser, async (req, res) => {
  const getUserAccountPositionsResponse =
  await snaptrade.accountInformation.getUserAccountPositions({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserAccountPositionsResponse.data));
  res.end();
})

app.post('/userHoldings', urlencodedParser, async (req, res) => {
  const getUserHoldingsResponse =
  await snaptrade.accountInformation.getUserHoldings({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserHoldingsResponse.data));
  res.end();
})

app.post('/orderImpact', urlencodedParser, async (req, res) => {
  const getOrderImpactResponse = await snaptrade.trading.getOrderImpact({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
    action: "BUY",
    order_type: "Limit",
    price: 31.33,
    stop: 31.33,
    time_in_force: "FOK",
    universal_symbol_id: "2bcd7cc3-e922-4976-bce1-9858296801c3",
    notional_value: 100,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getOrderImpactResponse.data));
  res.end();
})

app.post('/accQuotes', urlencodedParser, async (req, res) => {
  const getUserAccountQuotesResponse =
  await snaptrade.trading.getUserAccountQuotes({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    symbols: req.data.symbols,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getUserAccountQuotesResponse.data));
  res.end();
})

app.post('/listHoldings', urlencodedParser, async (req, res) => {
  const listOptionHoldingsResponse = await snaptrade.options.listOptionHoldings({
    userId: req.data.userId,
    userSecret: req.data.userSecret,
    accountId: req.data.accountId,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(listOptionHoldingsResponse.data));
  res.end();
})

app.post('/getActivities', urlencodedParser, async (req, res) => {
  const getActivitiesResponse =
  await snaptrade.transactionsAndReporting.getActivities({
    startDate: req.data.startDate,
    endDate: req.data.endDate,
    accounts:
    req.data.accountId,
    brokerageAuthorizations:
    req.data.brokerageAuthorizations,
    type: req.data.type,
    userId: req.data.userId,
    userSecret: req.data.userSecret,
  });
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(getActivitiesResponse.data));
  res.end();
})

app.listen(4000);