const { Employee, Address } = require('../database/models');

const getAll = () => Employee.findAll({
  include: { model: Address, as: 'addresses' },
});

const getById = async (id, includeAddresses = false) => {
  // Employee.findOne({
  //   where: { id },
  //   // include: [{ model: Address, as: 'addresses' }],
  //   include: [{
  //     model: Address, as: 'addresses', attributes: { exclude: ['employeeId'] },
  //   }],

  const employee = await Employee.findByPk(id);

  if (!includeAddresses) return employee;

  const address = await employee.getAddresses();

  return { ...employee.dataValues, address }
};

module.exports = { getAll, getById };
