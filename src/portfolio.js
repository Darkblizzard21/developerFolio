/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pirmin Pfeifer",
  title: "Hello There",
  subTitle: emoji(
    "I'm Pirmin Pfeifer, an aspiring graphics and games engineer. Currently I am studying a computer science master in Würzburg, Germany. My passions are computer graphics, game technology and algorithms."
  ),
  resumeLink: require("./assets/CV.pdf"), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Darkblizzard21",
  gmail: "hi@pirminpfeifer.eu",
  // twitter: "https://twitter.com/PirminPfeifer",
  itch: "https://darkblizzard.itch.io/",
  linkedin: "https://www.linkedin.com/in/pirmin-pfeifer/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const projectPages = [
  {
    routes: ["/rayvis", "/ray-vis"],
    header: "RayVis",
    image: require("./assets/projects/rayvis/example.webp"),
    organization: "University Würzburg & AMD",
    timeFrame: "Apr. 2023 - Jul. 2023",
    teamSize: 1,
    text: [
      {
        text:
          "RayVis is a tool for visualizing large rays data sets in a 3D scene. " +
          "It RayVis provides three different visualizations for answering questions about the density and location of rays. " +
          "The first visualization draws the rays as 3D meshes into the scene. " +
          "The second one visualizes the ray density and direction in a vector field. " +
          "And the last visualization the ray density as volume."
      },
      {
        text:
          "RayVis uses its own data format for saving and loading. " +
          "Each file contains one or multiple ray data sets and scene geometry. " +
          "The original ray data is provided by Advanced Micro Devices (AMD) in an internal format and is converted into the RayVis data format. " +
          "Direct3D Raytracing is used for rendering the scene geometry and the mesh components of the visualizations. " +
          "For the volume visualization a separate compute-shader is used. " +
          "RayVis can render the scene model in six different shading modes or exclude the scene geometry completely rom rendering (see Image on the right).",
        image: require("./assets/projects/rayvis/renderer.webp"),
        right: false,
        ratio: 0.4
      },
      {
        text:
          "The Ray Mesh visualization is a naive approach for the visualizations of many rays. " +
          "For each ray, a line mesh is generated by scaling and rotating two orthogonal planes to span from the ray-start- to the ray-end-point. " +
          "These meshes are given an instance color, chosen by the user, and are rendered in the smooth instance color mode. " +
          "For some effects, like hitting primary rays or missing ambient occlusion rays, the visualization can get very cluttered, reducing its readability."
      },
      {
        videos: ["Ww_R_vk54IM", "0VeydvRcG4s", "BndVb6gw0QE", "CthUzwKdhDg"]
      },
      {
        text:
          "The vector field visualizes the volume data through arrows drawn in the scene. " +
          "The arrow’s direction represents the average ray direction in its area and the ray density through color and scale. " +
          "This is the only visualization of RayVis that preserves the directional data of the original ray data set. For the calculation, a sample size, which needs to divide the chunk size without a remainder, is selected. " +
          "Then the chunks of the volume data structure are divided into small cubes of voxel, with side lengths equal to the sample size. The ray count and ray direction of all voxels in each cube is accumulated and averaged. " +
          "For each sampling cube, an arrow is instantiated and rotated accordingly, so it points in the average ray direction. " +
          "The color of the arrow is determined by the ray count and represented by the inferno color pattern. " +
          "Additionally, the arrows can either be scaled by the ray count or by the inverse of the ray count."
      },
      {
        videos: ["KWpP786g3l4", "hlionD1JEss", "iShKyUnSewk", "Eq-Ou2lBQUw"]
      },
      {
        text:
          "The density volume visualizes the ray count of the volume data structure with raymarching. " +
          "Data has to be transformed and uploaded to the GPU, before rendering the volume. " +
          "First, the highest ray count in the data has to be found. " +
          "Then all ray counts are converted into a floating point value between zero and one, where one is representing the highest value in the volume. " +
          "Also, the chunks are expanded by one voxel in each direction. " +
          "These new voxels are filed with the downscaled average ray count of their neighbors in the original data. " +
          "This is done to smooth out the edges between chunks in the volume renderer. " +
          "Finally, the transformed chunks are uploaded to the GPU as three-dimensional textures in a Direct3D UNORM Format. " +
          "The chunk’s minimum and maximum bounds are also uploaded to the GPU. " +
          "In the compute shader used to render the volume visualization, each ray is checked against the bounding box of the chunks. " +
          "The maximum ray length, in this step, is reduced based on the hit distance from the scene rendering. " +
          "Then for all chunks the TraceVolume function is called." +
          " This function first checks, if the ray hits the given chunk bounds. " +
          "If it does, the data in the 3D chunk texture is accumulated using, an implementation of the raymarching algorithm. " +
          "The step size of the algorithm can be specified by the user to fractions of the cellSize. " +
          "After all the chunks are checked with the function, the results are accumulated and clamped. " +
          "Finally, the result is mapped to a color, using the inferno color map, which is layered over the scene render. " +
          "The final render can have small artifacts at the edges of adjacent chunks. " +
          "This is caused by calculating the raymarching algorithm independently for each chunk."
      },
      {
        videos: ["aWhKv63hBr4", "kUhb31Plk6E", "hy-7WExorBQ", "Egqa9u6Nf9Q "]
      }
    ],
    additionalLinks: [
      {
        name: "Thesis",
        url: "https://github.com/Darkblizzard21/RayVis/blob/main/THESIS.pdf"
      },
      {
        name: "Github",
        url: "https://github.com/Darkblizzard21/RayVis"
      },
      {
        name: "Playlist",
        url: "https://www.youtube.com/playlist?list=PL5H9QjGYhXVxFS71cEErQPfABCl4Z420_"
      }
    ]
  },
  {
    routes: ["/fractal-engine", "/gl3", "/glIII"],
    image: require("./assets/projects/fractalengine/fractalEngine.webp"),
    organization: "University Würzburg",
    timeFrame: "Sep. 2021 - Jul. 2023",
    teamSize: 1,
    text: [
      {
        text:
          "The fractal engine is a hardware-oriented, specialised Framework for the Nintendo Switch ™ console and was created for the GameLab III course of the games engineering bachelor in Würzburg. " +
          "The project contains the framework, build tools for the Nintendo Switch ™, a demo scene project and a minesweeper implementation. " +
          "It was developed alone, only using the native Nintendo Switch ™ SDK. "
      },
      {
        text:
          "Blender and GIMP were used to model and animate the promotional material and the sprites used in the minesweeper implementation. " +
          "Visual studio was used in combination with Resharper for coding and building. " +
          "The engine provides rendering abstractions, a scene graph, asset loading and other abstractions for SDK functions.",
        image: require("./assets/projects/fractalengine/fractalEngine-tools.webp"),
        right: false,
        ratio: 0.6
      },
      {
        text: "",
        image: require("./assets/projects/fractalengine/fractalEngine-gameplay.webp"),
        right: true,
        ratio: 0.7
      },
      {
        text: "",
        video: "73KvNSI9d8c",
        right: true,
        ratio: 0.7
      }
    ]
  }
];

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "FOCUS ON GRAPHICS ENGINEERING AND GAME ENGINE SYSTEMS BUT ALSO A BIT OF ALL OTHER DISCIPLINES OF GAME DEVELOPMENT",
  skills: [
    emoji("⚡ Develop new Engine Features, Extensions and Development Tools"),
    emoji("✨ D3D12 GPU Workgraphs"),
    emoji("⚡ Optimisation and Algorithm development"),
    emoji("✨ Scripting of Shaders and Post-Processing-Effects")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  projects: [
    {
      description: "Workgraph Demo @GDC2024",
        link: "https://gpuopen.com/learn/gdc-2024-workgraphs-drawcalls/",
      skills: ["C++", "Direct X 12"]
    },
    {
      description: "Ray Vis",
      link: "./rayvis",
      skills: ["C++", "Direct X 12"]
    },
    {
      description: "GameLab III: Fractal Engine",
      link: "./fractal-engine",
      skills: [
        "C++",
        "ReSharper",
        "Nintendo Switch SDK",
        "OpenGl"
      ]
    },
    {
      description: "GameLab II: Balancing Hub",
      link: "https://www.youtube.com/watch?v=7q_E0Ke6AJ4",
      skills: ["C++", "Unreal Engine 4", "Rider"]
    },
    {
      description: "GameLab I: Empty Spaces",
      link: "https://darkblizzard.itch.io/emptyspaces",
      skills: ["C++", "Unreal Engine 4",]
    },
    {
      description: "BrightnessBased TextureLayering",
      link: "https://darkblizzard.itch.io/texturelayering",
      skills: ["Unreal Engine 4"]
    },
    {
      description: "dProB @ BII Gmbh",
      link: "https://www.bii-gmbh.com/",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "Chicken Wings",
      link: "https://qu0d0.itch.io/chicken-wings",
      skills: ["C++", "OpenGl"]
    },
    {
      description: "Dada Longlegs",
      link: "https://qu0d0.itch.io/dada-longlegs",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "TD Cratos",
      link: "https://darkblizzard.itch.io/td-project",
      skills: ["C#", "Unity"]
    },
    {
      description: "PacMan AI @ Interactive AI Lecture",
      skills: ["C#", "Unity", "Rider"]
    },
    {
      description: "Advent of Code 2021",
      link: "https://github.com/Darkblizzard21/AoC2021",
      skills: ["Java", "IntelliJ IDEA"]
    },
    {
      description: "Enigma Example Project",
      link: "https://github.com/ShaikaJar/Enigma",
      skills: ["Java", "IntelliJ IDEA"]
    },
    {
      description: "Boid Simulation on this Website",
      skills: ["JavaScript", "WebStorm", "WebGL"]
    },
    {
      description: "WebGL ProtoType @ Interactive Computer Graphics Lecture",
      skills: ["TypeScript", "WebStorm", "WebGL"]
    },
    {
      description: "My own Computer Graphics Lecture",
      skills: ["C++", "OpenGl"]
    },
    {
      description: "SquaredCode Formatter",
      link: "https://github.com/Darkblizzard21/SquaredCode",
      skills: ["JavaScript", "WebStorm"]
    },
    {
      description: "DynamicChannels Discord Bot Module",
      link: "https://github.com/Darkblizzard21/DynamicChannelsModule",
      skills: ["C#", "Rider", "Discord API"]
    },
    {
      description: "Discord Management Bot",
      skills: ["JavaScript", "WebStorm", "Discord API"]
    },
    {
      description: "BlenderRenderCollection",
      link: "https://github.com/Darkblizzard21/BlenderRenderCollection",
      skills: ["Blender"]
    },
    {
      description: "3D Models and Promotional Art for my Projects",
      skills: ["Blender"]
    },
    {
      description: "Almost all of my projects",
      skills: ["Git"]
    },
    {
      description: "Most C++ and Unity projects",
      skills: ["Visual Studio"]
    }
  ],

  softwareSkills: [
    {
      skillName: "C++",
      iconData: {
        link: "https://isocpp.org/",
        icon: require("./assets/images/ISO_C++_Logo.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/cpp.webp"),
        tooltip: {
          name: "C++",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "C#",
      iconData: {
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/csharp.webp"),
        icon: require("./assets/images/csharp.webp"),
        tooltip: {
          name: "C#",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 4
        }
      }
    },
    /*{
      skillName: "TypeScript",
      iconData: {
        link: "https://www.typescriptlang.org/",
        icon: require("./assets/images/TypeScript.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ts.webp"),
        tooltip: {
          name: "TypeScript",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 3
        }
      }
    },{
      skillName: "JavaScript",
      iconData: {
        link: "https://www.javascript.com/",
        icon: require("./assets/images/js.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/jsComposit.webp"),
        tooltip: {
          name: "JavaScript",
          type: "PROGRAMMING LANGUAGE",
          proficiency: 3
        }
      }
    },*/
    {
      skillName: "Unreal 4",
      iconData: {
        link: "https://www.unrealengine.com/en-US/",
        icon: require("./assets/images/ue4Desat.webp"),
        saturatedIcon: require("./assets/images/ue4.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ue4.webp"),
        tooltip: {
          name: "Unreal Engine 4",
          type: "GAME ENGINE",
          proficiency: 5
        }
      }
    },
    {
      skillName: "Unity",
      iconData: {
        link: "https://unity.com/",
        icon: require("./assets/images/unityDesat.webp"),
        saturatedIcon: require("./assets/images/unitySat.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/unityComposit.webp"),
        tooltip: {
          name: "Unity",
          type: "GAME ENGINE",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Blender",
      iconData: {
        link: "https://www.blender.org/",
        icon: require("./assets/images/blender_icon_64x64.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/blenderComposit.webp"),
        tooltip: {
          name: "Blender",
          type: "3D MODELING TOOL",
          proficiency: 5
        }
      }
    },
    {
      skillName: "Git",
      iconData: {
        link: "https://git-scm.com",
        icon: require("./assets/images/Git.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/gitComposit.webp"),
        tooltip: {
          name: "Git",
          type: "VERSION CONTROL",
          proficiency: 4
        }
      }
    },
    {
      skillName: "Visual Studio",
      iconData: {
        name: "Visual Studio",
        link: "https://visualstudio.microsoft.com/",
        icon: require("./assets/images/vs19.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/vsComposit.webp"),
        tooltip: {
          name: "Visual Studio",
          type: "IDE",
          proficiency: 4
        }
      }
    },
    /*{
      skillName: "Switch SDK",
      iconData: {
        link: "https://developer.nintendo.com/",
        icon: require("./assets/images/ndiDesat.webp"),
        saturatedIcon: require("./assets/images/ndi.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ndiComposit.webp"),
        tooltip: {
          name: "Nintendo Switch SDK",
          type: "API/SDK",
          proficiency: 3
        }
      }
    },*/
    {
      skillName: "Direct X 12",
      iconData: {
        link: "https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-reference",
        icon: require("./assets/images/d3d12_desat.webp"),
        saturatedIcon: require("./assets/images/d3d12.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/d3d12-2.webp"),
        tooltip: {
          name: "Direct X 12",
          type: "GRAPHICS API",
          proficiency: 4
        }
      }
    },
    {
      skillName: "OpenGL",
      iconData: {
        link: "https://www.opengl.org//",
        icon: require("./assets/images/openglDesat.webp"),
        saturatedIcon: require("./assets/images/opengl.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.webp"),
        tooltip: {
          name: "OpenGL",
          type: "GRAPHICS API",
          proficiency: 4
        }
      }
    },
    {
      skillName: "WebGL",
      iconData: {
        link: "https://www.khronos.org/webgl/",
        icon: require("./assets/images/WebGL_LogoDeSat.webp"),
        saturatedIcon: require("./assets/images/WebGL_Logo.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/glComposit.webp"),
        tooltip: {
          name: "WebGL",
          type: "GRAPHICS API",
          proficiency: 4
        }
      }
    },
    /*{
      skillName: "Discord API",
      iconData: {
        link: "https://discord.com/developers/docs/intro",
        icon: require("./assets/images/Discord-Logo-Color.webp"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/discordComposit.webp"),
        tooltip: {
          name: "Discord API",
          type: "API (JS, PYTHON, C#)",
          proficiency: 5
        }
      }
    }
  ],*/
  /*
  unusedSoftwareSkills:[ {
    skillName: "Java",
    iconData: {
      link: "https://www.java.com/en/",
      icon: require("./assets/images/java.png"),
      boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/javaComposit.png"),
      tooltip: {
        name: "Java",
        type: "PROGRAMMING LANGUAGE",
        proficiency: 4
        }
      }
    },
    {
      skillName: "Rider",
      iconData: {
        link: "https://www.jetbrains.com/rider/",
        icon: require("./assets/images/rider.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/riderComposit.png"),
        tooltip: {
          name: "Rider",
          type: "IDE",
          proficiency: 5
        }
      }
    },
    {
      skillName: "ReSharper",
      iconData: {
        link: "https://www.jetbrains.com/resharper-cpp/",
        icon: require("./assets/images/resharper.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/resharperComposit.png"),
        tooltip: {
          name: "ReSharper",
          type: "VS EXTENSION",
          proficiency: 2
        }
      }
    },
    {
      skillName: "IntelliJ IDEA",
      iconData: {
        link: "https://www.jetbrains.com/idea/",
        icon: require("./assets/images/intellij.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/ideaComposit.png"),
        tooltip: {
          name: "IntelliJ IDEA",
          type: "IDE",
          relatedProjects: [
            {
              description: "Enigma Example Project",
              link: "https://github.com/ShaikaJar/Enigma"
            }
          ],
          proficiency: 4
        }
      }
    },
    {
      skillName: "WebStorm",
      iconData: {
        link: "https://www.jetbrains.com/webstorm/",
        icon: require("./assets/images/webstorm.png"),
        boidForceTexture: require("./submodules/WebGL-Boids/forceFieldTextureCreator/mediaOut/webstormComposit.png"),
        tooltip: {
          name: "WebStorm",
          type: "IDE",
          proficiency: 3
        }
      }
    },*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const presentNum = 1999907;
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Julius-Maximilians University",
      logo: require("./assets/images/uniwue.webp"),
      items: [
        {
          subHeader: "Computer Science Master",
          start: 202310,
          end: presentNum,
          duration: "October 2023 - Current",
          desc: "CS master with a personal focus on:",
          descBullets: [
            "Algorithm design",
            "Computer graphics",
            "Game engine technologies"
          ]
        },
        {
          subHeader: "Games Engineering Bachelor",
          start: 201909,
          end: 202309,
          duration: "September 2019 - September 2023",
          desc: "Received highest grade for all Games Engineering projects:",
          descBullets: [
            "GameLab I: EmptySpaces",
            "GameLab II: Balancing Hub",
            "GameLab III: Fractal Engine & Minesweeper",
            "Movie Making with Game Engines: BrightnessBasedTextureLayering",
            "Seminar Current Trends in Games Engineering: Automated Animation of Creatures"
          ]
        }
      ]
    },
    {
      schoolName: "Friedrich-List-Gymnasium Gemünden",
      logo: require("./assets/images/flg.webp"),
      items: [
        {
          subHeader: "Abitur",
          start: 201109,
          end: 201907,
          duration: "September 2011 - July 2019"
        }
      ]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Working Student",
      company: "Advanced Micro Devices, Inc.",
      companylogo: require("./assets/images/AMD_E_Wh_RGB.webp"),
      date: "April 2023 – Current",
      desc: "Working on GPU Workgraphs Demos and Samples.",
      descBullets: [],
      url: "https://www.amd.com/"
    },
    {
      role: "Computer Graphics Lecturer",
      company: "DHBW Angewandte Informatik Mosbach und Bad Mergentheim",
      companylogo: require("./assets/images/DHBW-logo-square.webp"),
      date: "April 2024 – Current",
      desc: "Full Lecture prepared and held by me.",
      descBullets: [],
      url: "https://www.amd.com/"
    },
    {
      role: "Software Engineering Intern",
      company: "Advanced Micro Devices, Inc.",
      companylogo: require("./assets/images/AMD_E_Wh_RGB.webp"),
      date: "October 2022 – March 2023",
      desc: "Developed and maintained research software for raytracing. I also worked on a web platform and some shell automations",
      descBullets: [],
      url: "https://www.amd.com/"
    },
    {
      role: "Software Engineer",
      company: "Building Information Innovator GmbH",
      companylogo: require("./assets/images/bii2.webp"),
      date: "March 2021 – September 2021",
      desc: "Developed professional digital tool for modeling, simulation and visualization of construction processes with Unity and a functional C# library.",
      descBullets: [
        "Build graph data structures for the management of cargo flows",
        "Build development & debug tools"
      ],
      url: "https://www.bii-gmbh.com/"
    },
    {
      role: "Tutor for Game Lab I",
      company: "Julius-Maximilians University",
      companylogo: require("./assets/images/uniwue.webp"),
      date: "October 2020 – September 2022",
      desc: "Supported students at overcoming problems they faced during game development process.",
      descBullets: [
        "Explained basic and intermediate topics the students brought up",
        "Created introductory tutorials for Unreal Engine 4 & Unity",
        "Tested and reviewed the students games"
      ],
      url: "https://hci.uni-wuerzburg.de/"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  projects: [
    {
      video: require("./assets/videos/fractalWebSnippet.webm"),
      image: require("./assets/images/fractalEngineLogo.webp"),
      projectName: "",
      projectDesc:
        "Hardware-oriented, specialised Framework for the Nintendo Switch ™ console with a focus on compile-time-safe loading, use of hardware features and various graphics options. Minesweeper was implemented as proof of concept game.",
      footerLink: [
        {
          name: "Project Page",
          url: "./fractal-engine"
        },
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=73KvNSI9d8c"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/HauntedForest.webm"),
      image: require("./assets/images/mmwge.webp"),
      projectName: "BrightnessBasedTextureLayering",
      projectDesc:
        "This PostProcess effect uses the Unreal Engine 4 exposure system to create an artistic image from textures. Created in collaboration with four design students.",
      footerLink: [
        {
          name: "Project Movie",
          url: "https://motiondesign101.de/filme/texture-worlds/"
        },
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/texturelayering"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/projects/rayvis/rayvis-preview.webm"),
      image: require("./assets/images/empty.webp"),
      projectName: "RayVis",
      projectDesc: "RayVis is a Raytracing Visualization Prototype for large amounts of rays. It was created as part of my Bachelors Thesis.",
      footerLink: [
        {
          name: "Project Page",
          url: "./rayvis"
        },
        {
          name: "GitHub",
          url: "https://github.com/Darkblizzard21/rgb-website"
        }
      ]
    },
    {
      video: require("./assets/videos/EmptySpaces.webm"),
      image: require("./assets/images/emptySpaces.webp"),
      projectName: "Empty Spaces",
      projectDesc:
        "A game prototype that explores the combination of Bullet-Hell-Twin-Stick-Shooters and Metroidvania style games. The game contains multiple areas and three boss fights. ",
      footerLink: [
        {
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=7nlux89EjxY"
        },
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/emptyspaces"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// GameJams Section

const gameJams = {
  title: "Small Projects & Game Jams",
  subtitle: "MADE DURING GAME JAMS OR OTHER SMALLER TIME PERIODS",
  projects: [
    {
      video: require("./assets/videos/boids.webm"),
      image: require("./assets/images/boidLogo.webp"),
      projectName: "WebGL Boid Simulation",
      projectDesc:
        "Boid Simulation on this website. Calculated on the GPU via Transform Feedbacks.",
      footerLink: [
        {
          name: "View Code on GitHub",
          url: "https://github.com/Darkblizzard21/WebGL-Boids"
        }
      ]
    },
    {
      video: require("./assets/videos/chickenwings.webm"),
      image: require("./assets/images/chickencoin.webp"),
      projectName: "Chicken Wings",
      projectDesc:
        "Game Jam Submission made in C++ and OpenGL.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://qu0d0.itch.io/chicken-wings"
        },
        {
          name: "GitHub",
          url: "https://github.com/Darkblizzard21/MGJ-Chicken"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/dada.webm"),
      image: require("./assets/images/longLegs.webp"),
      projectName: "Dada LongLegs",
      projectDesc:
        "This game was submission the Franken Game Jam 2021. The theme was Growth.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://qu0d0.itch.io/dada-longlegs"
        },
        {
          name: "GameJam Page",
          url: "https://frankengamejam.de/de/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      video: require("./assets/videos/TDCratos.webm"),
      image: require("./assets/images/TDCratos.webp"),
      projectName: "TD Cratos",
      projectDesc:
        "This game started as a self proposed 72H game challenge and introduced me to Unity.",
      footerLink: [
        {
          name: "Download on Itch.io",
          url: "https://darkblizzard.itch.io/td-project"
        }
      ]
    },
    {
      video: require("./assets/videos/rgb.webm"),
      image: require("./assets/images/rgbWeel.webp"),
      projectName: "\n",
      projectDesc: "A silly small website.",
      footerLink: [
        {
          name: "Visit",
          url: "https://rgb.prmn.eu"
        },
        {
          name: "GitHub",
          url: "https://github.com/Darkblizzard21/rgb-website"
        }
      ]
    },
    {
      video: require("./assets/videos/balancingHub.webm"),
      image: require("./assets/images/balancingHub.webp"),
      projectName: "Balancing Hub",
      projectDesc:
        'Blanacing plugin for UE4',
        //'Balance your variables while playing with the "Balancing Hub" plugin for Unreal Engine 4.24.3. Created in collaboration with Quirin Maier.',
      footerLink: [
        /*{
          name: "Watch Trailer",
          url: "https://www.youtube.com/watch?v=7q_E0Ke6AJ4"
        },*/
        {
          name: "Download on Itch.io",
          url: "https://qu0d0.itch.io/balancing-hub"
        },
        {
          name: "View Backend on GitHub",
          url: "https://github.com/Darkblizzard21/BalancingHubBackend"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// References Section

const referencesSection = {
  references: [
    {
      name: "Prof. Dr. Sebastian von Mammen",
      jobTitle: "Professor of Games Engineering",
      organization: "Julius-Maximilians University",
      location: "Würzburg, Germany",
      website: "http://hci.uni-wuerzburg.de/people/sebastian-von-mammen/",
      email: "sebastian.von.mammen@uni-wuerzburg.de",
      image: require("./assets/images/GE-logo.webp")
    },
    {
      name: "Daniel Götz",
      jobTitle: "COO and Software Engineer",
      organization: "Building Information Innovator GmbH",
      location: "Würzburg, Germany",
      website: "https://www.bii-gmbh.com/",
      email: "goetz@bii-gmbh.com",
      image: require("./assets/images/bii2.webp")
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Scholarships"),
  subtitle: "Honors and Scholarships i received",

  achievementsCards: [
    {
      title: "Deutschlandstipendium 2022",
      subtitle:
        "Scholarship granted by the Julius-Maximilians-Universität Würzburg. Co-financed by Lotum media GmbH",
      image: require("./assets/images/logo-deutschlandstipendium.webp"),
      footerLink: [
        {
          name: "University Page",
          url: "https://www.uni-wuerzburg.de/aktuelles/einblick/single/news/gemeinsam-sind-wir-stark/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle1: "Discuss a project, offer an opportunity or just want to say hi?",
  subtitle2: "My Inbox is open for for everything.",
  number: "",
  email_address: "hi@pirminpfeifer.eu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  projectPages,
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  gameJams,
  referencesSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  presentNum
};
