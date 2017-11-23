---
title: Learn to build your own 
description: 'disaster.radio user guides.'
---

## Assemble Hardware  

Once materials are procured, assemble them as follows:  

1. Solder components to the custom PCB
2. Mount PCB in 3D printed enclosure
3. Connect lithium ion battery to PCB and place in enclosure
4. Mount solar panel on top of enclosure and connect it to the PCB and battery
5. Attach your new **disaster.radio** to a strong, sunny spot on your roof.   

## Flash Firmware  

These instructions assume a Linux user environment:  

1. Connect the ESP8266 to computer with microUSB cable
2. Make sure you have access to serial connections by opening a terminal and executing, 
        sudo adduser <your username> dialout
        sudo reboot 
3. `git clone https://github.com/sudomesh/disaster-radio`
4. Follow instructions in the repository's [README](https://github.com/sudomesh/disaster-radio)
5. Test connection using your preferred serial monitor like screen or minicom,
        screen /dev/ttyUSB0 115200 
        minicom -D /dev/ttyUSB0 -b 115200
6. Test web interface by connecting to the "disaster.radio < MAC address >" wifi network and navigating to 192.168.4.1 

#### More about:  
[Firmware](/learn/firmware)    
[Hardware](/learn/hardware)  
[Software](/learn/software)  

