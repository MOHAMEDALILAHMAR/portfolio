# Mohamed Ali Lahmar - Portfolio

A responsive personal portfolio website showcasing my journey as a Computer Science student, featuring my projects, skills, experience, and certifications.

🌐 **Live Demo:** [View Portfolio](https://MOHAMEDALILAHMAR.github.io/portfolio/)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Setup & Installation](#setup--installation)
- [Contact](#contact)

---

## 📝 About

I'm a Computer Science student at ISIM Sfax with a passion for web development and software engineering. This portfolio showcases my academic journey, technical skills, projects, and professional experience.

---

## ✨ Features

- ✅ **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Dark/Light Mode** - Toggle between themes with localStorage persistence
- ✅ **Working Contact Form** - Integrated with EmailJS for real email delivery
- ✅ **Smooth Animations** - Fade-in effects on scroll and smooth navigation
- ✅ **Resume Download** - One-click PDF download
- ✅ **Social Links** - GitHub and LinkedIn integration
- ✅ **Keyboard Navigation** - Enhanced accessibility (press 'T' to scroll to top)
- ✅ **Loading Animation** - Professional loading screen on page load

---

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design, animations, flexbox, grid
- **JavaScript (ES6+)** - DOM manipulation, smooth scrolling, theme toggle

### Integration
- **EmailJS** - Contact form email functionality
- **GitHub Pages** - Hosting and deployment

---

## 📚 Sections

1. **Header/About** - Introduction with social links
2. **About Me** - Personal description and interests
3. **Education** - University and high school information
4. **Languages** - Language proficiency levels (CEFR scale)
5. **Skills** - Hard and soft skills
6. **Experience** - Internships and work experience
7. **Certifications** - Courses and certificates
8. **Projects** - Featured portfolio projects
9. **Volunteering** - Volunteer experience
10. **Hobbies** - Personal interests
11. **Contact** - Contact form and details
12. **Footer** - Quick links and social media

---

## 🚀 Setup & Installation

### Prerequisites
- Git installed
- GitHub account
- Code editor (VS Code recommended)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MOHAMEDALILAHMAR/portfolio.git
   cd portfolio
   ```

2. **Open in browser:**
   - Right-click `index.html` → Open with browser
   - Or use Live Server extension in VS Code

3. **Configure EmailJS (for contact form):**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Public Key, Service ID, and Template ID
   - Update `script.js`:
     ```javascript
     emailjs.init("YOUR_PUBLIC_KEY");
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
     ```

### Deploy to GitHub Pages

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select `main` branch as source
   - Your site will be live at: `https://MOHAMEDALILAHMAR.github.io/portfolio/`

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── resume.pdf          # Resume file (add your CV)
├── IMG.jpeg            # Profile picture
├── favicon.ico         # Website icon
├── README.md           # This file
└── EMAIL_SETUP_GUIDE.md # EmailJS configuration guide
```

---

## 💬 Contact

**Email:** [dalilahmer1212@gmail.com](mailto:dalilahmer1212@gmail.com)

**Phone:** [+216 28 022 364](tel:+21628022364)

**Location:** Sousse, Tunisia

**Social:**
- [GitHub](https://github.com/MOHAMEDALILAHMAR)
- [LinkedIn](https://www.linkedin.com/in/mohamed-ali-lahmar-a99814395)

---

## 📄 Files Guide

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio structure |
| `style.css` | All styling and animations |
| `script.js` | Interactivity and EmailJS integration |
| `resume.pdf` | Your CV (add your file here) |
| `IMG.jpeg` | Profile picture |
| `EMAIL_SETUP_GUIDE.md` | Instructions for EmailJS setup |

---

## 🎨 Customization

### Update Personal Information
Edit these in `index.html`:
- Name and title
- About section
- Education details
- Skills
- Projects
- Contact information

### Change Colors & Styling
Modify `style.css`:
- CSS variables for easy color changes
- Fonts
- Spacing and sizing

### Add More Content
- Add projects to the Projects section
- Update certifications
- Add new experience entries

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 📞 Support

For issues with:
- **Contact form:** Check [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md)
- **Hosting:** See GitHub Pages documentation
- **Customization:** Review code comments in files

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Built with HTML, CSS, and vanilla JavaScript
- Hosted on GitHub Pages
- EmailJS for contact form functionality
- Inspired by modern portfolio designs

---

**Last Updated:** January 2026

**Made with ❤️ by Mohamed Ali Lahmar**
