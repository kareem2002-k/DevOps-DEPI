# TimeWeather App

The TimeWeather app displays current time and weather information based on the user's location using geolocation and a weather API.

## Features

- **Current Time:** Displays the current time updated every second.
- **Weather Information:** Fetches and displays the weather information (temperature) at the user's current location using the Open Meteo API.
- **Responsive Design:** Designed to be responsive and work well on different screen sizes.

## Technologies Used

- **React:** Front-end framework for building the user interface.
- **react-icons/fa:** FontAwesome icons used for clock and weather display.
- **Open Meteo API:** Used for fetching weather data based on latitude and longitude.

## Setup Instructions

Follow these steps to run the Weather - TODO - Password Manager - Qr Code generator  app locally:

### Prerequisites

- Node.js installed on your machine.
- A modern web browser (Chrome, Firefox, Safari, etc.).

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/kareem2002-k/DevOps-DEPI
   ```

2. Navigate into the project directory:

   ```bash
   cd DevTasks
   cd simple-task
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to view the app.

### Usage

- The app will request access to your geolocation. Allow access to see the current time and weather at your location.
- The current time is updated every second.
- Weather information (temperature) is fetched and displayed once geolocation is retrieved.
- Genrate your own password 
- Have todo list , add and remove todos 
- Generate your Own qr code

### Testing

To run tests for the app:

```bash
npm test
# or
yarn test
```

### Deployment

To deploy the app for production, build the project using:

```bash
npm run build
# or
yarn build
```

This command creates a `build` directory with optimized production-ready code.

### Additional Notes

- Ensure your browser supports geolocation for accurate weather information.
- For testing purposes, mock data is used to simulate geolocation and weather API responses.
