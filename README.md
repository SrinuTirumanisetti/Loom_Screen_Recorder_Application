# Loom Screen Recorder

A lightweight, browser-based screen recorder application built with vanilla JavaScript, HTML, and CSS. This application allows users to record their screen with audio, capture snapshots, and apply real-time color filters.

## Table of Contents
- [Features](#features)
- [How to Use](#how-to-use)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)

## Features

- **Screen Recording**: Capture your screen effortlessly with high-quality video output.
- **Audio Support**: Includes system/microhpone audio in recording by default.
- **Snapshot Capture**: Take high-resolution images of the video stream at any moment.
- **Real-time Filters**: Apply aesthetic color layers (Orange, Brown, Pink, or Transparent) to your view.
- **Timer Display**: A visual counter to keep track of your recording duration.
- **Automatic Download**: Recorded videos and captured images are automatically downloaded to your local device.

## How to Use

1. **Open the Application**: Open the `index.html` file in any modern web browser.
2. **Grant Permissions**: Allow access to your camera and microphone when prompted.
3. **Record**: 
    - Click the **Red Button** to start recording. The timer will appear.
    - Click the **Red Button** again to stop. The video (`stream.mp4`) will download automatically.
4. **Capture**:
    - Click the **White Button** to take a snapshot. The image (`Image.jpeg`) will download automatically.
5. **Apply Filters**:
    - Select any color from the filter panel on the left to change the visual mood of the stream.

## Technology Stack

- **HTML5**: Structured layout using semantic tags.
- **CSS3**: Modern styling with animations (`@keyframes`) and responsive design.
- **JavaScript (Vanilla)**: Core logic for interaction and media handling.
- **MediaRecorder API**: Used for capturing and encoding video/audio streams.
- **Canvas API**: Utilized for capturing frames and applying filters to snapshots.

## Project Structure

- `index.html`: The main entry point containing the UI structure.
- `index.js`: Contains the application logic, including stream handling, recording, and filtering.
- `style.css`: Defines the look and feel, layout positioning, and interactive animations.
