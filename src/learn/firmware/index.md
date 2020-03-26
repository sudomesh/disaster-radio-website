---
title: Learn about the firmware
description: 'Learn more about disaster.radio firmware.'
---

The [open source firmware](https://github.com/sudomesh/disaster-radio) for the **disaster.radio** utlizes the following technologies:

### Arduino libraries 
Written in C/C++, the firmware currently makes use of the Arduino libraries for the ESP32. Arduino was chosen for rapid development purposes and the quality of community support.  

### Serial Periphral Interface (SPI)
The LoRa chip (SX1276) communicates with the ESP32 microcontroller via SPI. This protocol requires only four general purpose I/O (GPIO) pins, leaving the rest free for the addition of other sensors or devices.  

### Asynchronous Web Sockets
The ESP32 acts as full web server that serves HTML web pages with CSS and JavaScript embedded. It also functions as a web sockets server that asynchronously transfers data between the microcontroller and the client web page. 

### Bluetooth Low Energy (BLE)
The ESP32 can operate in a low energy mode by turning off its WiFi antenna and using BLE instead. The disaster radio can then be accessed through our open source Android application, [DisasterRadio BLE Chatbox](https://play.google.com/store/search?q=DisasterRadio%20BLE%20Chatbox&hl=en_US).

#### More about:  
[Hardware](/learn/hardware)  
[Software](/learn/software)  
[User Guides](/learn/user-guides)    
