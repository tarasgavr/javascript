//Завдання 3
async function getDataFromUrl(URL) {
  try {
    const res = await fetch(URL, { method: "GET" });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log(res.ok);
    }
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");
