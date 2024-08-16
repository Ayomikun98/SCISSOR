import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import GetInTouch from "./pages/GetInTouch/GetInTouch"
import Dashboard from "./pages/Dashboard/Dashboard"
import NewLink from "./pages/Dashboard/NewLink/NewLink"
import Analytics from "./pages/Dashboard/Analytics/Analytics"
import MyLinks from "./pages/Dashboard/MyLinks/MyLinks"
import QRCodes from "./pages/Dashboard/QRCodes/QRCodes"
import Settings from "./pages/Dashboard/Settings/Settings"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';

const toastParams = {
  position: 'top-right' as const,
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light' as const,
};

export const notify = (val: string): string | number =>
  toast.success(`${val}`, toastParams);
export const warn = (val: string): string | number =>
  toast.error(`${val}`, toastParams);
export const inform = (val: string): string | number =>
  toast.info(`${val}`, toastParams);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-quote" element={<GetInTouch />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/new" element={<NewLink />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/my-links" element={<MyLinks />} />
          <Route path="/dashboard/qr-codes" element={<QRCodes />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
