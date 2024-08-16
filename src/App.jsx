import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AccountPage, NotesPage, OfferNotesPage, RentNotesPage, BlogsPage, LoginPage, EditAccountPage,SignUpPage } from '@/pages';

function App() {
  return (
    <>
      <div className='font-clash bg-black text-white min-h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/offer" element={<OfferNotesPage />} />
            <Route path="/rent" element={<RentNotesPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/edit-account" element={<EditAccountPage />} />
            <Route path="/signup" element={<><SignUpPage/></>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
