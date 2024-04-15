interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}
interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// console.log('Song:', audioPlayer.song)
// console.log('Duration:', audioPlayer.songDuration)
// console.log('Author:', audioPlayer.details.author)

const song = "New Song"; // Como tengo otra variable, quiero cambiar el nombre de la restructuracion
// De esta manera puedo ponele otro nombre
const {
  song: anotherSong,
  songDuration: duration,
  details /*: { author } */,
} = audioPlayer;
const { author } = details;

// console.log('Song:', anotherSong)
// console.log('Duration:', duration)
// console.log('Author:', author)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
console.error('Personaje 3:', dbz[3] || 'No hay personaje');
const trunk = dbz[3]  || 'No hay personaje (2)';
console.error('Personaje 3:', trunk);

const [, , trunks = 'Not found']: string[] = ["Goku", "Vegeta"];
// const trunks = dbz[3] || 'NO hay personaje'

console.warn(`Personaje 3: ${trunks}`);

export {};
