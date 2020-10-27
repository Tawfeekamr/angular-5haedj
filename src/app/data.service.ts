import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let  specialityList =  [
     {  id: 1,key:  "#SP001", speciality : 'Urology',img : "assets/img/specialities/specialities-01.png" },
     {  id: 2,key:  "#SP002", speciality : 'Orthopedic',img : "assets/img/specialities/specialities-03.png" },
     {  id: 3,key:  "#SP003", speciality : 'Neurology', img : "assets/img/specialities/specialities-02.png" },
     {  id: 4,key:  "#SP004", speciality : 'Cardiologis',img : "assets/img/specialities/specialities-04.png" },
     {  id: 5,key:  "#SP005", speciality : 'Dentist',img:"assets/img/specialities/specialities-05.png" },
     
    ];

    let appointments = [
      {  id: 1,doctorName : "Dr. Ruby Perrin",type:"New patient",speciality:"Dental",patient_key:"#PT001",Patient_Name:"Charlene Reed",appointment_time:"Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",status : "active",amount:"$200.00" },
      {  id: 2,doctorName : "Dr. Darren Eldder",type:"New patient",speciality:"Dental",patient_key:"#PT002",Patient_Name:"Travis Trimble",appointment_time:"Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",status : "active",amount:"$300.00" },
      {  id: 3,doctorName : "Dr. Deborah Angel",type:"Old patient",speciality:"Cardiology",patient_key:"#PT003",Patient_Name:"Carl Kelly",appointment_time:"Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",status : "active",amount:"$150.00" },
      {  id: 4,doctorName : "Dr. Sofia Brient",type:"Old patient",speciality:"Urology",patient_key:"#PT004",Patient_Name:"Michelle Fairfax",appointment_time:"Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",status : "active",amount:"$150.00" },
      {  id: 5,doctorName : "Dr. Marvin Campbell",type:"New patient",speciality:"Urology",patient_key:"#PT005",Patient_Name:"Gina Moore",appointment_time:"Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",status : "active",amount:"$200.00" }
    ]

    let favourites = [
      {
        id : 1,
        doctor_name : "Dr. Ruby Perrin",
        speciality : "Dentist",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MDS - Periodontology and Oral Implantology, BDS",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3100.00",
        Price : "$160",
        profile : "assets/img/doctors/doctor-thumb-01.jpg",
        status : "1",
        type : "Female",
        location : "Georgia, USA",
        availableTime : "10 am",
        consulting_fees : "$100",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 2,
        doctor_name : "Dr. Darren Elder",
        speciality : "Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "BDS, MDS - Oral & Maxillofacial Surgery",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3900.00",
        Price : "$190",
        profile : "assets/img/doctors/doctor-thumb-02.jpg",
        status : "1",
        type : "Female",
        location : "Montana, USA",
        availableTime : "8 am",
        consulting_fees : "$90",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 3,
        doctor_name : "Dr. Deborah Angel",
        speciality : "Cardiology",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MD - General Medicine, DNB - Cardiology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3700.00",
        Price : "$170",
        profile : "assets/img/doctors/doctor-thumb-03.jpg",
        status : "1",
        type : "Female",
        location : "Oklahoma, USA",
        availableTime : "2 pm",
        consulting_fees : "$70",
        booking_fees : "$10",
        video_call : "$50"
      },
      {
        id : 4,
        doctor_name : "Dr. Sofia Brient",
        speciality : "BDS, MDS - Oral & Maxillofacial Surgery",
        since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
        Education : "MBBS, MS - General Surgery, MCh - Urology",
        Available : " Available on Fri, 22 Mar ",
        Earned : "3000.00",
        Price : "$110",
        profile : "assets/img/doctors/doctor-thumb-04.jpg",
        status : "1",
        type : "Female",
        location : "Georgia, USA",
        availableTime : "11 am",
        consulting_fees : "$110",
        booking_fees : "$10",
        video_call : "$50"
    },
    {
      id : 5,
      doctor_name : "Dr. Marvin Campbell",
      speciality : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Ophthalmology, DNB - Ophthalmology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3150.00",
      Price : "$130",
      profile : "assets/img/doctors/doctor-thumb-05.jpg",
      status : "1",
      type : "Male",
      location : "Florida, USA",
      availableTime : "12 pm",
      consulting_fees : "$80",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 6,
      doctor_name : "Dr. Katharine Berthold",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$180",
      profile : "assets/img/doctors/doctor-thumb-06.jpg",
      status : "1",
      type : "Female",
      location : "Newyork, USA",
      availableTime : "7 am",
      consulting_fees : "$170",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 7,
      doctor_name : "Dr. Linda Tobin",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Neurology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "2900.00",
      Price : "$160",
      profile : "assets/img/doctors/doctor-thumb-07.jpg",
      status : "1",
      type : "Female",
      location : "Texas, USA",
      availableTime : "10 pm",
      consulting_fees : "$130",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 8,
      doctor_name : "Dr. Julia Washington",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - General Medicine, DM - Endocrinology",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3200.00",
      Price : "$140",
      profile : "assets/img/doctors/doctor-thumb-08.jpg",
      status : "1",
      type : "Female",
      location : "Louisiana, USA",
      availableTime : "9 am",
      consulting_fees : "$90",
      booking_fees : "$10",
      video_call : "$50"
    },
    {
      id : 9,
      doctor_name : "Dr. Paul Richard",
      speciality : "Dentist",
      since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
      Education : "MBBS, MD - Dermatology , Venereology & Lepros",
      Available : " Available on Fri, 22 Mar ",
      Earned : "3000.00",
      Price : "$150",
      profile : "assets/img/doctors/doctor-thumb-09.jpg",
      status : "1",
      type : "Male",
      location : "Louisiana, USA",
      availableTime : "10 am",
      consulting_fees : "$120",
      booking_fees : "$10",
      video_call : "$50"
    }
  ]

    let doctors = [
                {
            id : 1,
            doctor_name : "Dr. Darren Elder",
            speciality : "Dental",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Education : "MDS - Periodontology and Oral Implantology, BDS",
            Available : " Available on Fri, 22 Mar ",
            Earned : "3100.00",
            Price : "$160",
            profile : "assets/img/doctors/doctor-thumb-02.jpg",
            status : "1",
            type : "Female",
            location : "Georgia, USA",
            availableTime : "10 am",
            consulting_fees : "$100",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 2,
            doctor_name : "Dr. Deborah Angel",
            speciality : "Cardiology",
            speciality_profile : "assets/img/specialities/specialities-04.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "5000.00",
            Education : "BDS, MDS - Oral & Maxillofacial Surgery",
            Available : " Available on Fri, 22 Mar ",
            Price : " $150 - $250 ",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-03.jpg",
            type : "Female",
            location : "Louisiana, USA",
            availableTime : "10 am",
            consulting_fees : "$100",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 3,
            doctor_name : "Dr. John Gibbs",
            speciality : "Dental",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3300.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$210",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-09.jpg",
            type : "Male",
            location : "Georgia, USA",
            availableTime : "3 pm",
            consulting_fees : "$150",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id : 4,
            doctor_name : "Dr. Katharine Berthold",
            speciality : "Orthopaedics",
            speciality_profile : "assets/img/specialities/specialities-03.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3500.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$310",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-06.jpg",
            type : "Male",
            location : "Newyork, USA",
            availableTime : "12 am",
            consulting_fees : "$250",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:5,
            doctor_name : "Dr. Linda Tobin",
            speciality : "Neurology",
            speciality_profile : "assets/img/specialities/specialities-02.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-07.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:6,
            doctor_name : "Dr. Marvin Campbell",
            speciality : "Orthopaedics",
            speciality_profile : "assets/img/specialities/specialities-03.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-05.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:7,
            doctor_name : "Dr. Olga Barlow",
            speciality : "Dental",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-10.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        },
         {
            id:8,
            doctor_name : "Dr. Paul Richard",
            speciality : "Neurology",
            speciality_profile : "assets/img/specialities/specialities-02.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-08.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:9,
            doctor_name : "Dr. Ruby Perrin",
            speciality : "Dental",
            speciality_profile : 'assets/img/specialities/specialities-05.png',
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-01.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        },
        {
            id:9,
            doctor_name : "Dr. Sofia Brient",
            speciality : " Urology",
            speciality_profile : "assets/img/specialities/specialities-01.png",
            since : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            Earned : "3700.00",
            Education : "MBBS, MD - General Medicine, DNB - Cardiology",
            Available : " Available on Fri, 22 Mar ",
            Price : "$260",
            status : "1",
            profile : "assets/img/doctors/doctor-thumb-04.jpg",
            type : "Male",
            location : "Florida, USA",
            availableTime : "11 am",
            consulting_fees : "$200",
            booking_fees : "$10",
            video_call : "$50"
        }
    ]
 
    let patients = [
      {
            id : "1",
            key : "#P0016",
            name : "Richard Wilson",
            age : "38",
            address : "Alabama, USA",
            phone : "1 952 001 8563",
            email : "richardwilson@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "AB+",
            type : "Male",
            img : "assets/img/patients/patient.jpg"
        },
      {
            id : "2",
            key : "#PT001",
            name : "Charlene Reed",
            age : "29",
            address : "North Carolina, USA",
            phone : "1 828 632 9170",
            email : "Charlene@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "100.00",
            bloodgroup : "o+",
            type : "Female",
            img : "assets/img/patients/patient1.jpg"
        },
        {
            id : "3",
            key : "#PT002",
            name : "Travis Trimble",
            age : "23",
            address : "Maine, USA",
            phone : "1 207 729 9974",
            email : "travis@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "250.00",
            bloodgroup : "B+",
            type : "Male",
            img : "assets/img/patients/patient2.jpg"
        },
        {
            id : "4",
            key : "#PT003",
            name : "Carl Kelly",
            age : "29",
            address : "Indiana, USA",
            phone : "1 260 724 7769",
            email : "carlkelly@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "200.00",
            bloodgroup : "A+",
            type : "Male",
            img : "assets/img/patients/patient3.jpg"
        },
        {
            id : "5",
            key : "#PT004",
            name : "Michelle Fairfax",
            age : "25",
            address : "Indiana, USA",
            phone : "1 504 368 6874",
            email : "michelle@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "150.00",
            bloodgroup : "B+",
            type : "Male",
            img : "assets/img/patients/patient4.jpg"
        },
        {
             id : "6",
            key : "#PT005",
            name : "Gina Moore",
            age : "23",
            address : "Florida, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient5.jpg"
        },
         {
             id : "7",
            key : "#PT006",
            name : "Elsie Gilley",
            age : "16",
            address : "Kentucky, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient6.jpg"
        },
        {
             id : "8",
            key : "#PT007",
            name : "Joan Gardner",
            age : "25",
            address : "California, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient7.jpg"
        },
        {
             id : "9",
            key : "#PT008",
            name : "Daniel Griffing",
            age : "21",
            address : "New Jersey, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient8.jpg"
        },
        {
             id : "10",
            key : "#PT009",
            name : "Walter Roberson",
            age : "18",
            address : "Florida, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient9.jpg"
        },
        {
             id : "11",
            key : "#PT010",
            name : "Robert Rhodes",
            age : "19",
            address : "California, USA",
            phone : "9548207887",
            email : "Elsie@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "o-",
            type : "Male",
            img : "assets/img/patients/patient10.jpg"
        }   ,
        {
             id : "12",
            key : "#PT0011",
            name : "Harry Williams",
            age : "9",
            address : "Colorado, USA",
            phone : "1 303 607 7075",
            email : "harrywilliams@example.com",
            lastvisit : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
            paid : "350.00",
            bloodgroup : "A-",
            type : "Male",
            img : "assets/img/patients/patient11.jpg"
        }        
    ]

    let reviews = [
      {
         id : 1,
         patient_name : "Michelle Fairfax",
         doctor_name : "Dr. Sofia Brient",
         patient_pic : "assets/img/patients/patient4.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg",
         ratings : "5",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 2,
         patient_name : "Carl Kelly",
         doctor_name : "Dr. Deborah Angel",
         patient_pic : "assets/img/patients/patient3.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg",
         ratings : "4",
         description : "",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 3,
         patient_name : "Charlene Reed",
         doctor_name : "Dr. Ruby Perrin",
         patient_pic : "assets/img/patients/patient1.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
         id : 4,
         patient_name : "Daniel Griffing",
         doctor_name : "Dr. Paul Richard",
         patient_pic : "assets/img/patients/patient8.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg",
         ratings : "4",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 5,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 6,
         patient_name : "Elsie Gilley",
         doctor_name : "Dr. Katharine Berthold",
         patient_pic : "assets/img/patients/patient6.jpg",
         doctor_pic : "assets/img/patients/patient6.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 7,
         patient_name : "Gina Moore",
         doctor_name : "Dr. Marvin Campbell",
         patient_pic : "assets/img/patients/patient5.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 8,
         patient_name : "Harry Williams",
         doctor_name : "Dr. Olga Barlow",
         patient_pic : "assets/img/patients/patient10.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 9,
         patient_name : "Joan Gardner",
         doctor_name : "Dr. Linda Tobin",
         patient_pic : "assets/img/patients/patient7.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      },
      {
          id : 10,
         patient_name : "Travis Trimble",
         doctor_name : "Dr. Darren Elder",
         patient_pic : "assets/img/patients/patient2.jpg",
         doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg",
         ratings : "3",
         description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
         date : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)"
      }
  ]

  let comments = [

    {
      "name" : "Michelle Fairfax",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "name" : "Elsie Gilley",
      "email" : "Fairfax@example.com",
      "comment" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }

  ]

  let blogs = [
  {
    id : 1,
    title : "Doccure – Making your clinic painless visit?",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-01.jpg",
    doctor_name : "Dr. Ruby Perrin",
    doctor_pic : "assets/img/doctors/doctor-thumb-01.jpg"

  },
  {
    id : 2,
    title : "What are the benefits of Online Doctor Booking?",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-02.jpg",
    doctor_name : "Dr. Darren Elder",
    doctor_pic : "assets/img/doctors/doctor-thumb-02.jpg"
  },
  {
    id : 3,
    title : "Benefits of consulting with an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Deborah Angel",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-03.jpg",
    doctor_name : "Dr. Deborah Angel",
    doctor_pic : "assets/img/doctors/doctor-thumb-03.jpg"
  },
  {
    id : 4,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-04.jpg",
    doctor_name : "Dr. Sofia Brient",
    doctor_pic : "assets/img/doctors/doctor-thumb-04.jpg"
  },
  {
    id : 5,
    title : "Online Doctor Appointment Scheduling",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-05.jpg",
    doctor_name : "Dr. Marvin Campbell",
    doctor_pic : "assets/img/doctors/doctor-thumb-05.jpg"
  },
  {
    id : 6,
    title : "Simple steps to make your doctor visits exceptional!",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-06.jpg",
    doctor_name : "Dr. Katharine Berthold",
    doctor_pic : "assets/img/doctors/doctor-thumb-06.jpg"
  },
  {
    id : 7,
    title : "Choose your own Online Doctor Appointment",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-07.jpg",
    doctor_name : "Dr. Linda Tobin",
    doctor_pic : "assets/img/doctors/doctor-thumb-07.jpg"
  },
  {
    id : 8,
    title : "Simple steps to visit your doctor today",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-08.jpg",
    doctor_name : "Dr. Paul Richard ",
    doctor_pic : "assets/img/doctors/doctor-thumb-08.jpg"
  },
   {
    id : 9,
    title : "5 Great reasons to use an Online Doctor",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-09.jpg",
    doctor_name : "Dr. John Gibbs ",
    doctor_pic : "assets/img/doctors/doctor-thumb-09.jpg"
  },
   {
    id : 10,
    title : "Online Doctoral Programs",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdBy : "Dr. Sofia Brient",
    createdAt : "Wed May 27 2020 09:41:48 GMT+0530 (India Standard Time)",
    comments : 12,
    type : "Health Tips",
    status : "active",
    img : "assets/img/blog/blog-10.jpg",
    doctor_name : "Dr. Olga Barlow",
    doctor_pic : "assets/img/doctors/doctor-thumb-10.jpg"
  }
] 

  let transactions = [
      {
        id : 1,
        invoiceNumber  : '#IN0001',
        patient_id : '#PT001',
        patient_name : 'Daniel Griffing',
        profile : 'assets/img/patients/patient8.jpg',
        total_amount : '$150.00',
        status : 'paid'
      },
      {
        id : 2,
          invoiceNumber  : '#IN0002',
          patient_id : '#PT007',
          patient_name : 'Joan Gardner',
          profile : 'assets/img/patients/patient7.jpg',
          total_amount : '$250.00',
          status : 'paid'
      },
      {
        id : 3,
          invoiceNumber  : '#IN0003',
          patient_id : '#PT004',
          patient_name : 'Michelle Fairfax',
          profile : 'assets/img/patients/patient4.jpg',
          total_amount : '$150.00',
          status : 'paid'
      },
      {
        id : 4,
          invoiceNumber  : '#IN0004',
          patient_id : '#PT003',
          patient_name : 'Carl Kelly',
          profile : 'assets/img/patients/patient3.jpg',
          total_amount : '$150.00',
          status : 'paid'
      },
      {
        id : 5,
          invoiceNumber  : '#IN0005',
          patient_id : '#PT001',
          patient_name : 'Elsie Gilley',
          profile : 'assets/img/patients/patient8.jpg',
          total_amount : '$300.00',
          status : 'paid'
      },
      {
        id : 6,
          invoiceNumber  : '#IN0006',
          patient_id : '#PT005',
          patient_name : 'Gina Moore',
          profile : 'assets/img/patients/patient5.jpg',
          total_amount : '$350.00',
          status : 'paid'
      },
      {
        id : 7,
          invoiceNumber  : '#IN0007',
          patient_id : '#PT010',
          patient_name : 'Robert Rhodes',
          profile : 'assets/img/patients/patient10.jpg',
          total_amount : '$120.00',
          status : 'paid'
      },
      {
        id : 8,
          invoiceNumber  : '#IN0008',
          patient_id : '#PT002',
          patient_name : 'Travis Trimble',
          profile : 'assets/img/patients/patient10.jpg',
          total_amount : '$200.00',
          status : 'paid'
      },
      {
        id : 9,
          invoiceNumber  : '#IN0009',
          patient_id : '#PT009',
          patient_name : 'Walter Roberson',
          profile : 'assets/img/patients/patient9.jpg',
          total_amount : '$100.00',
          status : 'paid'
      }
  ]
    return {transactions:transactions,comments:comments,favourites:favourites,blogs:blogs,specialityList:specialityList,appointments:appointments,doctors:doctors,patients:patients,reviews:reviews};
 
   }
}
