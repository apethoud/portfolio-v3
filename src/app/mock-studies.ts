import { Study } from './study';

export const STUDIES: Study[] = [
  {
    name: 'foresight-budgets',
    title: 'Foresight Budgets', 
    description: 'A forward-thinking and accurate personal finance app.', 
    software: ['HTML', 'CSS', 'AngularJS', 'Illustrator'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/office-teal-monochrome.png'}
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2]
      },
      {
        column: 2,
        featureOrder: [3, 4]
      },
      {
        column: 3,
        featureOrder: [5, 6]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Concept",
        content: "A personal finance app designed to be forward-thinking and accurate."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "The Story Behind It",
        content: "I was personally fed up with using poorly-designed finance management software for my everyday finances, so I recruited a team of developers to help me design a better one for a local coding competition."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: ['Concept Creator', 'Development Team Leader', 'Lead UX/UI Designer', 'Icon Designer']
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Goal",
        content: "Gain experience designing an app from scratch."
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "I'm most proud of the progress my team and I were able to make in such a short time."
      },
      {
        id: 6,
        icon: "http://via.placeholder.com/80x80",
        title: "Greatest Challenge",
        content: "Our greatest challenge was interfacing with a third-party API for importing bank transactions securely."
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "Foresight Budgets was borne out of my desire to create a better personal finance app than the ones I had used in the past. When I heard about a local coding competition called 59 Days of Code, I decided to assemble a team with the goal of building a better personal finance app.",
      strategyDetails: [
        {
          title: "The Project's Scope",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "It seemed best to start the project by writing down everything I liked and disliked about other personal finance apps. Then I took note of how many personal finance apps included those good and bad features. I had several ideas on how to improve on those negative experiences, so I wrote those down as well. This process helped me decide on the project's scope (we only had 59 days to code it all) and also decide how our app would be distinct and uniquely useful among the competitors currently on the market."
        },
        {
          title: "A Visual Concept",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "After deciding on the project scope, I began sketching mockups of what the app could look like. Those sketches turned into final concepts, and those final concepts turned into high-fidelity visual mockups that guided our design process."
        },
        {
          title: "Our Development Strategy",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "I brought all my ideas and designs to my team so we could figure out how to go about building the app. Our team consisted entirely of junior developers (myself included) who all had different aspects of web development that they were especially good at. Due to the time constraints of the project, we chose to divide up the work in a way that played to each of our strengths, while still giving us opportunities to grow our skills."
        },
        {
          title: "It Takes a Village",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "I chose to take on the roles of team leader, visual designer, and UX/UI developer. Two of my teammates joined me in building out the visual interface of the app. Two others worked mostly on integrating the behind-the-scenes functionality and securely connecting customer bank records to the app."
        },
        {
          title: "Noses to the Grindstone",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "We met weekly as a team to assess how our week's goals had gone, work through any issues, and plan for the next week. Along the way, we made necessary adjustments to the scope of the project to keep us on track and focused on the goal."
        },
        {
          title: "The Final Stretch",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "A week before our deadline, we had a working app that looked great, functioned well, and demonstrated our concept effectively. This left us time to thoroughly test the app and fix any bugs that we found. There were a few features that we were unable to integrate by the deadline, but due to our planning, all of the essential features of the app were functional."
        },
        {
          title: "Competition Day",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "For the actual competition, we designed and built a trade show booth to show off our concept and give expo attendees an opportunity to demo our app. I designed a series of marketing icons to help convey our concept and integrated those into the booth design."
        },
        {
          title: "The Outcome",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "While we did not win the competition, we were very proud of what we had built and felt that we really put our best foot forward in the app's design, implementation, and concept pitch to the judges. We'd definitely love to compete again in the future!"
        },
      ]
    }
  },
  {
    name: 'ordrslip-kiosk',
    title: 'OrdrSlip Kiosk', 
    description: 'A modern in-store kiosk used by restaurant employees to process incoming orders from their mobile app.', 
    software: ['HTML', 'CSS', 'Angular 2', 'Illustrator'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/office-teal-monochrome.png'}
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2]
      },
      {
        column: 2,
        featureOrder: [3, 4]
      },
      {
        column: 3,
        featureOrder: [5, 6]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Concept",
        content: "Create an easy-to-use interface that shows and helps process customer orders in real-time as they're placed by customers."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "The Story Behind It",
        content: "A current in-store kiosk was already in use at the time, but it was not easily scalable. Many new features needed to be integrated, which necessitated a complete re-write with a modern, scalable approach."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: ['Development Team Leader', 'Lead UX/UI Designer']
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "A New Approach",
        content: ['Improved the user experience', 'Built in a modern framework', 'Designed for easy scalability']
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "My teammate did a fantastic job building several essential components of the app. As I had never worked with her before this project, I was very impressed with her work."
      },
      {
        id: 6,
        icon: "http://via.placeholder.com/80x80",
        title: "Greatest Challenge",
        content: "Integrating two color themes for the app (which the user could toggle between) proved difficult, but we were able to implement it successfully in the end."
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "I had spent a lot of time working on and fixing bugs in the currently-implemented kiosk. When given the chance to lead the project redesign, I decided to not just build it in a more scalable way, but also in a more user-friendly way.",
      strategyDetails: [
        {
          title: "Rethinking the Design",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "My teammate and I got a pad of sticky notes and wrote out the name of each page, feature, icon, and button in the current kiosk. We identified pain points brought up by our clients and developers, and began brainstorming how we could solve those user experience problems by changing the interface."
        },
        {
          title: "A New Direction",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "After going through each page of the app and re-evaluating the placement of all their components, we came up with a visual structure that would better serve our clients."
        },
        {
          title: "A New, User-Friendly Look",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "With the improved structure in-hand, I designed a new visual style for the application. I chose to prioritize readability and intuitiveness in order to make the app easier to use. Specifically, this meant choosing a new color palette to improve readability and rethinking the look of many icons and buttons to remove ambiguity. We also chose to move buttons to where we figured our clients would look for them."
        },
        {
          title: "The Development Process",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "After we knew what the app needed to look like, we began building it from scratch with a more modern framework. My teammate and I met regularly to assess our progress and decide how to divide up our responsibilities. We worked through difficulties and made sure to keep the development process focused and on track for our deadline."
        },
        {
          title: "The Outcome",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "After several weeks, we had created a brand-new app that was in parity with its previous counterpart. From this point, we began gearing up for a second phase of the project: to integrate a whole new set of essential features to serve the expanded scope of the project."
        },
      ]
    }
  },
  {
    name: 'tpa-redesign',
    title: 'TPA Redesign', 
    description: 'A new look for a healthcare Third-Party Administrator.', 
    software: ['HTML', 'CSS', 'Angular 2'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/office-teal-monochrome.png'}
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2]
      },
      {
        column: 2,
        featureOrder: [3, 4]
      },
      {
        column: 3,
        featureOrder: [5]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Goal",
        content: "Provide a more visually-pleasing interface for the application."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: "Redesign an on-the-market application according to a provided visual specification."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "A Narrow Focus",
        content: "Being asked to implement someone else's visual design was a great experience. As a designer myself, it gave me the freedom to not think about the design decisions of the app as I built it."
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "I am proud of how much attention to detail I applied to the design so that it matched the visual specification. As a designer myself, I know how frustrating it can be to design something, and then see it built without the same level of detail."
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "Greatest Challenge",
        content: "The second navigation pane was difficult to integrate. It seemed like I was building it according to the software's requirements, but it just wasn't working. After several days of wrestling with it, I finally got it working!"
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "For this project, I was provided the application's code and the visual mockup to match. From there, I got to work coding.",
      strategyDetails: [
        {
          title: "A Lot to Work With",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "The size and scope of this app was bigger than any I had previously worked on. I began by looking through all the code to become familiar with how it was built."
        },
        {
          title: "Divide and Conquer",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "I then broke the project up into several chunks and prioritized the top-level features first. That way, I could build out smaller components without running into design issues."
        },
        {
          title: "Regular Communication",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "After I finished each major feature, I informed my supervisor of my progress and any issues that arose that might affect the development schedule."
        },
        {
          title: "The Final Result",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "Eventually I had a completed, redesigned version of the application. From there, I tested it to resolve any bugs in the user flow. Then I sent the final project. I'm very proud of how it turned out. It matched the visual specification and would provide a better user experience to our clients."
        },
      ]
    }
  },
  {
    name: 'robot-t-shirt',
    title: 'Robot T-Shirt', 
    description: 'A robot-themed t-shirt design.', 
    software: ['Illustrator'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/robot-t-shirt/robots-all.png'},
      {img: '../../../assets/robot-t-shirt/robot-01.png'},
      {img: '../../../assets/robot-t-shirt/robot-02.png'},
      {img: '../../../assets/robot-t-shirt/robot-03.png'},
      {img: '../../../assets/robot-t-shirt/robot-04.png'},
      {img: '../../../assets/robot-t-shirt/robot-05.png'},
      {img: '../../../assets/robot-t-shirt/robot-06.png'},
      {img: '../../../assets/robot-t-shirt/robot-07.png'},
      {img: '../../../assets/robot-t-shirt/robot-08.png'},
      {img: '../../../assets/robot-t-shirt/robot-09.png'},
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2]
      },
      {
        column: 2,
        featureOrder: [4, 5, 3]
      },
      {
        column: 3,
        featureOrder: [6, 7]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Concept",
        content: "Create a robot-themed t-shirt design to sell as a fundraiser for a local student robotics class."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "The Story Behind It",
        content: "I heard about a local student robotics class during a presentation at work. During the presentation, they mentioned that there were no scholarships available, despite their desire to reach out to low-income kids. I figured that I could do something to raise money to scholarship a few students, so I set about designing a t-shirt to sell."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: ['Concept Creator', 'Illustrator', 'Marketer']
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Goal",
        content: "Raise $450 to fully scholarship a student, or to reduce the cost for several students."
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Outcome",
        content: "We sold 55 t-shirts, which raised $440. Then a helpful benefactor decided to donate the additional $10 dollars to help us reach our goal!"
      },
      {
        id: 6,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "I'm so proud of my community for coming together to help scholarship students in need!"
      },
      {
        id: 7,
        icon: "http://via.placeholder.com/80x80",
        title: "Fun Fact",
        content: "The robot in the middle of the bottom row has the antenna from my roof as a headpiece."
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "This was a pure passion project. I love robots (especially vintage robots), so this project gave me a way to have fun while helping people in need.",
      strategyDetails: [
        {
          title: "Robot Research",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "I started the design process by doing extensive research on vintage robot design. I made dozens of sketches that integrated popular features from actual vintage robots."
        },
        {
          title: "One Cohesive Set",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "I settled on nine robot concepts, then began digitally rendering them. In order to make the nine designs cohesive as a set, I decided to use only two line widths throughout all the designs: one for main structural features and another for accents and small details. I also decided to reuse certain circle sizes over several robots, which further created unity between them."
        },
        {
          title: "Color Options",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "Finally, I chose to simply print them in white on colored t-shirts. This gave the visual contrast that I wanted, while also providing potential customers with several color options to choose from."
        },
        {
          title: "The Outcome",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "The design was a hit! We sold 55 t-shirts and raised $440 from sales alone. The project gave many people in my work community the opportunity to not only get a fun t-shirt, but also support a cause important to them and our company."
        },
      ]
    } 
  },
  {
    name: 'foresight-icons',
    title: 'Foresight Icons', 
    description: 'A set of marketing icons for a personal finance app called Foresight Budgets.', 
    software: ['Illustrator'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/foresight-icons/hero-all.png'},
      {img: '../../../assets/foresight-icons/hero-01.png'},
      {img: '../../../assets/foresight-icons/hero-02.png'},
      {img: '../../../assets/foresight-icons/hero-03.png'},
      {img: '../../../assets/foresight-icons/hero-04.png'},
      {img: '../../../assets/foresight-icons/hero-05.png'},
      {img: '../../../assets/foresight-icons/hero-06.png'},
      {img: '../../../assets/foresight-icons/hero-07.png'},
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2]
      },
      {
        column: 2,
        featureOrder: [3, 4]
      },
      {
        column: 3,
        featureOrder: [5, 6]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Goal",
        content: "Create a set of icons to convey our unique app features in a fun and engaging way."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: "Responsible for entire design process from initial concepting through final product."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "How They Were Used",
        content: ["Print marketing materials", "Website graphics", "Trade show booth display"]
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "Greatest Challenge",
        content: "Early on, I had issues with readability as I scaled the icons. Details I created would get lost as I scaled down, despite using a consistent line width in my forms."
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "A Lesson Learned",
        content: "Prior to this project, I knew that using a consistent line width and strategy throughout the icon set would serve to unify the icons into a cohesive collection. While working on this project, I learned that using a consistent width and strategy throughout my use of negative space is equally as important. Maintaining both guarantees that the forms are scalable and readable."
      },
      {
        id: 6,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "By strategically using dashed lines to convey certain details, I was able to further unify the icons into a cohesive set."
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "Intro to design strategy.",
      strategyDetails: [
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
      ]
    } 
  },
  {
    name: 'robot-fight-club-logo',
    title: 'Robot Fight Club Logo', 
    description: 'Description of Robot Fight Club Logo', 
    software: ['Illustrator'],
    thumbnailImage: '../../../assets/office-teal-monochrome.png',
    heroImages: [
      {img: '../../../assets/robot-fight-club/rfc-green-on-black.png'},
      {img: '../../../assets/robot-fight-club/rfc-green-on-white.png'},
      {img: '../../../assets/robot-fight-club/rfc-light-on-dark.png'},
      {img: '../../../assets/robot-fight-club/rfc-dark-on-light.png'},
    ],
    featuredColIndex: [
      {
        column: 1,
        featureOrder: [1, 2, 3]
      },
      {
        column: 2,
        featureOrder: [4, 5]
      },
      {
        column: 3,
        featureOrder: [6, 7]
      }
    ],
    featuredItems: [
      {
        id: 1,
        icon: "http://via.placeholder.com/80x80",
        title: "Concept",
        content: "A personal finance app designed to be forward-thinking and accurate."
      },
      {
        id: 2,
        icon: "http://via.placeholder.com/80x80",
        title: "The Story Behind It",
        content: "I was personally fed up with using poorly-designed finance management software for my everyday finances, so I recruited a team of developers to help me design a better one for a local coding competition."
      },
      {
        id: 3,
        icon: "http://via.placeholder.com/80x80",
        title: "My Role",
        content: ['Concept Creator', 'Development Team Leader', 'Lead UX/UI Designer', 'Icon Designer']
      },
      {
        id: 4,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Goal",
        content: "Gain experience designing an app from scratch."
      },
      {
        id: 5,
        icon: "http://via.placeholder.com/80x80",
        title: "Project Outcome",
        content: "Created a functional and beautifully-designed app."
      },
      {
        id: 6,
        icon: "http://via.placeholder.com/80x80",
        title: "Most Proud Of",
        content: "The progress my team and I were able to make in such a short time."
      },
      {
        id: 7,
        icon: "http://via.placeholder.com/80x80",
        title: "Greatest Challenge",
        content: "Interfacing with a third-party API for importing bank transactions securely."
      },
    ],
    designStrategy: {
      icon: "http://via.placeholder.com/80x80",
      title: "Design Strategy",
      content: "Intro to design strategy.",
      strategyDetails: [
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
        {
          title: "Detail Title",
          imageUrl: "../../../assets/office-teal-monochrome.png",
          content: "details here"
        },
      ]
    } 
  }
];