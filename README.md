# JSON API with Node.js

A simple Node.js application to read and update a JSON file using a RESTful API.


## Features
- **GET `/data`**: Fetch the current data from `data.json`.
- **POST `/data`**: Update or add new data to `data.json`.

1. Clone the repository:
   ```bash
   git clone https://github.com/oymusafir/node-json-file.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
The app runs on http://localhost:4000.

## Usage
- *GET `/data`**: Fetch all data.
- *POST `/data`**: Send JSON data to update the file.
