# VideoStream

VideoStream is a live streaming application built using React and [VideoSDK](https://www.videosdk.live/). The app allows users to host and join live streaming sessions seamlessly, providing an interactive experience for both speakers and viewers.

## Features

- **Real-time Video Streaming**: Host live video sessions with low latency.
- **HLS Support**: Stream live content using HTTP Live Streaming (HLS).
- **User Roles**: Differentiate between speakers (who can control the stream) and viewers (who can only watch).
- **Adaptive Streaming**: Automatically adjusts the video quality based on the viewer's internet connection.
- **Interactive UI**: A simple and clean interface for users to join or create meetings.
- **Toggle Microphone/Camera**: Users can mute/unmute their microphone and turn their camera on/off.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or later)
- npm (comes installed with Node.js)
- A VideoSDK account to obtain your API token

## Getting Started

Follow these steps to get your live streaming app up and running:

### 1. Clone the Repository

```bash
git clone https://github.com/riyachudasama23/VideoStream.git
cd VideoStream
```

### 2. Install dependencies:
```bash
npm install
```

### 4. Replace `api-key` in `API.js` with your actual API key from VideoSDK.live.

### 5. Run the app:
```bash
npm run dev
```

## License
This repository is licensed under the MIT License.
