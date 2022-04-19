import styles from './index.scss'
import Auth from './pages/auth/Auth'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
        <div className='wrapper'>
            <Auth />
            <ToastContainer position="bottom-center" hideProgressBar={true} theme="dark" autoClose={3000} transition={Flip} />
        </div>
    );
}

export default App;
