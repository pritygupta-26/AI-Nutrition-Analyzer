import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-container">
        <ImageUploader />
      </main>

      <footer className="footer">
        AI-generated nutrition estimates • For informational purposes only
      </footer>
    </div>
  );
}

export default App;