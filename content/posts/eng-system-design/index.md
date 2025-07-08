---
date: "2024-06-01"
draft: false
title: "System Design"
tags: ["system-design"]
---

# Introduction

The goal of system design is to architect scalable, reliable, maintainable, and performant software systems that meet both functional and non-functional requirements.
It focuses on how components (databases, APIs, caches, queues) interact, scale under load, recover from failure, and handle growth.
System design balances trade-offs (like CAP theorem, latency vs. throughput, consistency vs. availability) to ensure the system performs well under real-world constraints.
The art of turning product specs into robust architecture that can scale, survive, and evolve.

# How to approach a system design problem

1. Understand requirements: Functional (product features) + non-functional (scalability, latency, availability, consistency).
2. Define scalability targets: What scale do we need? (users/sec, data volume, request rate).
3. Define the system architecture:
   - Load balancing: Horizontal scaling via stateless services + load balancers.
   - Observability: Metrics, logging, tracing to monitor scale and detect bottlenecks.
4. Data management: Use scalable storage (NoSQL, sharded RDBMS), cache frequently accessed data (CDN, in-memory cache):

   - Data partitioning: Sharding, replication, and consistency.

5. Asynchronous processing: Offload heavy tasks to background workers, queues.
6. Fault tolerance: Redundancy, failover, and recovery.
7. Security: Authentication, authorization, and encryption.
8. Cost optimization: Resource allocation, billing, and monitoring.

# Parts

## CAP Theorem

The CAP theorem, also named Brewer's theorem, states that a distributed system can only have two of the following three properties:

- Consistency
- Availability
- Partition tolerance

## Load Balancer

Load Balancer is a component that distributes incoming traffic across multiple servers, aka, it is a traffic distributor.
Ensures scalability, fault tolerance, and availability.

Example tools: NGINX.

Strategies:
- Round-robin (even distribution)
- Least connections (fewest connections)
- Least response time (lowest latency)
- Hash (consistent hashing)
- IP hash (same IP to same server, session stickiness)
- Weighted (based on server capacity)

## Reverse Proxy
It is a frontend gateway.
Sits in front of servers, forwards client requests to appropriate backend.
Example tools: NGINX.

## Rate Limiting
Rate Limiting is a technique to limit the number of requests a client can make to a server.
It can be configured in NGIX or glued to a controller/service in the application layer using a middleware and Redis.

Example tools: Redis, NGINX.


## Circuit Breakers
Circuit Breakers are used to protect a system from cascading failures.

## Cache

Cache is a component that stores frequently accessed data to improve performance.
For example, we could use Redis to cache frequently accessed data that would otherwise be fetched from a database which could be slow for a large number of requests.

- Hit rate (% of requests served from cache), low hit rate => cache miss => potential performance bottleneck.
- Latency (response time to client), if cache hit => fast (e.g. < 1 ms in Redis), if cache miss => slow (database retrieval, >100 ms).

## Message Queue

Message Queue enables asynchronous communication and allow us to decouple services.
It's a key component for building scalable and fault-tolerant systems.
It's also a key component for building event-driven or microservices architectures.

## Job Queue

Job Queue is a special case of message queuing.
It usually involves enqueuing units of work (jobs/tasks) that need to be processed.
For Node.js applicatgigons, we can use BullMQ library to implement job queue.



## Data Partitioning

Data partitioning involves dividing the data into smaller chunks and storing them on different servers.
For example, in database, we can shard a huge table into multiple shards using a key range or hash to better distribute the data and decrease the write/read latency.

- Bad shard keys => Potential shard hotspots => Performance bottleneck.
  For example, if we shard a table by user ID, and the user ID is not evenly distributed, then some shards will have more data than others (write hotspots).

## Replication

Replication involves creating multiple copies of the data on different servers.
Improve fault tolerance and availability.

# Scalability Challenges

## Vertical Scaling

Vertical scaling involves increasing the resources (CPU, memory, storage) of a single server.
It's simple but has limits:

- Single point of failure
- Limited by hardware
- Costly

## Horizontal Scaling

Horizontal scaling involves adding more servers to handle the load.
It's more scalable but requires more complex architecture:

- Load balancing
- Data partitioning
- Fault tolerance
- Asynchronous processing
- Caching
- Database sharding
- Queues
- CDN

## Data Volume Burst

Data volume can increase rapidly, e.g. 10x in a day.
Can be caused by flash sale, campaign, etc.

### How to Detect

- Spikes in latency only on specific partitions.
- Disk/CPU saturation on one node but not others.
- High replication lag on one replica.
