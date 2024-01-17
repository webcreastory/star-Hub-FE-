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
import Layout from './pages/homepages/Layout';

const queryClient = new QueryClient();

function App() {
  const handleStarBoardDataUpdate = (updatedItem) => {
    // 여기에 실제로 데이터를 업데이트하는 로직을 작성하세요
    console.log('스타 보드 데이터 업데이트:', updatedItem);
  };

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="password" element={<Password />} />

          <Route path="starhub" element={<StarHub updateStarBoardData={handleStarBoardDataUpdate} />} />
          <Route path="starboards" element={<StarBoard />} />
          <Route path="sthubdetail" element={<StHubDetail updateStarBoardData={handleStarBoardDataUpdate} />} />

          <Route path="starshare" element={<StarShare />} />
          <Route path="/starshare/:id" element={<StShrDetail />} />
          <Route path="stshrmodal" element={<StShrModal />} />
</Route>
</Routes>
</BrowserRouter>
</QueryClientProvider>
);
}

export default App;

