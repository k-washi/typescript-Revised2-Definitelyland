interface MusicPlayer {
  play(): void;
  pause(): void;
  stop(): void;
  rewind(seconds: number): void;
  fastForward(seconds: number): void;
  
}

class BasicMusicPlayer implements MusicPlayer { 
  fastForward(seconds: number): void { 
      console.log(`Moving forward ${seconds} seconds`); 
  } 

  pause(): void { 
      console.log("Pausing"); 
  } 

  play(): void { 
      console.log("Playing") 
  } 

  rewind(seconds: number): void { 
      console.log(`Rewinding ${seconds}`); 
  } 

  stop(): void { 
      console.log("Stopping"); 
  } 
} 

interface Person{
  fn: string,
  ln: string,
  age: number
}

var sayHelloTo = (bar: Person): void => {
  console.log(bar.fn, bar.ln, bar.age)
} 

let PersK: Person = {
  fn: "k",
  ln: "w", 
  age: 54
};

sayHelloTo(PersK);

//Exten interfaces
interface Club { 
  name: string; 
  logoLocation: string; 

  isActive(): boolean; 
} 

interface SoccerClub extends Club { 
  league: string; 
} 

