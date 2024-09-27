import { title } from 'process';
import { FaHeartbeat } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';


export  const navlinks = [
  {
    link: "HOME",
    url:"/"
  
  },
  {
    link: "ABOUT US",
    url: "/about"
  },
  // {
  //   link: "NEWS & EVENTS",
  //   url: "/news"
  // },
  // {
  //   link: "THE STAKEHOLDERS",
  //   url: "/news"
  // },
  {
    link: "PROJECTS",
    url: "/projects/savinghearts",
    submenu: [
      // { link: "The Saving Hearts Project", url: "/" },
      { link: "The Saving Hearts Project", url: "/projects/savinghearts" },
    ]
  },
  {
    link: "CONTACT US",
    url: "/contact"
  },
  
];

export const aims = [
  {
    icon: <FaHeartbeat />,
    title: "Support for Heart Surgeries",
    text: "NOSHF supports open heart surgeries for underprivileged children with heart-related issues, partnering with UGMC, Boston Children's Hospital, and Kinderherzen from Germany.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Fundraising",
    text: "The foundation conducts fundraising initiatives, partnering with organizations and utilizing crowdfunding platforms like the CHANGO app, to support their mission of funding heart surgeries.",
  },
  {
    icon: <FaBullhorn />,
    title: "Advocacy",
    text: "NOSHF advocates for proper care and treatment for patients with heart-related issues. They work to promote the cause and importance of addressing heart diseases in children.",
  },
  {
    icon: <FaBookOpen />,
    title: "Educational Campaigns",
    text: "The foundation is promoting healthy lifestyles and raising awareness about heart-related diseases through educational campaigns, including sensitization efforts during World Hearts Day events.",
  },
];

export const cards = [
  {
    image: "/assets/haven.jpg",
    title: "Collaboration with Haven of Rest-UK",
    text: "NOSHF partnered with Haven of Rest-UK to sponsor two heart surgeries for underprivileged children in Ghana, securing international support and resources.",
  },

  {
    image: "/assets/40H.jpg",
    title: "Forty (40) Hearts Project",
    text: "The Forty Hearts Project, launched on Nii Okai's 40th birthday, aims to fund heart surgeries for 40 underprivileged children in Ghana, with 15 successful surgeries completed.",
  },

  {
    image: "/assets/src6.jpg",
    title: "World Hearts Day Collaboration with KNUST-SRC",
    text: "On September 29, 2015, NOSHF collaborated with the KNUST-SRC to embark on sensitization about child heart diseases during World Hearts Day. This collaboration aimed to raise awareness and educate the public about heart-related diseases and the importance of heart health.",
  },
] 

export const proof = [
  {
    number: "64+",
    title: "Donantions"
  },
  {
    number: "$740+",
    title: "Funds Raised"
  },
  {
    number: "12+",
    title: "Volunteers"
  },
  {
    number: "35+",
    title: "Projects"
  },
]

export const news = [
  {
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },

  {
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },

  {
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },
  {
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },
] 

export const events = [
  {
    image: "/assets/card1.png",
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },

  {
    image: "/assets/card2.png",
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },

  {
    image: "/assets/card3.png",
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },
  {
    image: "/assets/card2.png",
    title: "Providing Shelter for the Homeless",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus vitae nibh diam eu lectus sit viverra. Consectetur praesent morbi lobortis dolor lacus nascetur aliquam. Eget sodales ipsum ullamcorper amet",
  },

] 


export const galleries = [
  {
    title: 'SIGNING OF MOU WITH GHANA HEART FOUNDATION',
    images: [
      { src: '/assets/signing1.png', alt: 'Image 1', text: '' },
      { src: '/assets/signing2.png', alt: 'Image 2', text: '' },
      { src: '/assets/signing3.jpg', alt: 'Image 3', text: '' },
      { src: '/assets/signing4.jpg', alt: 'Image 4', text: '' },
    ],
  },
  {
    title: 'RECORDING OF THE SAVING HEARTS SONG',
    images: [
      { src: '/assets/recording1.jpg', alt: 'Image 5', text: '' },
      { src: '/assets/recording2.jpg', alt: 'Image 6', text: '' },
      { src: '/assets/recording3.jpg', alt: 'Image 7', text: '' },
      { src: '/assets/recording4.jpg', alt: 'Image 8', text: '' },
    ],
  },
  {
    title: 'SAVING HEARTS REGIONAL TOUR',
    images: [
      { src: '/assets/tour1.jpg', alt: 'Image 5', text: 'Image 5' },
      { src: '/assets/tour2.jpg', alt: 'Image 6', text: 'Image 6' },
      { src: '/assets/tour3.jpg', alt: 'Image 7', text: 'Image 7' },
      { src: '/assets/tour4.jpg', alt: 'Image 8', text: 'Image 8' },
    ],
  }, 
];