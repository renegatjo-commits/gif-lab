import { createRoot } from 'react-dom/client';
import Editor from './app/page';
import './app/globals.css';

if (new URLSearchParams(location.search).get('embed') === '1') document.documentElement.dataset.embed = 'true';
createRoot(document.getElementById('root')!).render(<Editor/>);
