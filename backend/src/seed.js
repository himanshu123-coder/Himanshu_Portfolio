import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const projectSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,
    technologies: [String],
    github: String,
    live: String,
    featured: Boolean,
    image: String
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

const projects = [
  {
    title: "AI-Powered Cloud & Website Monitoring Dashboard",
    category: "AI + Cloud",
    description:
      "A full-stack monitoring and cost-optimization platform for AWS workloads. It combines cloud metrics, website monitoring, estimated costs and an AI recommendation pipeline to identify optimization opportunities.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS", "CloudWatch", "LangGraph", "Docker", "Terraform"],
    github: "https://github.com/himanshu123-coder/AWS_DASHBOARD",
    live: "",
    featured: true
  },
  {
    title: "PPE Detection System",
    category: "Computer Vision",
    description:
      "YOLO-based safety monitoring system that detects PPE compliance from images, video and webcam streams, with a Streamlit interface and support for administrative alerts.",
    technologies: ["Python", "YOLO11", "Ultralytics", "OpenCV", "Streamlit", "PyTorch"],
    github: "https://github.com/himanshu123-coder",
    live: "",
    featured: true
  },
  {
    title: "Full-Stack E-Commerce Application",
    category: "Full Stack",
    description:
      "A full-stack e-commerce application designed for deployment on AWS, with a modern React/Next.js frontend and Express/Mongoose backend.",
    technologies: ["Next.js", "React", "JavaScript", "MUI", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS"],
    github: "https://github.com/himanshu123-coder",
    live: "",
    featured: false
  },
  {
    title: "Face Recognition System",
    category: "AI + Computer Vision",
    description:
      "Computer-vision practice project for face detection and recognition using webcam and recorded video, including known/unknown identification.",
    technologies: ["Python", "OpenCV", "dlib", "face_recognition"],
    github: "https://github.com/himanshu123-coder",
    live: "",
    featured: false
  },
  {
    title: "AI Trainee — NVIDIA DGX Work",
    category: "AI / ML",
    description:
      "Academic AI/ML training experience involving model experimentation and work with an NVIDIA DGX server environment.",
    technologies: ["Python", "Machine Learning", "Deep Learning", "NVIDIA DGX"],
    github: "",
    live: "",
    featured: false
  },
  {
    title: "AyurSeva Panchakarma",
    category: "Web Development",
    description:
      "A healthcare-oriented web application concept developed as part of a Smart India Hackathon team project.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/himanshu123-coder",
    live: "",
    featured: false
  }
];

await mongoose.connect(process.env.MONGO_URI);
await Project.deleteMany({});
await Project.insertMany(projects);
console.log(`Seeded ${projects.length} projects`);
await mongoose.disconnect();
