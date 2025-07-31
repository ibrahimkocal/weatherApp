import { useEffect } from "react";

export default function App() {
  const api_key = "7ea32221c8dacaa87e74b4185430370e";
  const city = "rize";

  useEffect(function () {
    async function cityDetails() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      const data = await res.json();
      console.log(data);
    }
    cityDetails();
  }, []);

  return null;
}
