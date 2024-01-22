
async function handler(req, res) {
  console.log("Publish Data to Ubidots");
  const response = await fetch("https://industrial.api.ubidots.com/api/v1.6/devices/robot/", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "BBUS-R9TZ8sPj4ctPgpHE6HEOCIsvAwixSx"
    },
  });
  const data = await response.json();
  console.log(JSON.stringify(data))
  res.json(data);

}

export default handler;
