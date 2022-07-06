import "./styles.css";
import Crypto from "./components/Crypto.js";
export default function App() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">React-crypto</h1>
      <Crypto />
    </div>
  );
}
