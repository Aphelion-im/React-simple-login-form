import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin/SignIn';
import SuccessContactForm from './pages/success/SuccessContactForm';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/contact" element={<SignIn />} />
        <Route path="/success" element={<SuccessContactForm />} />
      </Routes>
    </>
  );
}
