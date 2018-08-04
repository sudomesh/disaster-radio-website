---
title: Build your own
description: Build the disaster.radio hardware.
---

The disaster.radio hardware is still under development. 

Our first prototypes had a few bugs and we're currently working on a fixed design. It is entirely feasible to build your own disaster.radio. Most parts are readily available via online retailers.

The source code, custom circuit board layout schematics and enclosure design is all available [on our github repo](https://github.com/sudomesh/disaster-radio).

## Procure Materials  

The following materials are needed to build your own disaster.radio device:  

ESP8266: [WeMos D1 mini development board][esp], $2.50  
LoRa Transceiver: [HackRF RFM95W][rfm95] or [Dorji DRF1276G][drf12], $6-7  
Custom printed circuit board(PCB): [~180x120, 2 layer, 10ct][pcb], $5.00  
Antenna: [900MHz Directional Antenna 5dBi][ant], $3  
Solar Panel: [6V, 3W, 120mAHL][solar1], $5-6  
Lithium Ion Battery: [3.7V 3600mAh][batt], $4  
Battery charging circuit: [CN3791][charg], $1.50  
Buck Converter: [3.3V step-down LM3671][buck], $5  
Enclosure: 3D printed, ~$5  
Total: ~$40  

#### Follow the [User Guides](/learn/user-guides) to assemble the hardware and  flash the firmware

[esp]: https://wiki.wemos.cc/products:d1:d1_mini
[rfm95]:https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module%2FLoRa-Module%2Fsupport-868M-frequency-p-2807.html
[drf12]: https://www.tindie.com/products/DORJI_COM/868mhz-915mhz-sx1276-module-drf1276g/
[pcb]: https://www.seeedstudio.com/fusion_pcb.html
[ant]: https://www.ebay.com/itm/GSM-900MHZ-Omnidirectional-Wireless-Module-Antenna-SMA-Head-5DBI-19cm/281782888586
[solar1]: https://www.ebay.com/i/121104191012?chn=ps&dispItem=1
[batt]: http://www.dx.com/p/ultrafire-18650-3-7v-3600mah-batteries-pair-50486
[charg]: https://www.aliexpress.com/item/Free-Shipping-10pcs-lot-CN3791-single-lithium-battery-charge-management-patch-SSOP10-new-original/32554882437.html 
[buck]: https://www.adafruit.com/product/2745
