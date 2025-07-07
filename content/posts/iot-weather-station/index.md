---
date: "2025-06-16"
draft: false
title: "Weather Station"
tag: ["iot", "weather"]
---

For a long time, I have wanted to build a custom weather station to display specific information on a screen. 
As a first step toward that goal, I built a basic prototype using the `HiLetgo ESP-32D` development board, the `BME280` sensor, and the `4-inch TFT display`.

The expected product specs are:

- Be able to display temperature in Celsius and Fahrenheit, humidity in %, and pressure in hPa.
- Be able to navigate thru pages using a physical button.
- Display the current page.
- Each page should organize the data in a different way to test different layouts.
- Be able to keep track of the 100 last samples for a specific time period (second, minute, hour, 3-hour, 8-hour, 24-hour).
- Keep min and max value of each metric (temperature, humidity, pressure) for each time period.
- Render a simple chart of the last N samples for a specific time period.
- Display the amout of time since the last reset.

## Hardware

### Microcontroller

I will be using the `HiLetgo ESP-32D Development Board`.
It is a development board that comes with a `ESP32-D0WD-V3` microcontroller, serial communication over USB, a voltage regulator, 38 pins (which supports GPIO, I2C, SPI, etc.) and a few other components.

### Sensor

The BME280 is a sensor that measures temperature, humidity, and pressure.
It uses I2C to communicate with the microcontroller.
The sensor itself is made by [Bosch](https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/).
But online you can find different modules for the sensor that it easier to integrate with the microcontroller offering PINs and I2C interface.

### Display

To be able to display the data, I got the 4" TFT Display from Amazon.
It's a 480x320 pixel display.
It uses SPI to communicate with the microcontroller.

## Project Structure

### Diagram

TBD

### Code

We need a few libraries to be able to use the `BME280` sensor and the `TFT Display`.
I am using the `Arduino IDE` to download the libraries and to program the microcontroller.
The libraries are available in the `Arduino Library Manager`.

## Other Features

### Power Supply

I tried using 3 AA batteries in series to power the board (1.5V x 3 = 4.5V total) which is suitable for the voltage regulator of the board.
You can connect the + and - of the battery to the Vin and GND pins of the board.
The Vin pin goes to the voltage regulator of the board.
It is a linear regulator that can handle voltages up to 10V and output 3.3V.
The 5V USB port also goes to the same voltage regulator.

However the capacity of the batteries is not enough to power the board for more than 1 day.
The board is not in sleep mode and it is consuming around 100mA to power the board, sensor and display.
That would require a capacity of around 2400mAh (100mA x 24h = 2.4Ah) from the batteries.
One alternative is to use a 2S lithium battery that can provide more capacity, but I didn't try it yet.

So I decide to use a USB wall adapter to power the board and not have to worry about the batteries.

## Photos

![Weather Station](./assets/photo1.png)

Here we can see the page 2 where we have gauges for temperature in Celsius, temperature in Fahrenheit, humidity, and pressure.
Below we have the chart of the last N samples and the time period of each sample (1 hour).
The number on the right separated by the slack is the number of samples so far.
Below we have the min/max values of each metric for the selected time period.
Last, we have the total amount of time the board has been running since the last reset.

![Weather Station](./assets/photo2.png)
![Weather Station](./assets/photo3.png)

## Next Steps

- Store samples in sdcard.
- Enable touch screen to navigate thru pages instead of using a physical button.
- Explore ESP32 sleep mode to reduce power consumption.
- Build a external module to keep outside the house, communicate with the main board thru 333 Hz RF module.