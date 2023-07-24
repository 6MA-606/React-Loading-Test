import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

function App() {
  const [dogs, setDogs] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogs(response.data.message);
    } catch (error) {
      console.error("Something went wrong, ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <Oval
              height={80}
              width={80}
              color="orange"
              secondaryColor="orange"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
            }}
          >
            <img 
              style={{
                height: "400px",
                maxWidth: "500px",
              }}
              src={dogs}
              alt=""
            />
          </div>
          )
        }
        <br />
        <button onClick={fetchDogs}>Random Pics</button>
      </div>
    </>
  )
}

export default App
