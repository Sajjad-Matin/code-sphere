import { CiMobile1 } from "react-icons/ci";
import { FaWrench } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { LuClapperboard, LuPalette } from "react-icons/lu";
import { MdOutlineStorage } from "react-icons/md";

const cardServices = [
    {
        title: 'Web Development',
        description: 'Custom websites built with modern technologies for optimal performance and user experience.',
        icon: IoCode, 
    },
    {
        title: 'Mobile App Development',
        description: 'Custom applications built with modern technologies to ensure optimal performance and an exceptional user experience.',
        icon: CiMobile1, 
    },
    {
        title: 'Hosting Solutions',
        description: 'Reliable, fast, and secure hosting infrastructure to keep your website running smoothly 24/7.',
        icon: MdOutlineStorage, 
    },
    {
        title: 'Maintenance',
        description: 'Ongoing support and optimization to ensure your website stays updated, secure, and performing at its best.',
        icon: FaWrench, 
    },
    {
        title: 'Graphic Design',
        description: 'Stunning visuals and branding solutions to enhance your online presence and engage your audience.',
        icon: LuPalette, 
    },
    {
        title: 'Video editing',
        description: 'Professional video editing services to create engaging content that captivates your audience.',
        icon: LuClapperboard, 
    },
];

export default cardServices;