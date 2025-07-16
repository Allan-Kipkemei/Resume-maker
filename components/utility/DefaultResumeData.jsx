const DefaultResumeData = {
  name: "Allan Kipkemei",
  position: "Software Developer",
  contactInformation: "+254 712345678", // You can update this
  email: "allan.kipkemei@example.com", // Replace with your actual
  address: "Nairobi, Kenya",
  profilePicture: "", // Add a hosted image URL if you'd like
  socialMedia: [
    {
      socialMedia: "Github",
      link: "https://github.com/yourusername",
    },
    {
      socialMedia: "LinkedIn",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      socialMedia: "Website",
      link: "https://yourportfolio.com",
    },
  ],
  summary: "A passionate Software Developer focused on building scalable, secure, and efficient web applications. With a growing interest in security development, Web3, and backend architecture, Allan enjoys building full-stack solutions and experimenting with Go, PostgreSQL, gRPC, and smart contracts. Driven by curiosity and learning by doing.",
  education: [
    {
      school: "Multimedia University of Kenya",
      degree: "BSc in Computer Science (or related IT field)",
      startYear: "2022-09-01",
      endYear: "2026-07-01"
    },
  ],
  workExperience: [
    {
      company: "Personal & Open Source Projects",
      position: "Backend Developer",
      description: "Developed multiple full-stack applications including a KYC verification API using gRPC and Go, and a debt collection system with React, Next.js, Go, and PostgreSQL.",
      keyAchievements: "Built scalable Go APIs with PostgreSQL\nDesigned and tested real-time gRPC streaming for face match\nImplemented secure authentication and DB optimization",
      startYear: "2024-01-01",
      endYear: "Present"
    },
    {
      company: "Freelance Projects",
      position: "Software Developer",
      description: "Worked on contract-based projects involving frontend development with React and backend using Node.js and Python. Helped clients automate manual workflows and integrate with third-party APIs.",
      keyAchievements: "Delivered 3+ client projects on time and with full satisfaction\nCreated reusable components and clean backend APIs",
      startYear: "2023-05-01",
      endYear: "2023-12-01"
    }
  ],
  projects: [
    {
      name: "KYC gRPC Verification API",
      description: "Developed a face-match KYC system with gRPC in Go. Supports document uploads, streaming video match, external API calls, and PostgreSQL for persistent storage.",
      keyAchievements: "Built real-time gRPC streaming with image matching\nAdded simulated API calls and secure file handling",
      startYear: "2025-07-01",
      endYear: "2025-07-10",
      link: "https://github.com/yourusername/grpc-kyc-api"
    },
    {
      name: "Debt Collector System",
      description: "A full-stack credit collection platform using Next.js, Golang, and PostgreSQL. Supports account tracking, debt reminders, and admin analytics.",
      keyAchievements: "Built from scratch using Go backend and React frontend\nImplemented JWT auth and PostgreSQL relations",
      startYear: "2025-06-01",
      endYear: "2025-07-01",
      link: "https://github.com/yourusername/debt-collector"
    }
  ],
  skills: [
    {
      title: "Technical Skills",
      skills: [
        "Go", "JavaScript", "TypeScript", "React", "Next.js", "PostgreSQL",
        "MongoDB", "Node.js", "gRPC", "Python", "Firebase", "REST API",
        "Git", "Docker", "Linux", "HTML/CSS", "Bash"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-solving", "Time management", "Teamwork", "Self-learning", "Adaptability"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "Web Security", "System Design", "CI/CD Concepts", "API Design", "Smart Contracts (Solidity)"
      ] 
    }
  ],
  languages: [
    "English",
    "Swahili",
  ],
  certifications: [
    {
      name: "AI & Machine Learning with Python",
      issuer: "Multimedia University (Course-based project)"
    },
    {
      name: "Introduction to Blockchain Development",
      issuer: "Self-paced learning (e.g., buildspace or similar)"
    },
    {
      name: "gRPC with Go",
      issuer: "Udemy / YouTube Course"
    }
  ],
};

export default DefaultResumeData;
