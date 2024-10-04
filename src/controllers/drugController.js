const drugService = require('../services/drugService');

const getDrugs = async (req, res, next) => {
  const { page = 0, page_size = 20 } = req.query;

  const pageNumber = parseInt(page);
  const pageSize = parseInt(page_size);

  if (isNaN(pageNumber) || pageNumber < 0) {
    return next({ status: 400, message: 'Invalid page number. It must be a non-negative integer.' });
  }

  if (isNaN(pageSize) || pageSize <= 0) {
    return next({ status: 400, message: 'Invalid page size. It must be a positive integer.' });
  }

  try {
    const { drugs, totalDrugs } = await drugService.getDrugs(pageNumber, pageSize);

    res.json({
      success: true,
      data: {
        totalDrugs,
        drugs
      }
    });
  } catch (error) {
    console.error(error);
    next(new Error('Failed to fetch drugs.'));
  }
};

module.exports = {
  getDrugs,
};
