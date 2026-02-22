import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "kafka_implementation",
    brokers: ['http://192.168.1.73:9092']
})


async function init() {
    const admin = kafka.admin();

    console.log("Kafka Admin Connecting.......");
    await admin.connect()
    console.log("Kafka Admin Connected.");

    console.log("Creating Kafka Admin Topic");
    await admin.createTopics({
        topics: [{
            topic: "rider_update",
            numPartitions: 2,
        }]
    })
    console.log("Created Kafka Admin Topic");


    console.log("Kafka Admin Disconnecting.......");
    await admin.disconnect();
    console.log("Kafka Admin Disconnected.......");
}

init()