const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');

exports.createUser = async (userData) => {
  userData.password = await bcrypt.hash(userData.password, 10);
  return userRepository.createUser(userData);
};

exports.updateUser = async (id, userData) => {
  if(userData.password) {
    userData.password = await bcrypt.hash(userData.password, 10);
  }
  return userRepository.updateUser(id, userData);
};

exports.deleteUser = async (id) => {
  return userRepository.deleteUser(id);
};

exports.getUser = async (id) => {
  return userRepository.getUser(id);
};