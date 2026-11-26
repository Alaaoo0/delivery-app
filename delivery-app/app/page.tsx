{
  "name": "delivery-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^6.2.1",
    "@prisma/orm-postgres": "^1.0.0",
    "lucide-react": "^0.474.0",
    "next": "15.1.6",
    "pg": "^8.13.1",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/pg": "^8.11.10",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^8",
    "eslint-config-next": "15.1.6",
    "postcss": "^8.4.49",
    "prisma": "^6.2.1",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
