# Portfolio Website

A modern, responsive portfolio website built with React.js showcasing skills and experience as a React Native developer.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Sections: Hero, About, Skills, Projects, Contact
- 🔗 Social media integration
- 📧 Contact form

## Technologies Used

- React.js
- CSS3 (with CSS Variables)
- Font Awesome Icons
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`): Update the greeting, name, and description
2. **About Section** (`src/components/About.js`): Modify the about text and statistics
3. **Skills Section** (`src/components/Skills.js`): Update skills and proficiency levels
4. **Projects Section** (`src/components/Projects.js`): Add your actual projects
5. **Contact Section** (`src/components/Contact.js`): Update contact information and social links

### Update Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Add Social Links

Update the social media links in:
- `src/components/Hero.js`
- `src/components/Contact.js`
- `src/components/Footer.js`

### Save Contact Form Data To Google Sheets

1. Create a Google Sheet and name the first tab `Sheet1`.
2. Add this header row in `Sheet1`: `Timestamp | Name | Email | Phone | Message`.
3. Open `Extensions` -> `Apps Script`.
4. Replace code in `Code.gs` with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Deploy script: `Deploy` -> `New deployment` -> type `Web app`.
6. Set `Who has access` to `Anyone`, then deploy and copy the Web App URL.
7. Create a local `.env` file from `.env.example` and set:

```bash
REACT_APP_GOOGLE_SHEET_WEBHOOK_URL=YOUR_WEB_APP_URL
```

8. Restart the React server (`npm start`) after updating `.env`.

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available for personal use.
