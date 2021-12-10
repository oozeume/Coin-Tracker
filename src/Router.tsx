import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
