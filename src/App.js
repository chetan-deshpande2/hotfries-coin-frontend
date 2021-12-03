import './App.scss';
import MainLayout from './Component/Layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Audit from './Views/Audit/Audit';
import About from './Views/About/About';
import Hotfriescoin from './Views/Hotfriescoin/Hotfriescoin';
import Tokenomic from './Views/Tokenomic/Tokenomic';
import Carrer from './Views/Career/Career';
import Guides from './Views/Guides/Guides';
import UserSupport from './Views/UserSupport/UserSupport';
import ReferralProgram from './Views/ReferralProgram/ReferralProgram';
import BugBounty from './Views/BugBounty/BugBounty';

function App() {
  return (
    <>
    <Routes >
      <Route exact path='/' element={<MainLayout/>} />
      <Route path='/audit' element={<Audit/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/hotfriescoin' element={<Hotfriescoin/>} />
      <Route path='/tokenomic' element={<Tokenomic/>} />
      <Route path='/carrer' element={<Carrer/>} />
      <Route path='/guides' element={<Guides/>} />
      <Route path='/user-support' element={<UserSupport/>} />
      <Route path='/referral-program' element={<ReferralProgram/>} />
      <Route path='/bug-bounty' element={<BugBounty/>} />
    </Routes>
    </>
  );
}

export default App;
