# Grax Portfolio - React Version

This is a React conversion of the Grax Personal Portfolio Template.

## Features

- ✅ Fully converted from HTML/jQuery to React
- ✅ All sections implemented (Hero, About, Portfolio, News, Contact, etc.)
- ✅ Dark mode support
- ✅ Color theme switcher
- ✅ Magic cursor
- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Portfolio lightbox
- ✅ News modal
- ✅ Contact form (frontend only - backend integration needed)

## Getting Started

### Installation

```bash
cd react-portfolio
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
react-portfolio/
├── public/
│   ├── css/          # All CSS files from original template
│   └── img/          # All images and assets
├── src/
│   ├── components/   # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Copyright.jsx
│   │   ├── Cursor.jsx
│   │   ├── Hero.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── ModalboxNews.jsx
│   │   ├── News.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Preloader.jsx
│   │   ├── Progress.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Settings.jsx
│   │   ├── Talk.jsx
│   │   └── Topbar.jsx
│   ├── hooks/        # Custom React hooks
│   │   ├── useCursor.js
│   │   ├── useScroll.js
│   │   ├── useSvgConverter.js
│   │   └── useTheme.js
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # CSS imports
└── package.json
```

## Key Changes from Original

1. **jQuery to React**: All jQuery functionality converted to React hooks and effects
2. **Component-based**: Each section is now a separate React component
3. **State Management**: Using React useState and useEffect hooks
4. **Contact Form**: Frontend-only implementation (backend integration needed)
5. **Animations**: Using IntersectionObserver for scroll animations (WOW.js fallback if available)
6. **Parallax**: Custom React implementation (Parallax.js fallback if available)

## Customization

### Changing Colors

Edit the color options in `src/components/Settings.jsx`:

```jsx
const colors = ['blue', 'green', 'brown', 'pink', 'orange', 'black', 'white', 'purple', 'sky', 'cadetBlue', 'crimson', 'olive', 'red']
```

### Updating Content

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Portfolio Items**: Edit the `portfolioItems` array in `src/components/Portfolio.jsx`
- **News Items**: Edit the `newsItems` array in `src/components/News.jsx`
- **Contact Info**: Edit `src/components/Contact.jsx`

### Adding Backend for Contact Form

The contact form currently only shows a success message. To add backend functionality:

1. Create an API endpoint
2. Update `src/components/Contact.jsx` handleSubmit function to send data to your API

Example:
```jsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## Dependencies

- React 19.2.3
- React DOM 19.2.3
- Vite 7.2.4
- React Router DOM 7.10.1 (installed but not used - can be removed if not needed)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)

## Notes

- SVG images are automatically converted to inline SVG on load
- The original template's jQuery plugins (WOW.js, Parallax.js) will be used if available, otherwise React-based fallbacks are used
- All original CSS and styling is preserved

## License

Same as original template - check original template documentation for license information.

