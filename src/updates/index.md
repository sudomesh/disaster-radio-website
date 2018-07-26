---
title: Updates
description: Project updates.
---

## Finalists and manufacturing for dWeb summit!
_July 25th 2018_

First, it is our great pleasure to announce that we've been selected as one of the seven finalists in the [Mozilla/NSF Wireless Innovations Challenge](https://blog.mozilla.org/blog/2018/07/19/a-science-fair-with-1-6-million-in-prizes/). Four of the seven will take home one of the following prizes:

* $400,000
* $250,000
* $100,000
* $50,000

The final stage in the competition will be a 5 minute live-demo on August 14th. We will be posting a link to the live-stream here!

Our other piece of news is that a generous benefactor and co-organizer of the [Decentralized Web Summit](https://decentralizedweb.net/) donated funds to allow us to build ~50 nodes that will be raffled off to interested developers at the summit! Hopefully this will help get more developers and imagining new ways to use long distance low bandwidth networks.

We were given a tight deadline to produce these boards so last night we had a soldering party and the disaster.radio community came together for several hours or soldering and testing. 

<div class="captioned">
  <img class="blog" src="/assets/images/solder_party_up_high.jpg" width="854" />
  <div class="caption">
    <p>The extended disaster.radio community gathered around the main hacking tables in the sudo room hackerspace.</i>
  </div>
</div>

<div class="captioned">
  <img class="blog" src="/assets/images/solder_party_down_low.jpg" width="854" />
  <div class="caption">
    <p>Everyone is busy soldering the RFM95 modules onto the dev kits.</i>
  </div>
</div>

Current status is that we have 32 fully tested and working radio boards with several more partially completed. We'll have a small soldering party this coming Monday evening to finish the last 18 boards.

## Working solar prototypes!
_June 22nd 2018_

<iframe width="864" height="480" src="https://www.youtube.com/embed/0dosXMXaU94" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Here's a rought little video demo showing both the fully solar + battery powered node prototype talking to the portable node prototype. The basic functionality is now working! There's still much testing and improvement to be done before mass-production but this is a major projection milestone. Onwards and upwards!

## 3D printed enclosure!
_May 15th 2018_

<video id="may_15_video" class="video-js vjs-fluid vjs-default-skin" controls preload="auto" width="864" height="480" poster="/assets/images/may_15_poster.png" data-setup="{}">
  <source src="//disaster.radio/videos/marc_explain.480p.webm" type="video/webm" label="480p" />
  <source src="//disaster.radio/videos/marc_explain.720p.webm" type="video/webm" label="720p" />
  <source src="//disaster.radio/videos/marc_explain.480p.mp4" type="video/mp4" label="480p" />
  <source src="//disaster.radio/videos/marc_explain.720p.mp4" type="video/mp4" label="720p" />

</video>

Nic just finished 3D printing the first batch of the enclosures for the new PCB! These are designed to print with no support material and be easy to not only 3D print but also injection mold. They use a rubber gasket to seal against the PCB and the back of the PCB is then connected to the solar panel.

<div class="captioned">
  <img class="blog" src="/assets/images/nic_enclosure.jpg" width="480" />
  <div class="caption">
    <p>Pirate Nic demonstrating his enclosure prototype</i>
  </div>
</div>

While the current mounting system uses a simple hose clamp, Nic has also been working on an attachment system that will allow for a variety of attachment options such as screw-mounting or suction cup mounting for the inside of windows.

<div class="captioned">
  <img class="blog" src="/assets/images/enclosure_with_solar_top.jpg" width="480" />
  <div class="caption">
    <p>The enclosure with the solar panel attached.</i>
  </div>
</div>

The solar panel is attached using springs soldered to the copper pads of the PCB and plastic brackets pressing it down onto the springs.

<div class="captioned">
  <img class="blog" src="/assets/images/enclosure_with_solar_side.jpg" width="480" />
  <div class="caption">
    <p>Side view of solar panel attachment system.</i>
  </div>
</div>

### Video download links

WebM VP9:

* [720p](//disaster.radio/videos/marc_explain.720p.webm) 
* [480p](//disaster.radio/videos/marc_explain.480p.webm) 

MP4 H.264:

* [720p](//disaster.radio/videos/marc_explain.720p.mp4)
* [480p](//disaster.radio/videos/marc_explain.480p.mp4)

<hr/>

## New boards have arrived!
_April 24th 2018_

<video id="video" class="video-js vjs-fluid vjs-default-skin" controls preload="auto" width="864" height="480" poster="/assets/images/april_update/disaster.radio.fitz.v3board.jpg" data-setup="{}">
  <source src="//disaster.radio/videos/fitz_april_update_1080p.mp4" type="video/mp4" label="1080p" />
  <source src="//disaster.radio/videos/fitz_april_update_1080p.webm" type="video/webm" label="1080p" />
  <source src="//disaster.radio/videos/fitz_april_update_720p.mp4" type="video/mp4" label="720p" />
  <source src="//disaster.radio/videos/fitz_april_update_720p.webm" type="video/webm" label="720p" />
  <source src="//disaster.radio/videos/fitz_april_update_480p.mp4" type="video/mp4" label="480p" />
  <source src="//disaster.radio/videos/fitz_april_update_480p.webm" type="video/webm" label="480p" />
</video>

We're currently working on two disaster.radio boards:

* The small dev board with usb but no solar/battery
* The large close-to-final board with solar and battery charging

The small board is intended to make development cheap and easy, using a detachable WeMos D1 Mini ESP8266 board with integrated microusb and on-board wifi antenna connected to the RFM95 LoRa chip with a small detachable antenna. We're expecting that we'll be able to offer a few of these boards to early developers soon at ~$25 per kit.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/fits_and_nanomonkey_soldering_behind.jpg" width="480" />
  <div class="caption">
    <p>The soldering assembly line.</i>
  </div>
</div>

The small dev board is actually the third iteration, with the first two having a few design bugs, and early testing indiciates that they're working as intended. We ordered these with capacitors and voltage regulator pre-soldered, and this is our first time ordering boards with components so we're pretty excited to test them out.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/small_prepopulated_front.jpg" width="854" />
  <div class="caption">
    <p>Dev board as it arrived from Seeed Studio (front)</i>
  </div>
</div>

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/small_prepopulated_back.jpg" width="854" />
  <div class="caption">
    <p>Dev board as it arrived from Seeed Studio (back)</i>
  </div>
</div>

We have 50 of these small boards, which all need the following components hand-soldered:

* RFM95 LoRa radio
* SMA connector
* Pin headers

We made the decision not to have Seeed studio solder these components becaue they were not in stock at Seeed and would have introduced additional delays and cost. For the relatively low quantities we're working with during early development it just didn't make sense.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/small_populated_front.jpg" width="854" />
  <div class="caption">
    <p>Dev-board with RFM95 and 915 MHz antenna</i>
  </div>
</div>

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/small_populated_back.jpg" width="854" />
  <div class="caption">
    <p>WeMos D1 on top of ESP8266</i>
  </div>
</div>

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/small_through.jpg" width="854" />
  <div class="caption">
    <p>The WeMos and dev board attached</i>
  </div>
</div>

Behind Fitz in the video you can see nanomonkey and <i>anonymous</i> busy soldering all of these boards.

The large boards is the first iteration of the full circuit with everything but the semi-directional wifi antenna integrated. 

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/fits_soldering_1.jpg" width="854" />
  <div class="caption">
    <p>Fitz soldering the new full-circuit boards</i>
  </div>
</div>

As Fitz points out it includes a solar Li-Ion MPPT charge circuit and a socket for a Li-Ion 18650 cell. The board is sized to fit a ~4 W solar panel on one side, with four screw holes for mounting the outdoor plastic case over the electronics on the opposite side.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/large_populated.jpg" width="854" />
  <div class="caption">
    <p>Fitz soldering the new full-circuit boards</i>
  </div>
</div>

The next few weeks will revolve around debugging and testing to ensure that we iron out as many glitches as possible in the next version of the large fully-integrated board.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/large_unpopulated_front.jpg" width="854" />
  <div class="caption">
    <p>Front of the large full-circuit board</i>
  </div>
</div>

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/large_unpopulated_back.jpg" width="854" />
  <div class="caption">
    <p>Back of the large full-circuit board</i>
  </div>
</div>


We've used [seeed studio's](https://www.seeedstudio.com/) Fusion PCB and PCBA service, with the cost for the small boards coming in at ~$5 per board for 50 units with components and shipping.

<div class="captioned">
  <img class="blog" src="/assets/images/april_update/circuit_layout_fitz.jpg" width="854" />
  <div class="caption">
    <p>Comparing the physical product to the virtual KiCad design</i>
  </div>
</div>

### Video download links

WebM VP9:

* [1080p](//disaster.radio/videos/fitz_april_update_1080p.webm)
* [720p](//disaster.radio/videos/fitz_april_update_720p.webm) 
* [480p](//disaster.radio/videos/fitz_april_update_480p.webm) 

MP4 H.264:

* [1080p](//disaster.radio/videos/fitz_april_update_1080p.mp4)
* [720p](//disaster.radio/videos/fitz_april_update_720p.mp4)
* [480p](//disaster.radio/videos/fitz_april_update_480p.mp4)


<script>
  // disable google analytics for video.js
  window.HELP_IMPROVE_VIDEOJS = false;
</script>
<script src="https://vjs.zencdn.net/6.6.3/video.js"></script>
<script src="/assets/javascript/videojs-resolution-switcher.js"></script>
<script>

  videojs('video').videoJsResolutionSwitcher({
    default: '480p',
    dynamicLabel: true
  });

  videojs('may_15_video').videoJsResolutionSwitcher({
    default: '480p',
    dynamicLabel: true
  });

</script>
