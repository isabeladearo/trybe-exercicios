const { EmployeesService } = require('../services');

const getAll = async (_req, res) => {
  const employees = await EmployeesService.getAll();

  res.status(200).json(employees);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const { includeAddresses } = req.query;

  const employee = await EmployeesService.getById(id, includeAddresses);

  if (!employee)
    return res.status(404).json({ message: 'Funcionário não encontrado' });

  // if (req.query.includeAddresses === 'true') {
  //   const addresses = await AddressService.getByEmployeeId(id);
  //   return res.status(200).json({ employee, addresses });
  // }

  return res.status(200).json(employee);
}

module.exports = { getAll, getById };
