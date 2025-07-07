---
date: '2024-05-22'
draft: false
tags: ['web', 'audio']
title: 'Web Audio API'
---

Modern web browsers support the Web Audio API, which allows us to create and manipulate audio streams.

## Audio Context

The `AudioContext` object is the main entry point for the Web Audio API.

## Audio Nodes and Chains

The `AudioNode` interface is the base interface for all nodes in the audio processing graph.

We can connect audio nodes together to create a chain of nodes. For example, we can start with the `OscillatorNode` to generate a sine wave, and then connect it to the `GainNode` to control the volume of the sound, and then connect it to the `DestinationNode` to play the sound to the speakers (or any other output device connected to the computer).

It kind remember me those Modular Synthesizers from the old days where you can plug in different modules together to modify the sound.

![modular synthesizer](modular-synth.png#center)

## Nodes

### Oscillator Node

The `OscillatorNode` allows us to generate a periodic waveform, such as a sine wave, square wave, or triangle wave.

### Gain Node

The `GainNode` allows us to control the volume of the audio stream. The gain property is a scalar value.

### Destination Node

The `DestinationNode` is the final node in the chain and is responsible for playing the audio stream to the speakers.

### Audio Buffer Source Node

The `AudioBufferSourceNode` allows us to create a empty Audio Buffer and populate it with audio data. We can create samples using math functinos like sin or cos to simulate the same behavior of an oscillator node.

### Microphone

You can request access to the microphone of the computer using the `navigator.mediaDevices.getUserMedia` method.
Note that you can't automatically access the microphone like inside a onLoad event.
For security and privacy reasons, it is necessary a user interaction to start the request.
On the same reasoning, you can connect the microphone to the audio chain to send the audio stream to the next node.

## Audio Processing

One great thing about the Web Audio API is that we can process the audio stream in real time. 
The old way is using the `ScriptProcessorNode` interface. 
The modern way to do this is to use the `AudioWorklet` interface.
The problem with the last one is that it runs in the main thread, so it can suffer from performance issues.
The `AudioWorklet` instead runs in a separate thread, so it avoid blocking the main thread, but on the other hand it requires a bit more of boilerplate code to set up.

If we need to send data between the main thread and the audio thread, we need to use the messaging approach.

## MIDI

The MIDI is a protocol that allows us to send and receive MIDI messages. It is a digital protocol that allows us to send and receive MIDI messages between devices. Several devices like keyboards, synthesizers, and controllers can speak MIDI.
