# WisePurse – Mobile Wallet App

WisePurse is a cross-platform mobile wallet application built with **React Native** and **Expo**, backed by a modular **Node.js + Express + PostgreSQL (Neon DB)** backend.  
It allows users to securely manage wallets, track transactions, and view balances across devices.

---

## Tech Stack

### Frontend
- React Native
- Expo
- TypeScript

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Neon DB

---

## Features

- Secure wallet management
- Add, edit, and track transactions
- Real-time balance updates
- Multi-device sync
- Dark mode support
- Offline-friendly architecture
- Modular backend API

---

## Server Live Link: 
 - https://wise-purse-server.vercel.app/

## Project Structure

### Backend Folder Structure

src/
- app/
  - config/
    - db.ts
    - index.ts
  - modules/
    - transaction/
      - transaction.controller.ts
      - transaction.interface.ts
      - transaction.route.ts
      - transaction.service.ts
  - utils/
    - sendSuccessResponse.ts
- app.ts
- server.ts

---

## Installation

### Clone the repository

git clone https://github.com/dev-rashedin/wise-purse-react-native  
cd WisePurse  

---

## Frontend Setup (React Native)

cd client  
npm install  

Start Expo:

npx expo start  

- Press **a** for Android
- Press **i** for iOS

---

## Backend Setup (Express + PostgreSQL)

cd server  
npm install  

Start development server:

npm run dev  

Server runs on:  
http://localhost:3000

---

## Environment Variables

### Backend (.env)

PORT=3000  
NODE_ENV=development  

DATABASE_URL=YOUR_NEON_DB_DATABASE_URL  

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=CLERK_PUBLISHABLE_KEY_FOR_REACT_NATIVE  

### Frontend (Expo)

EXPO_PUBLIC_BACKEND_URL=YOUR_BACKEND_API_URL  

---

## Backend Architecture

- Feature-based modular structure
- Controller–Service separation
- Typed interfaces for safety
- Centralized database configuration
- Reusable response utilities

---

## Build for Physical Device

### Android APK

npm install -g eas-cli  
eas login  
eas build:configure  
eas build -p android --profile preview  

Download APK from Expo EAS dashboard.

### iOS (Mac required)

eas build -p ios --profile preview  

---

## Portfolio Usage

- Demonstrates full-stack mobile development
- Clean backend architecture
- Real production database (Neon)
- Deployable APK build

---

## Contributing

Contributions are welcome.  
Open issues or submit pull requests for improvements.

---

## License

MIT License

---

## Author

Built by **dev-rashedin** as a full-stack mobile wallet application." > README.md
