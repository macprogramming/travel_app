import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return <Component {...pageProps} />
}
