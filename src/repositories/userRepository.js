const UserModel = require('../models/User');

exports.createUser = (userData) => {
  return UserModel.create(userData);
};

exports.updateUser = (id, userData) => {
  return UserModel.update(userData, { where: { id: id } });
};

exports.deleteUser = (id) => {
  return UserModel.destroy({ where: { id: id } });
};

exports.getUser = (id) => {
  return UserModel.findByPk(id);
};