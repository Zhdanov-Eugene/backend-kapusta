//? библиотека для генерации ошибок
const createError = require("http-errors");
const { UserTransaction } = require("../../models");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await UserTransaction.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404, `User with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
