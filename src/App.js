import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import Login from './pages/homepages/Login';
import SignUp from './pages/homepages/SignUp';
import Mypage from './pages/homepages/Mypage';
import MyProfile from './pages/homepages/MyProfile';
import Password from './pages/homepages/Password';

import StarHub from './pages/starhubpages/StarHub';
import StarBoard from './pages/starhubpages/StarBoard';
import StHubDetail from './pages/starhubpages/StHubDetail';

import StarShare from './pages/starsharepages/StarShare';
import StShrDetail from './pages/starsharepages/StShrDetail';
import StShrModal from './pages/starsharepages/StShrModal';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* homepages 구성 */}
          <Route path='/' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='mypage' element={<Mypage />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='password' element={<Password />} />
        {/* // starhubpages 구성 */}
          <Route path='starhub' element={<StarHub />} />
          <Route path='starboards' element={<StarBoard />} />
          <Route path='sthubdetail' element={<StHubDetail />} />
        {/* // starsharepages 구성 */}
          <Route path='starshare' element={<StarShare />} />
          <Route path='/starshare/:id' element={<StShrDetail />} />
          <Route path='stshrmodal' element={<StShrModal />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
