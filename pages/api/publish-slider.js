
async function handler(req, res) {
  console.log("Posting slider data to backend");
  const response = await fetch("http://localhost:8081/publish-slider", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(JSON.stringify(data))
  res.json(data);
}

export default handler;
