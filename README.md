# KickIt Documentation

## Overview
KickIt is a WebApp designed to connect sports enthusiasts who want to play the same sport offline. Users can select a sport they are interested in playing, and if another user chooses the same sport, an event will be created for them to join and play together. Additionally, the platform provides a chat feature for communication between matched users.

## Features
- **Sport Selection**: Users can select their preferred sport to play.
- **Event Creation**: If two or more users choose the same sport, an event is created.
- **Offline Play**: Players can meet offline to play their selected sport.
- **Chat System**: Allows communication between matched users.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Works seamlessly across different devices.

## Tech Stack
KickIt is built using the MERN stack:
- **MongoDB**: Database to store user information, events, and chat data.
- **Express.js**: Backend framework to handle API requests.
- **React.js**: Frontend framework for building a dynamic UI.
- **Node.js**: Runtime environment for server-side logic.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/kickit.git
   cd kickit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (create a `.env` file in the root directory):
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
5. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```
6. Open the app in your browser at `http://localhost:3000`.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user.

### Sports & Events
- `GET /api/sports` - Fetch available sports.
- `POST /api/event/create` - Create a new event.
- `GET /api/event` - Get active events.

### Chat
- `POST /api/chat/send` - Send a message.
- `GET /api/chat` - Fetch chat history.

## Future Enhancements
- **Geolocation Integration**: Suggest sports events near the user.
- **Push Notifications**: Notify users of new matches and messages.
- **Ranking System**: Introduce leaderboards and achievements.

## Contributing
Feel free to contribute by submitting issues or pull requests on the GitHub repository.

## License
KickIt is an open-source project licensed under the MIT License.

