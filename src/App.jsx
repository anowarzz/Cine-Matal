import Header from "./components/Header";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
        </div>
      </main>
    </div>
  );
};

export default App;
