import {switchOverScreen} from "./switch-over-screen";
import {store} from './data/store';


store.subscribe(switchOverScreen);

switchOverScreen();
