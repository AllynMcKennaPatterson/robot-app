
async function handler(req, res) {
  console.log("Publish Data to Ubidots: " + JSON.stringify(req.body));
  const response = await fetch("http://localhost:8080/publish-slider", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await response.json();
  console.log(JSON.stringify(data))
  res.json(data);

}

export default handler;
