# Article Summarizer with GPT-4

This is a simple web application that allows users to quickly summarize articles by entering a URL. It utilizes the GPT-4 summarization API from RapidAPI, providing users with a concise overview of article content.

## Features

- **Enter URL**: Users input the URL of an article they want to summarize.
- **Instant Summaries**: The app retrieves a summarized version of the article using GPT-4.
- **History Tracking**: Past URLs are stored, so users can easily access previous summaries.

## Tech Stack

- **Frontend**: Vite + React + TypeScript
- **State Management**: Redux.js for managing the application state.
- **API**: RapidAPI's GPT-4 API for generating article summaries.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/badew1/ai-summarizer.git>
   cd article-summarizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up API keys:
   - Sign up for RapidAPI and get an API key for the GPT-4 summarizer.
   - Create a `.env` file in the root directory and add your RapidAPI key:
     ```bash
     VITE_RAPIDAPI_KEY=your_api_key
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Usage

1. Enter an article URL in the input box and press the enter button.
2. The app will display a summarized version of the article.
3. Previously summarized URLs are stored below the input box for easy access.

---

Enjoy a streamlined reading experience with this article summarizer app!
