// import axios from "axios";
// export function dataStore(data) {
//   axios
//     .post(
//       "https://script.google.com/macros/s/AKfycbzFcGWPwBtma265AxlaPtWwmc-o846SiKnDPmDoJvnznvE7s9pb1QVXjYPRo_hKKBKk-Q/exec",
//       {
//         name: "rs",
//       }
//     )
//     .then((response) => console.log(response.data))
//     .then((error) => console.log(error));
// }

// export function dataStore(data) {
//   const d = {
//     name: "es",
//   };

//   fetch(
//     "https://script.google.com/macros/s/AKfycbzFcGWPwBtma265AxlaPtWwmc-o846SiKnDPmDoJvnznvE7s9pb1QVXjYPRo_hKKBKk-Q/exec",
//     {
//       method: "POST",
//       headers: {
//         withCredentials: true,
//         crossorigin: true,
//         mode: "no-cors",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//       },
//       body: JSON.stringify(d),
//     }
//   );
// }

// export function dataStore1(data) {
//   fetch(
//     "https://script.google.com/macros/s/AKfycbzFcGWPwBtma265AxlaPtWwmc-o846SiKnDPmDoJvnznvE7s9pb1QVXjYPRo_hKKBKk-Q/exec",
//     {
//       method: "POST",
//       withCredentials: true,
//       crossorigin: true,
//       mode: "no-cors",
//     }
//   );
// }

export function dataStore(data) {
  console.log(data.answers);
  fetch(
    "https://script.google.com/macros/s/AKfycbxgg1kWa87FuuL_nLxBVLEKiToW6wJeqzyC7dK2EVPxVJ6OhCXljY42sH-g5XRdYIeelw/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      // handle the response
    })
    .catch((error) => {
      // handle the error
    });
}
