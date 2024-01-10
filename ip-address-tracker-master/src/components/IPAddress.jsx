import SearchBar from "./SearchBar";
import Details from "./Details";
import MapView from "./MapView";

const IPAddress = () => {
  return (
    <main className=" flex flex-col h-screen relative justify-center">
      <SearchBar />
      <Details />
      <MapView />
    </main>
  );
};

export default IPAddress;
