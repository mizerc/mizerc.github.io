---
date: '2025-05-21T01:24:51-07:00'
draft: false
title: 'Live Earth Images from Satellites'
tags: ['eletronics', 'iot', 'sdr']
---

Right now there are a few satellites transmitting images in real time using radio waves (yes, the same eletromagnetic waves used by FM radio or WiFi internet) that you can capture with a simple setup from your home.
You just need a computer, an antenna, maybe a filter, and a device able to capture radio signals.
Sadly we can't use a FM radio (88-108 MHz), because we need a device able to capture signals at 137 MHz or higher.

## SDR Receivers

For just a few dollars, you can get a small USB device like the SDR-RTL V3 that lets you tune into a wide range of radio frequencies (500kHz - 1766 MHz).
Something that, decades ago, would have cost hundreds of dollars and required bulky racks of specialized hardware.
This is the great power of Software Defined Radios (SDR) receivers, and a few open source softwares.

With that range of frequencies, you can capture signals from weather satellites like NOAA-15 at 137.62 MHz.
The raw signal needs to be processed to get the image using open source software like SatDump.

### Specs 

#### Frequency Range

Some SDR devices can capture very low frequencies, around 6-10 meters.
Other are better at capturing higher frequencies, over 1.5 GHz which can be good for capturing signals from weather satellites like GOES.
The frequency range an SDR can capture depends on its RF front-end design, including filters, mixers, and the ADC sample rate.
Wideband SDRs may cover from kHz to several GHz, but performance (sensitivity, dynamic range) often varies across the range.
Nonlinear components (e.g., amplifiers) distort strong signals, reducing usable range.

#### Monitor Window

Some SDR devices have a wider bandwidth, allowing you to monitor a larger portion of the RF spectrum simultaneously.
The key term here is `instantaneous bandwidth` which defines how much spectrum can be digitized and processed at once.
It is directly limited by the performance of its analog-to-digital converter (ADC).
The ADC must sample the incoming analog RF signal at a rate at least twice the highest frequency component present (per Nyquist theorem).
For example, to digitize 100 MHz of spectrum, the ADC must sample at ≥200 MSPS (mega-samples per second).
Wider spectrum windows require faster ADCs and higher data throughput to the host system.

#### Filtering Out / Filtering In

To avoid strong FM broadcast interference (typically 88–108 MHz), you can use an FM band-stop filter between the antenna and the SDR.
Some filter can attenuates only the FM band while passing other frequencies with minimal loss. 
Ideal if you want to monitor below or above 88–108 MHz.
Other filters, like a `band-pass filter`, can allow only a specific frequency range to pass through.
For example you can get one that allows only 137-138 MHz for NOAA satellites.

### Devices

#### RTL-SDR V3

- R828D or R820T tuner chip.
- Triplexed input filter.
- Aluminium case with passive cooling.
- SMA female connector.
- RTL2832U chipset.
- The maximum sample rate is 3.2 MS/s (mega samples per second).

#### RTL-SDR V4

- Improved front-end filtering.

## NOAA Weather Satellites

Weather Satellites like NOAA transmit weather images continuously. 
As of now, NOAA-15, NOAA-18, and NOAA-19 are the only satellites transmitting images. 
Keep in mind that the longevity of these transmissions is uncertain, and they may cease entirely in the near future. 

They transmit Automatic Picture Transmission (APT) signals in the VHF band (around 137 MHz).
The images received are grayscale; however, some software (like SatDump) can process them to add country boundaries and colors based on the location and time of capture.

### Downlink Frequency Bands

| Satellite | Frequency  |
| --------- | ---------- |
| NOAA-15   | 137.620 MHz |
| NOAA-18   | 137.9125 MHz |
| NOAA-19   | 137.100 MHz |

### Automatic Picture Transmission

The Automatic Picture Transmission (APT) system is an analog image transmission system used by NOAA satellites.

