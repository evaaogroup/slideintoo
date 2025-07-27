import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import '../styles/globals.css'

// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`🚀 Page loaded in ${loadTime.toFixed(2)}ms`);
    
    // Report to analytics if needed
    if (loadTime < 1000) {
      console.log('✅ Excellent load time!');
    } else if (loadTime < 2000) {
      console.log('⚠️ Good load time, could be optimized');
    } else {
      console.log('❌ Load time needs improvement');
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 