var webgl={
  id: 1,
  title: "WebGl 3D room",
  img:
    "assets/webgl.png",
  link: "https://github.com/OKH6/WebGL-3D-Room",
  tags: ["WebGL","JS","Shaders"],
  //description: "sadsadsadasdads"
  description: "A 3D environment simulating a room created using WebGl with some basic controls. WebGl is a web based API based on OpenGL"


}

var OpenMP=    {
  id: 2,
  title: "OpenMP optimization",
  img:
    "assets/omp.png",
    link: "https://github.com/OKH6/Parallel-computing",
    tags: ["C++","OpenMP","ODEs","Multithreding"],
  description: "A C++ simulation of particles moving in space. The main targets of this project is to deal with numerical impressisions and to add OpenMP vectorisation and multithreading support."


}



var Atari= {
  id: 3,
  title: "Atari Gravitar Agent",
  img:
    "https://miro.medium.com/max/4918/1*Y0TDuXNyywjqqr5l5GkMQQ.png",
  link: "https://github.com/OKH6/Atari-Gravitar-Agent-PDQN",
  tags: ["Pytorch","Rainforcement learning","PDQN","Jupyter notebook"],
  description: "A reinforcement learning agent using prioritized DQN and Open AI Gym for the Atari game gravitar implemented in Pytorch."


}

var CovidFighter=    {
  id: 4,
  title: "MaskON",
  img:
    "assets/maskon.png",
  link: "https://github.com/OKH6/Unity-Covid-Fighter-Game",
  tags: ["C#","Unity","Blender","Animation"],
  description: "A COVID fighter game built using Unity and Blender. Made use of Unity AI for NPCs movements."


}



var LatexComp=    {
  id: 5,
  title: "Latex file compressor",
  img:
    "assets/compress.jpg",
  link: "https://github.com/OKH6/Text-compression-ppm",
  tags: ["PPM","Arithmatic Coding","Python"],
  //description: "A C++ simulation of particles moving in space. The main targets of this project is to deal with numerical impressisions and to add OpenMP vectorisation and multithreading support."
  description: "An implementation of the ppm compression algorithm using Arithmatic encoding in python to compress and decompress text files"
}

var Board=    {
  id: 6,
  title: "Bulletin Board",
  img:
    "assets/bulletin.jpg",
  link: "https://github.com/OKH6/WebGl_3DRoom",
  tags: ["Python","TCP"],
  description: "A TCP client-server application implemited using pyro4 in python. Allows client to access bullitin boards and post messages. All requests are logged"

}


var ChangingLives=    {
  id: 7,
  title: "Changing lives",
  img:
    "assets/changing lives.png",
  link: "https://github.com/OKH6/ChangingLives",
  tags: ["JS","CSS","Node.JS","BootStrap"],
  description: "A responsive and flexible website and API for sharing and editing emloyment support docunments."
}

var ObjrctDet=    {
  id: 8,
  title: "Mobile object detection",
  img:
    "assets/obj.jpg",
  link: "https://github.com/OKH6/ObjectDetection",
  tags: ["Tenserflow Light","C++","Android"],


  }


  var JustHungry=    {
    id: 9,
    title: "Just Hungry",
    img:
      "assets/distributed.jpg",
    link: "https://github.com/OKH6/Just-Hungry-Distributed-Systems",
    tags: ["Python","Distributed systems","API"],
    description: "A python program that simulates a food ordering service using a fault tolerant distributed system based on passive replication."

  }

  var LogicParser=    {
    id: 10,
    title: "First order Logic parser",
    img:
      "assets/comp.jpg",
    link: "https://github.com/OKH6/First-Order-Logic-parser",
    tags: ["Python","Math","Logic","Compiler Design"],
    description: "A program that takes as an input an FOL formula detects any logical errors and produces a parse tree of the formula following a top-down parsing approach"

  }


  var Conway=    {
    id: 11,
    title: "Conway's Game Of Life",
    img:
      "assets/gol.jpg",
    link: "https://github.com/OKH6/C-game-of-life",
    tags: ["C","Game","Math"],
    description: "A Conway's Game of Life implementation in C. Made use of C structures, header files and makefiles"


  }



  var PersonalWeb=    {
    id: 12,
    title: "Personal Website",
    img:
      "assets/pweb.png",
    link: "https://github.com/OKH6/My-website",
    tags: ["React","JS","SCSS"],
    description: "A portofolio website to present some of the projects I made over the years"

  }



  var BluetoothMes=    {
    id: 13,
    title: "Bluetooth messaging app",
    img:
      "assets/Blue.jpg",
    //link: "https://github.com/OKH6/WebGl_3DRoom",
    tags: ["sdsd","dsf"],

  }
export const featuredPortfolio = [
    webgl,
    JustHungry,
    OpenMP,
    LogicParser,
    LatexComp,
    Conway,




    //BluetoothMes,
  ];
  
  export const webPortfolio = [
    JustHungry,
    LogicParser,
    Conway,
    PersonalWeb,
    webgl,
    OpenMP,
    Atari,
    CovidFighter,
    LatexComp,
    Board,
    ChangingLives,


  ];
  
  export const mobilePortfolio = [
    ObjrctDet,

    BluetoothMes,
  

  ];
  

  
