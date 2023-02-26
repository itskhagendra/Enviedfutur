import ComingSoon from "./Pages/ComingSoon";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App =() =>{
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route index element={<Home />} />
    //       {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} /> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  );
};
export default App;