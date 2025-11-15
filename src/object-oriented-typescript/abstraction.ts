//abstract real implementation
//give a idea

// oop - abstraction

// idea
// implemenation pore krbo

/*

   1. interface
   2. abstract class
*/

// abstract class theke instance toiri kora jaay na. follow kora jaay

// idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// implementation
// class Musicplayer implements MediaPlayer {
//   play() {
//     console.log("Playing music....");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const riyaPlayer = new Musicplayer(); // instance
// riyaPlayer.play();

//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class riyaPlayer extends MediaPlayer {
  play() {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const riyaPlayer1 = new riyaPlayer();
riyaPlayer1.play();