//import {Howl, Howler} from 'howler';

const audio = {
    Map: new Howl({
        src: 'lib/pokemon-demo/audio/map.wav',
        html5: true,
        volume: 0.1
    }),
    initBattle: new Howl({
        src: 'lib/pokemon-demo/audio/map.wav',
        html5: true,
        volume: 0.1
    }),
    battle: new Howl({
        src: 'lib/pokemon-demo/audio/battle.mp3',
        html5: true,
        volume: 0.1
    }),
    tackleHit: new Howl({
        src: 'lib/pokemon-demo/audio/tackleHit.wav',
        html5: true,
        volume: 0.1
    }),
    fireballHit: new Howl({
        src: 'lib/pokemon-demo/audio/fireballHit.wav',
        html5: true,
        volume: 0.1
    }),
    initFireball: new Howl({
        src: 'lib/pokemon-demo/audio/initFireball.wav',
        html5: true,
        volume: 0.1
    }),
    victory: new Howl({
        src: 'lib/pokemon-demo/audio/victory.wav',
        html5: true,
        volume: 0.1
    })
}

export {audio}