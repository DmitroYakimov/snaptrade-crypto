// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const { Snaptrade } = require("snaptrade-typescript-sdk");

// // Створення Express-додатка
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Порт для запуску сервера
// const PORT = 4000;
// const snaptrade = new Snaptrade({
//       consumerKey: 'lvjONDuH7231UgFgNNtdNUqMbKq7J26ToForrSZXmWJjNcy578',
//       clientId: 'MVMNT-TEST',
//     });

// // Підключення клієнтів
// io.on('connection', (socket) => {
//         console.log('Клієнт підключився:', socket.id);
      
//         // Обробка події від клієнта
//         socket.on('sendUserData', async (userData) => {
//           console.log('Отримано дані від клієнта:', userData);
//           const getAllUserHoldingsResponse = await snaptrade.accountInformation.getAllUserHoldings({
//             userId: userData.userId,
//             userSecret: userData.userSecret,
//             brokerageAuthorizations: userData.brokerageAuthorizations,
//           });
      
//           // Відправка даних назад клієнту (або всім клієнтам)
//           const updatedData = `Оновлені дані для користувача ${userData.userId} на ${new Date().toLocaleTimeString()}`;
//           socket.emit('data', JSON.stringify(getAllUserHoldingsResponse.data));
//         });
      
//         // Відключення клієнта
//         socket.on('disconnect', () => {
//           console.log('Клієнт відключився:', socket.id);
//         });
//       });

// // Запуск сервера
// server.listen(PORT, () => {
//   console.log(`Сервер запущено на http://localhost:${PORT}`);
// });