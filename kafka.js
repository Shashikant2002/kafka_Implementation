import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "kafka_implementation",
    brokers: ['192.168.1.73:9092']
})


export default kafka;