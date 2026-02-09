# 💝 Dream Proposal Site

A beautiful, interactive web application to create personalized proposal pages and make your love story unforgettable. Built with React and Vite, featuring stunning animations and a romantic design.

![Dream Proposal Site](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- **🎨 Beautiful UI/UX**: Modern, romantic design with smooth animations and gradients
- **💌 Personalized Proposals**: Create custom proposal pages with your partner's name and personal message
- **🎭 Interactive Preview**: See your proposal come to life before sharing
- **📱 Responsive Design**: Works seamlessly on all devices - desktop, tablet, and mobile
- **🌈 Animated Background**: Dynamic floating hearts and gradient animations
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pavitra-sudo/Valentine-Proposal-Site.git
   cd Valentine-Proposal-Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production to the `dist` folder |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
Valentine-Proposal-Site/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx    # Floating hearts animation
│   │   ├── Hero.jsx                  # Landing page hero section
│   │   ├── Features.jsx              # Features showcase
│   │   ├── HowItWorks.jsx           # Step-by-step guide
│   │   ├── Templates.jsx             # Proposal templates
│   │   ├── CTA.jsx                   # Call-to-action section
│   │   ├── Footer.jsx                # Footer component
│   │   ├── ProposalForm.jsx          # Form to create proposals
│   │   └── PreviewPage.jsx           # Preview and response page
│   ├── App.jsx                       # Main app component with routing
│   ├── main.jsx                      # Application entry point
│   ├── index.css                     # Global styles
│   └── App.css                       # App-specific styles
├── index.html                        # HTML template
├── package.json                      # Project dependencies
├── vite.config.js                    # Vite configuration
└── README.md                         # This file
```

## 🎯 How It Works

1. **Landing Page**: Users are greeted with a beautiful hero section explaining the concept
2. **Create Proposal**: Fill out the form with:
   - Partner's name
   - Personal message
   - Special date (optional)
   - Your name
3. **Preview & Share**: View the personalized proposal page with Yes/No response buttons
4. **Capture the Moment**: Share the unique proposal page with your loved one

## 🎨 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router DOM 7.13.0
- **Styling**: Vanilla CSS with modern features
- **Fonts**: Google Fonts (Dancing Script, Outfit)

## 🌟 Key Components

### AnimatedBackground
Creates a romantic atmosphere with floating hearts and gradient animations.

### ProposalForm
Interactive form with bold labels and smooth transitions for creating personalized proposals.

### PreviewPage
Displays the proposal with:
- Personalized message
- Partner's name
- Special date
- Yes/No response buttons
- Romantic animations

## 🎨 Design Highlights

- **Color Scheme**: Romantic pinks, purples, and gradients
- **Typography**: Dancing Script for romantic headings, Outfit for body text
- **Animations**: Smooth transitions, floating hearts, gradient shifts
- **Glassmorphism**: Modern frosted glass effects on cards
- **Responsive**: Mobile-first design approach

## 📝 Customization

You can customize the proposal site by modifying:

- **Colors**: Update CSS variables in `index.css`
- **Fonts**: Change font imports in `index.html`
- **Content**: Edit component text in respective `.jsx` files
- **Animations**: Adjust keyframes in component `.css` files

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Hosting Platforms

The site can be deployed to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: `firebase deploy`

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💖 Made With Love

Created with ❤️ to help people create unforgettable proposal moments.

---

**Happy Proposing! 💍**
