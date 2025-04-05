import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import App from './App.tsx'
import {setupStore} from "./redux/store/store.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
)
