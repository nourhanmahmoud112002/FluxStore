# FluxStore

A React Native e-commerce mobile application with complete authentication flow, built with TypeScript and Redux Toolkit.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React Native 0.83.1 |
| Language | TypeScript |
| State Management | Redux Toolkit |
| Navigation | React Navigation (Stack) |
| HTTP Client | Axios |
| Local Storage | MMKV |
| Internationalization | i18next, react-i18next |
| UI Components | Bottom Sheet, Reanimated |
| Authentication | Google Sign-In |
| Debugging | Reactotron |

## Project Structure

```
src/
├── assets/                 # Static assets (images, fonts)
│   └── images/
├── common/                 # Shared utilities and constants
│   ├── colors/             # Color palette
│   ├── storage/            # MMKV storage helpers
│   └── utils/              # Utility functions
├── components/             # Reusable UI components
│   ├── BackIcon/
│   ├── Button/
│   ├── Paginator/
│   ├── Sheet/              # Bottom sheet component
│   ├── SocialIcon/
│   └── TextInput/
├── constants/
│   └── endpoints.ts        # API endpoint definitions
├── features/               # Feature-based screens
│   ├── ForgetPasswordFlow/
│   │   ├── ForgetPassword/ # Email input for password reset
│   │   ├── Verification/   # OTP verification
│   │   └── ResetPassword/  # New password entry
│   ├── Home/
│   ├── Login/
│   ├── OnBoarding/
│   ├── SignUp/
│   └── Welcome/
├── mock/                   # Mock data for development
├── navigation/
│   ├── MainNavigation.tsx  # Stack navigator setup
│   ├── Routes.ts           # Route constants & param types
│   └── navigationUtils.ts  # Navigation helper functions
├── redux/
│   ├── features/
│   │   └── authSlice.ts    # Authentication state & actions
│   ├── store/              # Redux store configuration
│   └── utils.ts            # Redux utility functions
├── services/
│   └── api/
│       ├── auth.ts         # Authentication API calls
│       ├── apiUtils.ts     # API error handling
│       └── client.ts       # Axios instance configuration
├── theme/                  # App-wide theming
├── translation/            # i18n configuration
│   ├── ar.json             # Arabic translations
│   ├── en.json             # English translations
│   └── index.ts
└── types/
    ├── apiResponse/        # API response types
    └── dto/                # Data transfer object types
```

## Authentication Flow

### Overview

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Welcome   │ ──► │  OnBoarding │ ──► │    Login    │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                    ┌──────────────────────────┼──────────────────────────┐
                    │                          │                          │
                    ▼                          ▼                          ▼
            ┌─────────────┐           ┌─────────────┐            ┌─────────────┐
            │   Sign Up   │           │    Home     │            │   Forget    │
            └──────┬──────┘           └─────────────┘            │  Password   │
                   │                        ▲                    └──────┬──────┘
                   │                        │                          │
                   └────────────────────────┘                          ▼
                                                                ┌─────────────┐
                                                                │ Verification│
                                                                │    (OTP)    │
                                                                └──────┬──────┘
                                                                       │
                                                                       ▼
                                                                ┌─────────────┐
                                                                │   Reset     │
                                                                │  Password   │
                                                                └─────────────┘
```

### Screens & Functionality

| Screen | Description | API Endpoint |
|--------|-------------|--------------|
| **Login** | Email/password authentication + Google Sign-In | `/api/v1/auth/login`, `/api/v1/auth/google-login` |
| **Sign Up** | User registration with name, email, password | `/api/v1/auth/register` |
| **Forget Password** | Request password reset OTP via email | `/api/v1/auth/forget-password` |
| **Verification** | Enter 6-digit OTP code (auto-submit on complete) | `/api/v1/auth/verify-reset-password-otp` |
| **Reset Password** | Set new password with token validation | `/api/v1/auth/reset-password` |

### Authentication State Management

The app uses Redux Toolkit for authentication state:

```typescript
// State structure
interface IAuthState {
  user: AuthResponse | null;
  loaders: { login, register, googleLogin, ... };
  errors: { login, register, googleLogin, ... };
}
```

**Actions:**
- `login` - Email/password authentication
- `register` - New user registration
- `googleLogin` - Google OAuth authentication
- `logout` - User logout
- `forgetPassword` - Request OTP
- `verifyOtp` - Validate OTP code
- `resetPassword` - Set new password
- `refreshToken` - Refresh access token
- `changePassword` - Update password (authenticated)

### Token Storage

User data and tokens are persisted using MMKV:

```typescript
// After successful login/register
storeData(MMKV_KEYS.USER_KEY, {
  user: { id, firstName, lastName, email, ... },
  accessToken: { token: "..." },
  refreshToken: { token: "..." }
});
```

### API Response Format

All API responses follow this structure:

```typescript
interface ApiResponse<T> {
  data?: T;
  isSuccess: boolean;
  message: string;
  errorCode: string;
  validationErrors: {
    emailAddress?: string;
    password?: string;
    // ...
  };
}
```

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Prerequisites

- Node.js >= 20
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/FluxStore.git
cd FluxStore

# Install dependencies
npm install
# OR
yarn install

# iOS only: Install CocoaPods
bundle install
bundle exec pod install
```

### Running the App

#### Start Metro

```sh
npm start
# OR
yarn start
```

#### Android

```sh
npm run android
# OR
yarn android
```

#### iOS

```sh
npm run ios
# OR
yarn ios
```

### Environment Configuration

Update the API base URL in `src/constants/endpoints.ts`:

```typescript
const BASE_URL = 'http://localhost:5089'; // Your API server
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Metro bundler |
| `npm run android` | Run on Android |
| `npm run ios` | Run on iOS |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |

## License

This project is private and not licensed for public use.

