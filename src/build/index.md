---
title: Build your own
description: Build the disaster.radio hardware.
---

##### **Procure Materials**  

The following materials are needed to build your own disaster.radio device:  

ESP8266: [WeMos D1 mini development board][esp]  $2.50  
LoRa Transceiver: [HackRF RFM95W][rfm95] or [Dorji DRF1276G][drf12]  $6-7  
Custom printed circuit board(PCB): [~180x120, 1 layer, 100ct][pcb]  $6.50  
Antenna: [900MHz Directional Antenna 5dBi][ant]  $3  
Solar Panel: [6V, 3W, 120mAHL][solar1]  $5-6  
Lithium Ion Battery: [3.7V 3600mAh][batt]  $4  
Buck Converter: [3.3V step-down LM3671][buck]  $5  
Enclosure: 3D printed  ~$5  
Total: ~$40  
</br>

##### **Assemble Hardware**  

Once materials are procured, assemble them as follows:  

    1. Solder components to the custom PCB
    2. Mount PCB in 3D printed enclosure
    3. Connect lithium ion battery to PCB and place in enclosure
    4. Mount solar panel on top of enclosure and connect it to the PCB and battery
    5. Attach your new **disaster.radio** to a strong, sunny spot on your roof.   
</br>

##### **Flash Firmware**  

The disaster.radio firmware is currently being built using the Arduino libraries for the ESP8266. These instructions assume a Linux user enviroment:  
    1. Connect the ESP8266 to computer with microUSB cable
    2. Make sure you has access to serial connections by opening a terminal and executing, 
        - `sudo adduser <your username> dialout`
        - then restart terminal or computer 
    3. `git clone https://github.com/sudomesh/disaster-radio`
    4. Follow instructions in the repository's [README](https://github.com/sudomesh/disaster-radio)
    5. Test connection using a serial monitor like so,
        - `screen /dev/ttyUSB0 115200` or
        - `minicom -D /dev/ttyUSB0 -b 115200`
    6. Test web interface by connecting to the `disaster.radio < MAC address >` wifi network and navigating to 192.168.4.1 
</br>

[esp]: https://wiki.wemos.cc/products:d1:d1_mini
[rfm95]:https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module%2FLoRa-Module%2Fsupport-868M-frequency-p-2807.html
[drf12]: https://www.tindie.com/products/DORJI_COM/868mhz-915mhz-sx1276-module-drf1276g/
[pcb]: https://www.seeedstudio.com/fusion_pcb.html
[ant]: https://www.ebay.com/itm/GSM-900MHZ-Omnidirectional-Wireless-Module-Antenna-SMA-Head-5DBI-19cm/281782888586
[solar1]: https://www.ebay.com/i/121104191012?chn=ps&dispItem=1
[batt]: http://www.dx.com/p/ultrafire-18650-3-7v-3600mah-batteries-pair-50486
[buck]: https://www.adafruit.com/product/2745
