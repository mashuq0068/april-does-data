import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Scroll } from 'lucide-react';
import ScrollToTop from './components/ui/ScrollTop.tsx';

createRoot(document.getElementById("root")!).render(<div>
   
    <App />
</div>);
