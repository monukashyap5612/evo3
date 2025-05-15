import {Routes, Route} from 'react-router-dom';
import Login from '../pages/login';
import Inbox from '../pages/inbox';
import Task from '/.Pages/Task';
import Settings from './Pages/Settings';

export default function App(){
    return(
        <Routes>
            <Route path="/login" element ={<Login/>} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/task/:id"element={<Task/>} />
            <Route path="/settings"element={<settings/>} />
        </Routes>
    );
}