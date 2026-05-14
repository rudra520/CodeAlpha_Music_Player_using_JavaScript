# 🎵 Harmonix - Music Player

> A polished, immersive music player with playlist support, audio visualization, and a modern atmospheric interface.

[![TypeScript](https://img.shields.io/badge/TypeScript-91.4%25-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0.1-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.3-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![CodeAlpha Internship](https://img.shields.io/badge/CodeAlpha-Internship%20Task%203-orange)](https://www.codealpha.io/)

---

## ✨ Features

- 🎶 **Play/Pause Controls** - Intuitive playback controls
- ⏭️ **Skip Navigation** - Easy next/previous track switching
- 📋 **Playlist Support** - Create and manage multiple playlists
- 🎨 **Audio Visualization** - Dynamic visual effects synchronized with music
- 🌙 **Modern UI** - Atmospheric dark interface with smooth animations
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **High Performance** - Built with Vite for blazing-fast load times
- 🎭 **Beautiful Animations** - Motion effects powered by Motion library

---

## 🌐 Live Demo

Experience the Harmonix Music Player in action:

**[🚀 Live Preview](https://rudra520codealpha3.netlify.app/)**

Visit the live application hosted on Netlify to explore all features and enjoy the immersive music player experience!

---

## 📸 Screenshots

### Main Player Interface
![Music Player Preview](https://rudra520codealpha3.netlify.app/preview.png)

### Features Showcase
- **Modern UI** with atmospheric dark theme
- **Audio Visualization** synchronized with playback
- **Playlist Management** interface
- **Responsive Design** for all devices

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript.git
   cd CodeAlpha_Music_Player_using_JavaScript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
CodeAlpha_Music_Player_using_JavaScript/
├── src/
│   ├── main.tsx           # Application entry point
│   ├── components/        # React components
│   ├── styles/           # CSS and Tailwind styles
│   └── utils/            # Utility functions
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── metadata.json         # App metadata
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check TypeScript types |
| `npm run clean` | Remove build artifacts |

---

## 📦 Tech Stack

### Core Framework
- **React 19.0.1** - UI library for building interactive components
- **TypeScript 5.8.2** - Type-safe JavaScript development

### Build & Development
- **Vite 6.2.3** - Next-generation frontend build tool
- **TailwindCSS 4.1.14** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite integration for TailwindCSS

### UI & Animation
- **Lucide React 0.546.0** - Beautiful icon library
- **Motion 12.23.24** - Animation library for smooth interactions

### Backend (Optional)
- **Express 4.21.2** - Server framework
- **dotenv 17.2.3** - Environment variable management

### Development Tools
- **@vitejs/plugin-react 5.0.4** - React plugin for Vite
- **@google/genai 1.29.0** - Google AI integration
- **esbuild 0.25.0** - JavaScript bundler
- **tsx 4.21.0** - TypeScript execution

---

## 🎮 Usage

### Basic Controls
1. **Play/Pause** - Click the play button to start or pause playback
2. **Skip Track** - Use next/previous buttons to navigate through songs
3. **Volume Control** - Adjust volume slider for optimal listening
4. **Playlist Management** - Create, edit, and delete playlists

### Creating a Playlist
```javascript
// Example: Add songs to a playlist
const playlist = {
  name: "My Favorites",
  songs: [
    { id: 1, title: "Song 1", artist: "Artist 1", duration: 180 },
    { id: 2, title: "Song 2", artist: "Artist 2", duration: 200 }
  ]
};
```

---

## 🎨 Customization

### Theming
The player uses TailwindCSS for styling. Modify colors and themes in:
- `src/styles/` - Global stylesheet
- `tailwind.config.js` - TailwindCSS configuration

### Audio Visualization
Customize visualization effects:
- Check `src/components/` for visualization components
- Adjust canvas rendering parameters as needed

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Space` | Play/Pause |
| `→` | Next Track |
| `←` | Previous Track |
| `↑` | Increase Volume |
| `↓` | Decrease Volume |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 🐛 Issues & Support

Found a bug or have a suggestion? Please [open an issue](https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript/issues) on GitHub.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rudra** - CodeAlpha Internship Task 3

- GitHub: [@rudra520](https://github.com/rudra520)
- Repository: [CodeAlpha_Music_Player_using_JavaScript](https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript)

---

## 🙏 Acknowledgments

- [CodeAlpha](https://www.codealpha.io/) - Internship program
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Motion](https://motion.dev/) - Animation library

---

## 📊 Project Stats

```
Language Composition:
├── TypeScript: 91.4%
├── CSS: 6.6%
└── HTML: 2%
```

---

## ⭐ If you found this project helpful, please consider giving it a star!

<div align="center">

**[⬆ back to top](#harmonix---music-player)**

</div>
