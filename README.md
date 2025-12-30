# Navigate to your project folder

cd C:\Projects\WisePurse

# Create README.md directly

echo "# WisePurse – Mobile Wallet App

WisePurse is a cross-platform mobile wallet application built with **React Native** and **Expo**, featuring a backend powered by **Express.js** and **PostgreSQL (Neon DB)**. It allows users to securely manage their wallet, track transactions, and view real-time balances across devices.

---

## Tech Stack

- **Frontend:** React Native, Expo
- **Backend:** Express.js
- **Database:** PostgreSQL (Neon DB)
- **State Management & Real-time:** Convex / your choice

---

## Features

- Secure wallet management
- Add, edit, and track transactions
- Real-time balance updates
- Multi-device sync
- Dark mode support
- Offline support for transaction caching

---

## Installation

### Clone the repo

```bash
git clone https://github.com/dev-rashedin/wise-purse-react-native
cd wisepurse
```

### Install dependencies

```bash
npm install
```

### Run Expo

```bash
npx expo start
```

- Press **a** to open on Android emulator or device
- Press **i** to open on iOS simulator or device

---

## Backend Setup

### Install dependencies

```bash
cd server
npm install
```

### Start Express server

```bash
npm run dev
```

- Ensure PostgreSQL (Neon DB) is configured and .env contains your database URL

---

## Build for Device

### Android APK

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

- Download APK from Expo EAS build page

### iOS (Mac required)

```bash
eas build -p ios --profile preview
```

---

## Environment Variables

- EXPO_PUBLIC_BACKEND_URL – Backend API URL
- DATABASE_URL – PostgreSQL connection string (server only)

> Prefix Expo variables with EXPO*PUBLIC* to expose them to the app

---

## Contributing

Contributions are welcome! Please submit issues or pull requests for bug fixes, features, or improvements.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details." > README.md
