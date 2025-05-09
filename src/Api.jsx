
const Api = () => {
  const fetchApi = async () => {
    let resonse = await fetch("http://localhost:3000/");
    resonse = await resonse.json();
    console.log(resonse);
  };
  fetchApi();
  return <div>Api</div>;
};

export default Api;
