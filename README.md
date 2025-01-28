# DeclanM - BrightHR Test

This project is a file management application built as a coding assessment for BrightHR with React and TypeScript. It allows users to view, sort, and filter files and folders. The timeframe for this project was 2-3 hours.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Approach to Incomplete Functionality](#approach-to-incomplete-functionality)

## Getting Started

As well as installing locally, this application has been deployed via Cloudflare Workers and the frontend can be accessed at the following URL https://brighthr-declanm.pages.dev/

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v20.9.0 or higher)
- npm (v10.1.0 or higher)

### Installation

1. Clone the repository:

   git clone https://github.com/declanmo/brighthr-declanm.git
   cd brighthr-declanm

2. Install the dependencies:

    npm install


## Running the Application

To start the development server, run:

    npm run dev

This will start the Vite development server and you can view the application in your browser at http://localhost:5173/

## Running Tests

To run the tests, use the following command:

    npm test

This will run all the tests using Jest and display the results in the terminal.

## Approach to Incomplete Functionality

### Improvements to current application

#### UI / UX

There are many tweaks and adjustments that could be made to this application to improve the usability, some of them I would target:

- Showing the current directory at the top of the view - this would make it easier for users to see which folder they are currently in, and where they can return back to.

- Responsive Design - For speed of setup this application has been minimally optimised, it would be of utmost importance to improve the user experience when on mobile or tablet.

- Hover effects should be added to improve clearness, especially to rows which are clickable.

#### Sorting

- Allow users to sort by name and date in reverse as well

- Allow the clicking of table headers to apply sorts and then reflect with icons.

#### Accessibility

- Aria tags should be added to the application

- Better semantic HTML should be used such as header, main, section, etc.

- All click events should be modified to ensure it also handles 'enter' keypresses for users controlling the site via keyboard.

- Alt text should be added for images and icons

### Additional Features

File Upload: Implement a file upload feature that allows users to add new files to the application. This would involve creating a form with a file input and handling the file upload process.

Allow downloading: Allow viewing / downloading of the files