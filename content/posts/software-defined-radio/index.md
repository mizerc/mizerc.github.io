---
date: '2025-05-21T01:24:51-07:00'
draft: false
title: 'Software Defined Radio'
tags: ['eletronics', 'iot']
---

For just a few dollars, you can get a small USB device that lets you tune into a wide range of radio frequencies, do demodulation of several protocols, donwload images from weather satellites, etc. 
Something that, decades ago, would have cost hundreds of dollars and required bulky racks of specialized hardware.
This is possible with Software Defined Radios (SDR) receivers and a few open source softwares.


## SDR Receivers

### The RTL-SDR v3

I got the [RTL-SDR V3](https://www.rtl-sdr.com/rtl-sdr-blog-v-3-dongles-user-guide/).

- R828D or R820T tuner chip
- triplexed input filter

### The RTL-SDR v4

The new model is less prone to being saturated by strong noise.

## Weather Satellites

Weather Satellites like NOAA transmit weather images continuously. As of now, NOAA-15, NOAA-18, and NOAA-19 are the only satellites transmitting images. 
Keep in mind that the longevity of these transmissions is uncertain, and they may cease entirely in the near future. 

They transmit Automatic Picture Transmission (APT) signals in the VHF band (around 137 MHz).
The images received are grayscale; however, some software (like SatDump) can process them to add country boundaries and colors based on the location and time of capture.

| Satellite | Frequency  |
| --------- | ---------- |
| NOAA-15   | 137.62 MHz |

## Capturing Images from NOAA Satellites

### Hardware

- RTL-SDR v3
- Dipole Antenna (60 cm)
- RG174 cable + SMA connectors

### Software

- gpredict
- Stellarium
- SDR++
- SatDump

### Images

In the image below, we can see a screenshot of the `gpredict` software, which allows us to view the current position and elevation of satellites, as well as predict their next pass over your location. 
Based on my experiments, I would target a minimum elevation of 45 degrees to capture a strong signal from NOAA satelittes.

{{< figure src="images/gpredict.png#center" width="80%" caption="Figure: Screenshot of the predict software used to track NOAA satelittles." class="center">}}

Together with gpredict, you can also use Stellarium to get a 3D view of the satellite's position and manually estimate when it will pass over your location. In my opinion, they complement each other, but you can plan your next capture using either one.

{{< figure src="images/stellarium.png#center" caption="Figure: Using stellarium to check the position of the NOAA-19 satellite." class="center">}}

{{< figure src="images/sdr++.png#center" caption="Figure: Using SDR++ to capture the signal.">}}

{{< figure src="images/result.png#center" caption="Figure: First attempt capturing signal from NOAA satelittles.">}}

### Antenna Design

- ARRL Antenna handbook
- NanoVNA: Low cost vector network analyzer.

## Useful Scripts

### OGG to WAV

```
for i in *.ogg; do
  ffmpeg -acodec libvorbis -i "$i" -acodec pcm_s16le "${i%.ogg}.wav"
done
```

## Links

- [NOAA-19 live tracking](https://www.n2yo.com/?s=33591&live=1)


## Next Steps

[ ] Automatize image capture, processing and upload with raspberry pi

[ ] [Build PVC QFH Antenna to replace the dipole antenna](https://www.instructables.com/NOAA-Satellite-Signals-with-a-PVC-QFH-Antenna-and-/)

[ ] Capture images from GOES satellites

