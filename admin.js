import kafka from "./kafka.js";

async function init() {
    const admin = kafka.admin();
    try {
        console.log("Kafka Admin Connecting.......");
        await admin.connect()
        console.log("Kafka Admin Connected.");

        console.log("Creating Kafka Admin Topic");
        const created = await admin.createTopics({
            topics: [{
                topic: "rider_update",
                numPartitions: 2,
            }]
        })
        console.log("Created Kafka Admin Topic - result:", created);
    } catch (err) {
        console.error("Kafka admin operation failed:", err && err.message ? err.message : err);
        process.exitCode = 1;
    } finally {
        try {
            console.log("Kafka Admin Disconnecting.......");
            await admin.disconnect();
            console.log("Kafka Admin Disconnected.......");
        } catch (dErr) {
            console.error("Error during admin.disconnect():", dErr && dErr.message ? dErr.message : dErr);
        }
    }
}

init()