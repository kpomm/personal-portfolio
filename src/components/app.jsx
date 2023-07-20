import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import Counter from './counter';
import Nav from './Nav';
import Landing from './Landing';
import Photos from './Photos';
import Projects from './Projects';

// components
// function About(props) {
//   return <div> All there is to know about me </div>;
// }

// function Welcome(props) {
//   return (
//     <div className="parent">
//       <div>Welcome</div>
//       <Counter />
//     </div>
//   );
// }

// function Test(props) {
//   const { id } = useParams();
//   return (
//     <div>
//       {' '}
//       ID:
//       {' '}
//       {id}
//       {' '}
//     </div>
//   );
// }

function FallBack(props) {
  return <div>URL Not Found</div>;
}

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

// app
function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route path="/photos" element={<Photos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
