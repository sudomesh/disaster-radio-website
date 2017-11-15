---
title: Build
description: Build the Disaster radio hardware.
---

**Procure Materials**
    
    - ESP8266: [WeMos D1 mini][esp] - $2.50  
    - LoRa Transceiver: [HackRF RFM95W][rfm95] or [Dorji DRF1276G][drf12] - $6-7  
    - Custom printed circuit board(PCB): [from seeed][pcb] ~180x120, 1 layer, 100ct - $6.50  
    - Antenna: [900MHz Directional Antenna 5dBi][ant] - $3  
    - Solar Panel: [6V, 3W, 120mAHL][solar1], [another example][solar2] - $5-6  
    - Lithium Ion Battery: [3.7V 3600mAh][batt] - $4  
    - Buck Converter: [3.3V step-down LM3671][buck] - $5  
    - Enclosure: 3D printed - ~$5  

    Total: ~$40

**Assemble Hardware**
    1. Solder components to the custom PCB
    2. Mount PCB in 3D printed enclosure
    3. Connect lithium ion battery to PCB and place in enclosure
    4. Mount solar panel on top of enclosure and connect it to the PCB and battery
    5. Attach your new **Disaster Radio** to a strong, sunny spot on your roof.

**Flash Firmware**
    The Disaster Radio firmware is currently being built using the Arduino libraries for the ESP8266. These instructions assume a Linux user enviroment.
    1. Connect the ESP8266 to computer with microUSB cable
    2. Make sure you has access to serial connections by opening a terminal and executing, 
        - `sudo adduser <your username> dialout`
        - then restart terminal or computer 
    3. `git clone https://github.com/sudomesh/disaster-radio`
    4. Follow instructions in the repository's [README](https://github.com/sudomesh/disaster-radio)
    5. Test connection using a serial monitor like so,
        - `screen /dev/ttyUSB0 115200` or
        - `minicom -D /dev/ttyUSB0 -b 115200`
    6. Test web interface by connecting to the `Disaster Radio < MAC address >` wifi network and navigating to 192.168.4.1 


[esp]: https://wiki.wemos.cc/products:d1:d1_mini
[rfm95]:https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module%2FLoRa-Module%2Fsupport-868M-frequency-p-2807.html
[drf12]: https://www.tindie.com/products/DORJI_COM/868mhz-915mhz-sx1276-module-drf1276g/
[pcb]: https://www.seeedstudio.com/fusion_pcb.html
[ant]: https://www.ebay.com/itm/GSM-900MHZ-Omnidirectional-Wireless-Module-Antenna-SMA-Head-5DBI-19cm/281782888586
[solar1]: https://www.ebay.com/i/121104191012?chn=ps&dispItem=1
[solar2]: https://www.tvc-mall.com/details/3w-6v-diy-monocrystalline-silicon-solar-panel-145mm-x-145mm-sku85020025a.html?c=USD&utm_source=google&utm_medium=pla&utm_campaign=cse&gclid=Cj0KCQjwm9vPBRCQARIsABAIQYfM_ndtJ1RmWUGdkqA8Um40bBY9H3kJ9xRg6gLKMoaC65sB17ZRiJ4aAhHdEALw_wcB
[batt]: http://www.dx.com/p/ultrafire-18650-3-7v-3600mah-batteries-pair-50486
[buck]: https://www.adafruit.com/product/2745
