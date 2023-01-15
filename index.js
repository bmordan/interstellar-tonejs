import * as Tone from 'tone'

const upper = [
    {time: "0:0", note: "A3", duration: "0:2:0"},
    {time: "0:1", note: "E4", duration: "1:0:0"},
    {time: "1:0", note: "A3", duration: "0:2:0"},
    {time: "1:1", note: "E4", duration: "1:0:0"},
    {time: "2:0", note: "B3", duration: "0:2:0"},
    {time: "2:1", note: "E4", duration: "1:0:0"},
    {time: "3:0", note: "B3", duration: "0:2:0"},
    {time: "3:1", note: "E4", duration: "1:0:0"},
    {time: "4:0", note: "C4", duration: "0:2:0"},
    {time: "4:1", note: "E4", duration: "1:0:0"},
    {time: "5:0", note: "C4", duration: "0:2:0"},
    {time: "5:1", note: "E4", duration: "1:0:0"},
    {time: "6:0", note: "D4", duration: "0:2:0"},
    {time: "6:1", note: "E4", duration: "1:0:0"},
    {time: "7:0", note: "D4", duration: "0:2:0"},
    {time: "7:1", note: "E4", duration: "0:2:0"},
    {time: "7:2", note: "B3", duration: "0:2:0"},
    {time: "7:3", note: "A3", duration: "0:2:0"},
    {time: "7:4", note: "E4", duration: "1:0:0"},
    {time: "8:0", note: "A3", duration: "0:2:0"},
]

const lower = [
    {time: "0:0", note: "F1", duration: "2:0:0"},
    {time: "2:0", note: "G1", duration: "2:0:0"},
    {time: "4:0", note: "A1", duration: "2:0:0"},
    {time: "6:0", note: "G1", duration: "2:0:0"},
    {time: "8:0", note: "F1", duration: "0:1:0"},
]

document.getElementById('play').addEventListener('click', () => {
    const synth = new Tone.PolySynth(Tone.Synth, {
        oscillator: {
            type: "sine"
        },
        envelope: {
            attack: 0.01,
            decay: 0.1,
            sustain: 0.9,
            release: 0.5,
            attackCurve: "exponential"
        }
    }).toDestination()

    const upperPart = new Tone.Part((time, value) => {
        synth.triggerAttackRelease(value.note, value.duration, time)
    }, upper).start(0)

    const lowerPart = new Tone.Part((time, value) => {
        synth.triggerAttackRelease(value.note, value.duration, time)
    }, lower).start(0)

    upperPart.loop = false
    lowerPart.loop = false

    Tone.Transport.bpm.value = 144
    Tone.Transport.start();
})

document.getElementById('stop').addEventListener('click', () => {
    Tone.Transport.stop()
})
