---
title: Learn about routing 
description: 'Learn more about disaster.radio routing.'
---

Every disaster.radio node can connect to any other neighboring disaster.radio node. These neighboring nodes then connect to their neighbors. And so on. To do this, the disaster.radio utilizes an open-source routing protocol called LoRaLayer2. This protocol is designed to be as minimal as possible in order to reduce network overhead (i.e. the number of packets transmitted and the amount of time spent "on-air"). A group of disaster.radio nodes that communicate using the LoRaLayer2 protocol create a LoRa Mesh.

## LoRa Mesh 
A "mesh" network implies that every node in a network connects to every other node. In reality, this rarely happens and is little more than a design goal. The LoRaLayer2 routing protocol is designed to be "mesh-first" and "peer-to-peer," in that there is no client-server concept or hierarchy imposed on the network. For more information about the protocol, vist our [wiki](https://github.com/sudomesh/disaster-radio/wiki/Protocol) or read the source code [here](https://github.com/sudomesh/LoRaLayer2)

## Network stack
A disaster.radio network uses an alternative network stack, inspired by the OSI model used to teach traditional networking. Read more about the network stack on our [wiki](https://github.com/sudomesh/disaster-radio/wiki/Layered-Model).

#### More about:
[Firmware](/learn/firmware)  
[Hardware](/learn/hardware)  
[Routing](/learn/routing)  
[User Guides](/learn/user-guides)  
