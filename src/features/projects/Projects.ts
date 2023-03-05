import ProjectModel from "../../Models/Project";

const projects = [
  {
    name: "Homa",
    image: "/projects/homa.png",
    repoUrl: "https://github.com/Vincent-Lavallee/homa-frontend",
    description:
      "This project was a learning experience for me since it was the first time I've touched at c++. This is an home automation system that I'm currently working on. It's a work in progress, right now I have an arduino which is wired to read and show the temperature of the room it's placed in. It then sends all that info via an MQTT server where I'm retreiving it via either a website or Mobile app ",
    date: new Date("2022-06-20"),
  },
  {
    name: "L'osti de jeu",
    image: "/projects/odj.png",
    repoUrl: "https://github.com/Vincent-Lavallee/ODJ",
    description:
      "This is where it all started. This was my first real project in React and NodeJs. It was quite ambitious at the time since I was still learning react and Node and I wanted something mutliplayer which implied I'd have to implement websockets. I still learned a lot from this project and It gave me the passion to continue. ",
    date: new Date("2021-11-11"),
  },
] as ProjectModel[];

export default projects;
