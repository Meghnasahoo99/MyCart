import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const product = [
    {
      price: 9999,
      name: "Iphone 12",
      quantity: 0,
    },

    {
      price: 9990,
      name: "Samsung z1",
      quantity: 5,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList product={product} />
      </main>
    </>
  );
}

export default App;
