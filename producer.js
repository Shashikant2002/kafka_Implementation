import kafka from "./kafka.js";

async function init() {
  const producer = kafka.producer();
  try {
    console.log("producer Connecting.......");
    await producer.connect();
    console.log("producer Connected.");

    producer.send({
      topic: "rider_update",
      messages: [
        {
          partition: 0,
          key: "location:update",
          value: JSON.stringify({
            name: "Shashikant",
            location: "HR",
          }),
        },
      ],
    });
  } catch (err) {
    console.error(
      "Kafka producer operation failed:",
      err && err.message ? err.message : err,
    );
    process.exitCode = 1;
  } finally {
    try {
      console.log("producer Disconnecting.......");
      await producer.disconnect();
      console.log("producer Disconnected.......");
    } catch (dErr) {
      console.error(
        "Error during producer.disconnect():",
        dErr && dErr.message ? dErr.message : dErr,
      );
    }
  }
}

init();
