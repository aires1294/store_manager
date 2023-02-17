const salesService = require('../services/sales.service');

const insertSale = async (req, res) => {
  const newSale = req.body;
  const sales = await salesService.insertSale(newSale);
  if (sales.type === 404) {
    return res.status(sales.type).json({ message: sales.message });
  }
  return res.status(201).json(sales);
}; 

const getAllSales = async (_req, res) => {
  // const sale = req.body;
  const getSales = await salesService.getAllSales();
  // console.log('estou aqui', getSales);
  return res.status(200).json(getSales);
};

module.exports = {
  insertSale,
  getAllSales,
};