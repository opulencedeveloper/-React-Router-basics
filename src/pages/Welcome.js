import { Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
       <Routes>
      <Route path="new-user" element={<h1>Welcome New user!</h1>} />
      </Routes>
    </section>
  );
};

export default Welcome;
