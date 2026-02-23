import kafka from "./kafka.js";

async function init() {
  const consumer = kafka.consumer({ groupId: "user_1" });
  try {
    console.log("consumer Connecting.......");
    await consumer.connect();
    console.log("consumer Connected.");

    await consumer.subscribe({ topics: ["rider_update"], fromBeginning: true });

    await consumer.run({
      eachMessage: ({ topic, partition, message, heartbeat, pause }) => {
        console.log(
          `[${topic}] \n PART: ${partition} \n MESSAGE:`,
          message.toString(),
        );
      },
    });
  } catch (err) {
    console.error(
      "Kafka consumer operation failed:",
      err && err.message ? err.message : err,
    );
    process.exitCode = 1;
  } finally {
    // try {
    //   console.log("consumer Disconnecting.......");
    //   await consumer.disconnect();
    //   console.log("consumer Disconnected.......");
    // } catch (dErr) {
    //   console.error(
    //     "Error during consumer.disconnect():",
    //     dErr && dErr.message ? dErr.message : dErr,
    //   );
    // }
  }
}

init();
