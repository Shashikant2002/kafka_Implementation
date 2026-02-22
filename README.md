# kafka_Implementation

# For the Run Kafka (For the kafka need this services)
docker run -p 2181:2121 zookeeper

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.1.73:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.73:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka



# This is Module Bast structure we can follow
src/
│
├── app.js
├── server.js
│
├── config/
│   ├── index.js
│   └── env.js
│
├── modules/                  # Feature based modules
│   └── user/
│       ├── user.controller.js
│       ├── user.service.js
│       ├── user.repository.js
│       └── user.events.js
│
├── infrastructure/           # External services (important)
│   ├── messaging/
│   │   ├── index.js          # Messaging factory
│   │   ├── kafka/
│   │   │   ├── kafka.client.js
│   │   │   ├── kafka.producer.js
│   │   │   ├── kafka.consumer.js
│   │   │   └── kafka.admin.js
│   │   │
│   │   ├── rabbitmq/
│   │   │   └── (future)
│   │   │
│   │   └── redis/
│   │       └── (future)
│   │
│   ├── database/
│   │   └── mongo.js
│   │
│   └── logger/
│       └── logger.js
│
├── shared/
│   ├── constants/
│   ├── utils/
│   └── errors/
│
└── routes/
    └── index.js


# Also This We can follow
src/
│
├── app.js
├── server.js
│
├── config/
│   ├── env.js
│   ├── database.js
│   └── messaging.js
│
├── routes/
│   ├── index.js
│   └── user.routes.js
│
├── controllers/
│   └── user.controller.js
│
├── services/
│   └── user.service.js
│
├── repositories/
│   └── user.repository.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validation.middleware.js
│
├── messaging/                    # Messaging Layer (important)
│   ├── index.js                  # Factory
│   │
│   ├── kafka/
│   │   ├── client.js
│   │   ├── producer.js
│   │   ├── consumer.js
│   │   └── admin.js
│   │
│   ├── rabbitmq/                 # Future
│   │   └── (empty)
│   │
│   └── redis/                    # Future
│       └── (empty)
│
├── queues/                       # Background jobs
│   └── email.queue.js
│
├── events/                       # Event definitions
│   └── user.events.js
│
├── cron/                         # Scheduled jobs
│   └── cleanup.cron.js
│
├── utils/
│   ├── logger.js
│   └── response.js
│
└── constants/
    └── topics.js


# Yarn Setup
node -v
npm -v

corepack enable
corepack prepare yarn@stable --activate
yarn -v

# Implementation 
yarn add kafkajs

		

