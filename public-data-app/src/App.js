import React, {useState, useEffect} from 'react';

function fetchData() {

  const promise = fetch('https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?serviceKey=tEDDl%2ByB9L2u8vSp3TJz5litBZMmI8xpMkCCq0RQ2JZKiZNR1jTeESYRV0pBOIdSvgERDUZLyllih9LP6I5CjA%3D%3D&searchYearCd=2021&siDo=11&guGun=110&type=json&numOfRows=10&pageNo=1')
    .then(res => {
      if (!res.ok) {
        throw res;
      }
      return res.json()
    })

    return promise;
}

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    fetchData()
    .then(data => {
      setData(data)
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  return <h1>lol</h1>
}

