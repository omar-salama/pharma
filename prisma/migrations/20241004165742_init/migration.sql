-- CreateTable
CREATE TABLE "Drug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,
    "is_drug" BOOLEAN NOT NULL,
    "price" REAL NOT NULL,
    "image_url" TEXT,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Drug_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "name_ar" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "max_qty" INTEGER NOT NULL,
    "drugId" INTEGER NOT NULL,
    CONSTRAINT "Warehouse_drugId_fkey" FOREIGN KEY ("drugId") REFERENCES "Drug" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
