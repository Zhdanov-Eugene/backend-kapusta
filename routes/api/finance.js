const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaTransaction } = require("../../models/finance");

const { joiBalanceSchema } = require("../../models/auth");

const { finance: ctrl, balance: ctrlBalance } = require("../../controllers");

const router = express.Router();

//TODO Добавление транзакции
router.post("/", auth, validation(joiSchemaTransaction), ctrlWrapper(ctrl.addTransaction));

//TODO Обновление баланса по id
router.put("/:id/balance", auth, validation(joiBalanceSchema), ctrlWrapper(ctrlBalance.updateBalance));

//TODO Вывод транзакции owner
router.get("/:id", auth, ctrlWrapper(ctrl.getTransactionById));

//TODO Удаление транзакции id
router.delete("/:id", auth, ctrlWrapper(ctrl.deleteTransaction));

//TODO Вывод транзакции за месяц
router.get("/period/:type/:year/:month", auth, ctrlWrapper(ctrl.geTransactionForPeriod));

module.exports = router;
