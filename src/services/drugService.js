const prisma = require('../models/prismaClient');

const getDrugs = async (pageNumber, pageSize) => {
    const drugs = await prisma.drug.findMany({
        skip: pageNumber * pageSize,
        take: pageSize,
        omit: {
            categoryId: true,
        },
        include: {
            category: true,
            warehouses: {
                orderBy: {
                    discount: 'desc',
                },
                omit: {
                    drugId: true,
                },
            }
        }
    });

    const totalDrugs = await prisma.drug.count();
    return { drugs, totalDrugs };
};

module.exports = {
    getDrugs,
};
