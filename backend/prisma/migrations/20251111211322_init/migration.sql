/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Route` table. All the data in the column will be lost.
  - Made the column `cbAfter` on table `PoolMember` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PoolMember" ALTER COLUMN "cbAfter" SET NOT NULL;

-- AlterTable
ALTER TABLE "Route" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "distance" SET DATA TYPE DOUBLE PRECISION;
