# ProLearn - Expert-Led Learning Platform

ProLearn is a modern, comprehensive learning platform that connects students with industry experts and academics. Our platform offers cutting-edge courses across various domains including AI, Technology, Healthcare, Agriculture, and Business.

## 🚀 Features

- **Expert Instructors**: Learn from industry leaders and subject matter experts
- **Diverse Course Catalog**: Courses spanning AI, Technology, Healthcare, Agriculture, and Business
- **Interactive Learning**: Hands-on demonstrations and real-world exercises
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Mobile-First**: Optimized for all devices and screen sizes

## 🎯 Course Categories

- **Technology**: AI & Designing, XR Gaming, AR/VR Engineering
- **Healthcare**: Medical Coding, Bioentrepreneurship, Digital Forensics
- **Agriculture**: Precision Agriculture, Agriculture Drones, Agri Entrepreneurship
- **Business**: AI & Business, Digital Marketing, Marketing Analytics
- **Emerging Technologies**: AI & Data Analytics, Blockchain, Mixed Reality

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query
- **Forms**: React Hook Form
- **Animations**: CSS Animations & Transitions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prolearn.git
cd prolearn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Hero section with animations
│   ├── Navigation.tsx  # Navigation bar
│   └── ParticipantSection.tsx
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Courses.tsx     # Courses catalog
│   ├── Home.tsx        # Home page
│   ├── Instructors.tsx # Instructors page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Ocean blue primary, teal secondary, warm orange accent
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for accessibility and performance
- Inspired by the need for quality education in emerging technologies

---

**ProLearn** - Empowering learners with expert knowledge and practical skills.