From [Wikipedia](https://en.wikipedia.org/wiki/Automatic_picture_transmission):
- It was introduced in the 1960s and over four decades has provided image data to relatively low-cost user stations at locations in most countries of the world.
- The signal is continuously broadcast, with reception beginning at the start of the next line when the receiver is within radio range.
- The bandwidth required to receive APT transmissions is approximately 34 kHz.

### Image

Raw NOAA images often appear grey and low contrast.
Histogram equalization is a technique that can be used to improve the contrast of the image to enhance the details.

### NOAA-15

- 807 km above the Earth
- Orbital period of 101 minutes.
- It completes about 14 revolutions per day (`1440 minutes in one day / 101 minutes to do a single orbit`).
- APT transmission frequency is 137.62 MHz. 

### NOAA-18

- Also known as NOAA-N or Advanced TIROS-N.
- 854 km above the Earth.
- Orbital period of 102 minutes.
- APT downlink frequency is 137.9125 MHz (note that NOAA-18 changed frequencies with NOAA-19 on June 2009).
- The spacecraft power is provided by the single solar array which is composed of eight panels of solar cells.
- https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2005-018A

## Capturing Images from NOAA Satellites

### SDR Device

I will be using the RTL-SDR v3 to capture the signal.

### Antenna

To capture NOAA signal at 137-138 MHz, you need an antenna that is tuned to that frequency.
You can use a simple dipole antenna. 
Some users say that the QFH (Quadrifilar Helix Antenna) is best "build once, use forever" antenna for NOAA satellites, which is RHCP.

#### Horizontal V-dipole for NOAA satellites

There is a great tutorial at [rtl-sdr](https://www.rtl-sdr.com/simple-noaameteor-weather-satellite-antenna-137-mhz-v-dipole/) and at [lna4all](https://lna4all.blogspot.com/2017/02/diy-137-mhz-wx-sat-v-dipole-antenna.html) that explains how to build a dipole antenna suitable to capture signals from NOAA satellites.
In a nutshell, you want 120deg angle between the two arms of the dipole antenna.
And ~54 cm long for each arm.

To find the length of each arm, you can use the following reasoning:

```math
speed of light = 300,000,000 meters/second

speed of light (meters/second) = frequency (Hz) * wavelength (meters)
Wavelength (meters) = 300,000,000 meters/second / frequency (Hz)
Wavelength (meters) = 300 / frequency (MHz)
Wavelength (meters) = 300 / 137.62 MHz = 2.18 meters

Half-wave length = 150 / frequency (MHz)
Half-wave length = 150 / 137.62 MHz = 1.09 meters

Each arm (meters) = 1.09 meters / 2 = 0.545 meters = ~54 cm
```

The angle between the arms of a dipole is adjusted primarily to improve impedance matching with the coaxial feedline, as well as to reduce the space used by the antenna since a straight wire can be too long to fit the space available.


A straight dipole (180deg) has a feedpoint impedance of ~70 ohms.
Bending the arms downward (forming an angle <180°) lowers the impedance.
[This article from qsl](https://www.qsl.net/kk4obi/Center-fed%20V-dipoles%20Lateral.html) goes into more detail about this topic.
We can also notice from the chart that bending from 180deg to 120deg reduces the gain in dBi.

To better understand how bending the arms of a dipole antenna affects the properties of the antenna, we will need to understand the radiation pattern of the antenna or using antenna modeling software.

#### QFH Antenna

TODO

#### Cable

RG174 cable + SMA connectors.
The RG174 cable is a small-diameter (2.5 mm) and flexible coaxial cable with impedance of 50 ohms.
<!-- At high frequencies, the RG174 cable can have high losses. -->
<!-- You also need to keep it short (<5 meters) to avoid signal loss. -->

#### Antenna Design Resources

- Book: ARRL Antenna handbook.
- Tool: NanoVNA: Low cost vector network analyzer.



### Software

- gpredict
- Stellarium
- SDR++
- SatDump

#### Satellite Position Tracking

In the image below, we can see a screenshot of the `gpredict` software, which allows us to view the current `position` and `elevation` of satellites, as well as predict their next pass over your location (Next Event column). 
Based on my experiments, I would target a minimum elevation of 45 degrees to capture a strong signal from NOAA satelittes.

{{< figure src="images/gpredict.png#center" width="80%" caption="Figure: Screenshot of gpredict software used to track NOAA satelittles." class="center">}}

Together with gpredict, you can also use Stellarium to get a 3D view of the satellite's position and manually estimate when it will pass over your location.

{{< figure src="images/stellarium.png#center" caption="Figure: Using stellarium to check the position of the NOAA-19 satellite." class="center">}}

Lastly, you can also use n2yo website to track the position of several satellites in real time.
For example, you can use [this link](https://www.n2yo.com/?s=33591&live=1) to get the NOAA-19 satellite's position.

#### Capturing the Signal

Once you connect the SDR to your computer, you can start capturing the signal using the SDR++ software.

{{< figure src="images/sdr++.png#center" caption="Figure: Using SDR++ to capture the signal.">}}

#### SatDump

#### Result (First Attempt)

My first attempt was mid. 
Given the weather conditions, the signal was very noisy.

{{< figure src="images/result.png#center" caption="Figure: First attempt capturing signal from NOAA satelittles.">}}

#### Result (Second Attempt)

TODO

## Software

### OGG to WAV

```
for i in *.ogg; do
  ffmpeg -acodec libvorbis -i "$i" -acodec pcm_s16le "${i%.ogg}.wav"
done
```

### SDR++

You can select different inputs like SDR, over network, file, etc.
Select NFM.
Bandwidth 50,000.
Record Audio (instead of baseband).

#### IQ Signal

The IQ signal is raw samples from the SDR receiver that you can export to a file to be processed later.
The SDR++ can export the IQ signal to a file.
Real + Complex samples.

## GOES Satellites

GOES satellites are geostationary, unlike NOAA satellites, which orbit around the Earth.

### GOES-18

The GOES-18 is the only one I am able to capture from Seattle, WA.
Using Azimuthal coordinate system at Seattle, you can find it stationary at Azimuth +199 deg and Elevation +33 deg.
To capture GOES signal, you may need to use a [parabolic reflector antenna targeting 1.7 GHz frequency](https://www.amazon.com/gp/product/B08HGQXC7C).
Check [this great tutorial from usradioguy](https://usradioguy.com/goes-satellite-imagery-reception) on how to receive GOES signal.

## Antenna Theory

### Antenna Capacitance and Inductance

Adding coils increase inductance, while adding perpendicular wires increase capacitance.
Both lower the resonate frequency. 
The trade offs are in efficiency and radiation pattern.

Excess capacitance can detune the antenna away from the desired resonant frequency, requiring additional inductive load or tuning methods to achieve the target frequency.

Coils add resistance to the antenna, which cause some of the energy be lost as heat.

### Antenna Ressonance Frequency

The antenna has a ressonance frequency to which it will convert electromagnetic waves to voltage/current best.
It also needs to match the impedance the radio circuits expect.
Impedance is just the ratio of voltage to current.
It is like matching the right gear in the car to extract the max power from the engine.

### Antenna Beamwidth

### Impedance

Unlike resistance, the impedance will vary with frequency.

### Coax

The length of the coax cable will limit how much power, at a given frequency, you can pump through it before some kind of failure.
Power vs Signal.

### Tools 

- NanoVNA

## Next Steps

[ ] Automatize image capture, processing and upload with raspberry pi

[ ] [Build PVC QFH Antenna to replace the dipole antenna](https://www.instructables.com/NOAA-Satellite-Signals-with-a-PVC-QFH-Antenna-and-/)

[ ] Capture images from GOES satellites

[ ] Publish images to [satnog](https://network.satnogs.org/stations)