import { default as Error } from './Error/Error';
import Home from "./Home/Home"
import { default as Login } from './Login/Login';
import { default as Analytics } from './Dashboard/Analytics/Analytics';
import { default as MyLinks } from './Dashboard/MyLinks/MyLinks';
import { default as NewLink } from './Dashboard/NewLink/NewLink';
import { default as QRCodes } from './Dashboard/QRCodes/QRCodes';
import { default as Dashboard } from './Dashboard/Dashboard';
import { default as Settings } from './Dashboard/Settings/Settings';
import { default as SignUp } from './SignUp/SignUp';
import { default as GetInTouch } from './GetInTouch/GetInTouch';

const index  = () => {
    return <Home />
}

