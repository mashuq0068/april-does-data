import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Scroll } from 'lucide-react';
import ScrollToTop from './components/ui/ScrollTop.tsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")!).render(<div>
    <ToastContainer />
    <App />
</div>);
