import { Course } from "../courses/Course";
import { Home } from "../home/Home";

const HOME_LABEL = "Principal";
const PREFERENCES_LABEL = "Preferencias";

const HOME = { name: HOME_LABEL, component: <Home/> };
const PREFERENCES = { name: PREFERENCES_LABEL, component: <Course/> };

const PAGES = [
    HOME, 
    PREFERENCES
];

export { PAGES, HOME };