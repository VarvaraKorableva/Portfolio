import MestoMainPic from '../Images/MestoMainPic.png'
import MestoPopup from '../Images/MestoPopup.png'
import MestoBicPic from '../Images/mestoBicPic.png' 

import DreamsAdd from '../Images/dreamsAdd.png'
import DreamsSecondMain from '../Images/dreamssecondmain.png'
import MainDreamsFriends from '../Images/MainDreamsFriends.png'
import MainDreams from '../Images/MainDreams.png'

import HaifaMainPic from '../Images/HaifaMainPic.png'
import HaifaNaturePic from '../Images/HaifaNature.png'
import HaifaMuseumsPic from '../Images/HaifaMuseums.png'
import HaifaTransportPic from '../Images/HaifaTransport.png'
import HaifaPicMine from '../Images/HaifaPicMine.png'

import MainPicStudy from '../Images/mainpicstudy.png'
import PicStudyTech from '../Images/picstudytech.png'
import PicStudyFridman from '../Images/picstudyfridman.png'

import AistMainPic from '../Images/aistmain.png'
import MainAistPic from '../Images/mainaistpic.png'
import AistFormPic from '../Images/aistformpic.png'

import TravelSee from '../Images/travelsee.png'
import PicTravelKosa from '../Images/pictravelkosa.png'
import Baikal from '../Images/Baikal.png'

export const pictures = [
  {
    'id': 1,
    'pic' : MainDreams,
    'picsecond' : MainDreamsFriends,
    'picthird' : DreamsSecondMain,
    'picfourth' : DreamsAdd,
    'title' : 'What-do-you-dream-about?',
  },
  {
    'id': 2,
    'pic' : MestoMainPic,
    'picsecond' : MestoPopup,
    'picthird' : MestoBicPic,
    'picfourth' : HaifaTransportPic,
    'title' : 'Project Mesto',
  },
  {
    'id': 3,
    'pic' : HaifaMainPic,
    'picsecond' : HaifaNaturePic,
    'picthird' : HaifaPicMine,
    'picfourth' : HaifaTransportPic,
    'title' : 'Haifa',
  },
  {
    'id': 4,
    'pic' : MainPicStudy,
    'picsecond' : PicStudyTech,
    'picthird' : PicStudyFridman,
    'picfourth' : PicStudyFridman,
    'title' : 'How to study?',
  },
  {
    'id': 5,
    'pic' : TravelSee,
    'picsecond' : PicTravelKosa,
    'picthird' : Baikal,
    'picfourth' : PicStudyFridman,
    'title' : 'Russian Travel',
  },
  {
    'id': 6,
    'pic' : AistMainPic,
    'picsecond' : MainAistPic,
    'picthird' : AistFormPic,
    'picfourth' : HaifaTransportPic,
    'title' : 'Aist',
  }


]

export const projects = [
    {
      'id': 1,
      'pic' : MainDreams,
      'picsecond' : MainDreamsFriends,
      'picthird' : DreamsSecondMain,
      'picfourth' : DreamsAdd,
      'title' : 'What-do-you-dream-about?',
      'description': {
        'description': "This is a beautiful app for individuals who don't want to answer the question 'What do you want from me for your birthday or New Year?'",
        'mainIdea': "The main idea is that a person can add what they want on their page, and their friends, when deciding what to gift at a party, can view a wonderful and truly desired present on the person's page. It's like a wish list, but more comprehensive. You can add pictures, links, filter presents, see the nearest present date, write messages to your friends, and more.",
        'technologies': "My backend is built on Node.js (Express), my database is MongoDB, and the frontend is developed using React. I've used clean CSS."
      }
    },
    {
      'id': 2,
      'pic' : MestoMainPic,
      'picsecond' : MestoPopup,
      'picthird' : MestoBicPic,
      'picfourth' : HaifaTransportPic,
      'title' : 'Project Mesto',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 3,
      'pic' : HaifaMainPic,
      'picsecond' : HaifaNaturePic,
      'picthird' : HaifaPicMine,
      'picfourth' : HaifaTransportPic,
      'title' : 'Haifa',
      'description': {
        'link': 'varvarakorableva.github.io/Haifa-through-my-eyes/',
        'description': "This wanderfull web site all about Haifa, Israel",
        'mainIdea': "The main idea is show haw beautirful and freandly Haifa.",
        'technologies': "HTML5, CSS"
      }
    },
    {
      'id': 4,
      'pic' : MainPicStudy,
      'picsecond' : PicStudyTech,
      'picthird' : PicStudyFridman,
      'picfourth' : PicStudyFridman,
      'title' : 'How to study?',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },    
    {
      'id': 5,
      'pic' : TravelSee,
      'picsecond' : PicTravelKosa,
      'picthird' : Baikal,
      'picfourth' : PicStudyFridman,
      'title' : 'Russian Travel',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 6,
      'pic' : AistMainPic,
      'picsecond' : MainAistPic,
      'picthird' : AistFormPic,
      'picfourth' : HaifaTransportPic,
      'title' : 'Aist',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 7,
      'pic' : AistMainPic,
      'title' : 'Aist',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    {
      'id': 8,
      'pic' : AistMainPic,
      'picsecond' : MainAistPic,
      'picthird' : AistFormPic,
      'picfourth' : HaifaTransportPic,
      'title' : 'Aist',
      'description': {
        'description' : "This small app is all about adding pictures, like Instagram, but it's simpler.",
        'mainIdea': "Here, you can add and change your avatar picture and name. Additionally, you can add, delete, and change your other pictures and like pictures that your friends have added.",
        'technologies': "I have a few versions of this app. One is created using vanilla JavaScript, another is developed using React and utilizes Yandex's API, and the last one is built on React and uses my own API through Express."
      }
    },
    
]

