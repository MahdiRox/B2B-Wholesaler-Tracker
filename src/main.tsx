/// <reference types="vite/client" />
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import App from './App.tsx';
import ConvexSetupGuide from './components/ConvexSetupGuide.tsx';
import './index.css';

// @ts-ignore - Ensure TS passes even if global typings are incomplete
const convexUrl = ((import.meta as any).env.VITE_CONVEX_URL as string) || "";
const root = document.getElementById('root')!;

if (!convexUrl) {
  // If variables are missing, fallback cleanly to avoid crashing preview
  createRoot(root).render(<ConvexSetupGuide />);
} else {
  // Standard Convex setup connection
  const convex = new ConvexReactClient(convexUrl);
  createRoot(root).render(
    <StrictMode>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </StrictMode>
  );
}
