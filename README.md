FuelEU Maritime Compliance Platform

Overview

This project is an attempt to implement a Fuel EU Maritime compliance module using Node.js, TypeScript, Express, PostgreSQL, and Prisma. The platform is intended to manage:

- Route data
- Compliance balance (CB) calculation
- Banking (Article 20)
- Pooling (Article 21)

> This is my first time working with TypeScript and PostgreSQL, and the assignment was challenging to complete in 2 days. I focused on learning the basics of these technologies, understanding Prisma, and implementing some core parts with the help of ChatGPT.

---

> What Has Been Completed

 Backend

- Server setup using Node.js, TypeScript, Express
- Database setup with PostgreSQL and Prisma
- Prisma schema created for:
  - `Route`
  - `ShipCompliance`
  - `BankEntry`
  - `Pool` and `PoolMember`
- Seed data inserted for `routes`
- Implemented core API endpoints:
  - `/routes` → Get all routes
  - `/routes/:id/baseline` → Set a route as baseline
  - `/routes/comparison` → Compare baseline vs actual routes
- Partial implementation of:
  - `/compliance/cb` → Compliance Balance
  - `/compliance/adjusted-cb` → Adjusted CB
  - `/banking/*` → Banking module
  - `/pools` → Pooling module

Frontend

- React + TypeScript project scaffolded
- Basic layout and tabs created for:
  - Routes
  - Comparison
  - Banking
  - Pooling
- Connected frontend to `/routes` endpoint to fetch and display route data

---

Learning Journey

1. Learned TypeScript basics and type safety concepts.
2. Explored Prisma ORM and PostgreSQL interactions.
3. Learned to structure a backend with Clean Architecture / Hexagonal Architecture.
4. Implemented API endpoints with proper request/response handling.
5. Used Postman to test endpoints and debug Prisma errors.

---

> Remaining Work

- Complete Banking service (`bank` and `applyBanked`) with Prisma
- Complete Pooling service and endpoints
- Implement full frontend integration with all backend endpoints
- Add charts and KPIs for routes and CB
- Write unit and integration tests
- Refine error handling and validation
