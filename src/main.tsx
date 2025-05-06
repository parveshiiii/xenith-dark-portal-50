
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

try {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
  } else {
    console.error("Root element not found");
  }
} catch (error) {
  console.error("Failed to render application:", error);
}
