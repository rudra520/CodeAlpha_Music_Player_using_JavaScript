# 🎵 Music Player using JavaScript

> **Task 3 of my CodeAlpha Internship** - A custom web-based music player built from scratch with modern web technologies.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/rudra520/CodeAlpha_Music_Player_using_JavaScript?style=social)](https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript)
[![GitHub forks](https://img.shields.io/github/forks/rudra520/CodeAlpha_Music_Player_using_JavaScript?style=social)](https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript)

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💻 Usage](#-usage)
- [🎮 Controls & Shortcuts](#-controls--shortcuts)
- [📸 Screenshots](#-screenshots)
- [🔧 Customization](#-customization)
- [📚 Learning Outcomes](#-learning-outcomes)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ Features

### Core Functionality
- ▶️ **Play/Pause Control** - Start and pause music playback instantly
- ⏭️ **Next/Previous Track** - Navigate through your playlist seamlessly
- 📊 **Progress Bar** - Visual representation of song progress with seek capability
- 🔊 **Volume Control** - Adjust volume from 0-100%
- 📝 **Playlist Support** - Manage and play multiple songs in sequence
- ⏱️ **Time Display** - Current time and total duration tracking
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 🔄 **Repeat & Shuffle** - Control playback modes
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## 🛠️ Technologies Used

| Technology | Purpose | Usage % |
|-----------|---------|---------|
| **TypeScript** | Type-safe JavaScript | 91.4% |
| **CSS** | Styling & Animations | 6.6% |
| **HTML** | Markup & Structure | 2% |

---

## 📁 Project Structure

```
CodeAlpha_Music_Player_using_JavaScript/
├── index.html              # Main HTML file
├── style.css               # Styling & animations
├── script.ts               # TypeScript logic
├── assets/                 # Music files and images
│   ├── music/             # Sample music tracks
│   └── images/            # UI assets
├── README.md              # Project documentation
└── package.json           # Project metadata
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript
- No server required - runs locally!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudra520/CodeAlpha_Music_Player_using_JavaScript.git
   cd CodeAlpha_Music_Player_using_JavaScript
   ```

2. **Open in browser**
   ```bash
   # Simply open the index.html file in your browser
   # Or use a local server for better performance
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Add your music files**
   - Place your `.mp3`, `.wav`, or `.ogg` files in the `assets/music/` directory
   - Update the playlist in `script.ts` with your song metadata

---

## 💻 Usage

### Basic Usage

1. **Load the Player** - Open `index.html` in your web browser
2. **Select a Song** - Click on any track in the playlist
3. **Control Playback** - Use the player controls to manage playback
4. **Adjust Volume** - Use the volume slider to control sound level
5. **Seek Through Song** - Click on the progress bar to jump to any point

### Adding Songs to Playlist

Edit the `script.ts` file and add your songs to the playlist array:

```typescript
const playlist = [
  {
    title: "Song Title",
    artist: "Artist Name",
    src: "path/to/song.mp3",
    cover: "path/to/cover.jpg"
  },
  // Add more songs...
];
```

---

## 🎮 Controls & Shortcuts

### Mouse Controls
| Control | Action |
|---------|--------|
| **Play/Pause Button** | Toggle playback |
| **Next Button** | Skip to next track |
| **Previous Button** | Go to previous track |
| **Progress Bar** | Seek to position |
| **Volume Slider** | Adjust volume |
| **Repeat Button** | Cycle repeat modes |
| **Shuffle Button** | Toggle shuffle mode |

### Keyboard Shortcuts (if implemented)
| Key | Action |
|-----|--------|
| **Space** | Play/Pause |
| **→** | Next track |
| **←** | Previous track |
| **↑** | Increase volume |
| **↓** | Decrease volume |

---

## 📸 Screenshots

<!-- Add your screenshots here -->

```
[Screenshot 1: Player Interface]
[Screenshot 2: Playlist View]
[Screenshot 3: Mobile Responsive View]
```

*To add screenshots:*
1. Take screenshots of your music player
2. Save them to `assets/screenshots/` folder
3. Uncomment and update the image links below:

```markdown
![Player Interface](assets/screenshots/player.png)
![Playlist View](assets/screenshots/playlist.png)
![Mobile View](assets/screenshots/mobile.png)
```

---

## 🔧 Customization

### Change Colors
Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  --background-color: #1f2937;
  --text-color: #ffffff;
}
```

### Modify Player Layout
Update the HTML structure in `index.html` to rearrange player elements.

### Add New Features
Enhance the player by adding:
- 🎯 Equalizer controls
- 📋 Drag-and-drop playlist management
- 💾 LocalStorage for saved playlists
- 🌙 Dark/Light theme toggle
- 📱 Native mobile app wrapper

---

## 📚 Learning Outcomes

Through this project, I learned:

- ✅ **DOM Manipulation** - Dynamically update UI elements
- ✅ **Event Handling** - Respond to user interactions
- ✅ **Audio API** - Integrate and control HTML5 audio element
- ✅ **State Management** - Track player state and playlist data
- ✅ **Responsive Design** - Create mobile-friendly layouts
- ✅ **CSS Animations** - Add smooth visual effects
- ✅ **TypeScript** - Use type safety in JavaScript
- ✅ **Git & GitHub** - Version control and collaboration

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Ideas for Contributions
- Add visualization effects
- Implement lyrics display
- Create theme options
- Optimize performance
- Write unit tests
- Improve accessibility

---

## 📞 Support & Contact

- **GitHub Issues** - Report bugs or request features
- **Email** - Feel free to reach out for questions
- **Discussions** - Join our community discussions

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE). 

---

## 🎓 Internship Information

**Program**: CodeAlpha Internship  
**Task**: Task 3 - Music Player Project  
**Status**: ✅ Completed  
**Date**: 2026

---

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Giving it a star on GitHub
- 🔗 Sharing it with others
- 📧 Providing feedback and suggestions
- 🤝 Contributing improvements

---

<div align="center">

**Made with ❤️ by [rudra520](https://github.com/rudra520)**

*Happy Coding! 🚀*

</div>
