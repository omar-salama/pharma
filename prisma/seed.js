const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create Categories
    const category1 = await prisma.category.create({
        data: {
            name: 'Drugs',
            name_ar: 'أدويه',
        },
    });

    // Create Drugs
    const drug1 = await prisma.drug.create({
        data: {
            name: 'Iodine tincture 5% 12 Pieces',
            name_ar: 'صبغة يود %5 - 12 قطعة',
            is_drug: false,
            price: 0,
            categoryId: category1.id,
        },
    });

    const drug2 = await prisma.drug.create({
        data: {
            name: '123 Syrup 120 ml',
            name_ar: 'وان تو ثرى شراب 120 ملل',
            is_drug: true,
            price: 32,
            image_url: 'https://example.com/image.jpg',
            categoryId: category1.id,
        },
    });

    // Create Warehouses for Drug 1
    await prisma.warehouse.create({
        data: {
            name: 'القصواء لمستحضرات التجميل القاهره',
            name_ar: 'القصواء لمستحضرات التجميل القاهره',
            discount: 0,
            price: 65.61,
            max_qty: 3,
            drugId: drug1.id,
        },
    });

    // Create Warehouses for Drug 2
    await prisma.warehouse.createMany({
        data: [
            {
                name: 'الفردوس - فارما القاهره',
                name_ar: 'الفردوس - فارما القاهره',
                discount: 21,
                price: 25.28,
                max_qty: 37,
                drugId: drug2.id,
            },
            {
                name: 'اوكتا فارما - القاهره',
                name_ar: 'اوكتا فارما - القاهره',
                discount: 20,
                price: 25.60,
                max_qty: 33,
                drugId: drug2.id,
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
