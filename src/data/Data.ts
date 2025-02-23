import { PhoneCall, MapPin, Mail } from "lucide-react";


export const NavData = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'About Us',
        url: '/about',
    },
    {
        id: 3,
        title: 'Contact Us',
        url: '/contact',
    },
];

export const ContactData = [
    {
        id: 1,
        title: 'Email Us',
        info: 'Interactively grow backend ideas for cross-platform models.',
        icon: Mail,
        contact: 'info@mail.com',
    },
    {
        id: 2,
        title: 'Call Us',
        info: 'Distinctively exploit optimal alignments for intuitive bandwidth.',
        icon: PhoneCall,
        contact: '+33 789 456 123',
    },
    {
        id: 3,
        title: 'Location',
        info: 'Nowhere, Kingdom. 345 France AutreMere, Street No. 999,',
        icon: MapPin,
        contact: '',
    },
];