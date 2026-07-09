export const T = {
  primary: "#6CBF84",
  primaryDark: "#2E7D32",
  white: "#FFFFFF",
  text: "#1F2937",
  bg: "#F8FFFA",
  muted: "#6B7280",
  radius: "18px",
  shadow: "0 10px 30px rgba(16, 40, 24, 0.08)",
  shadowLg: "0 20px 50px rgba(16, 40, 24, 0.14)",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Inter', system-ui, -apple-system, sans-serif",
};

import img1 from "../assets/images/img1.JPG";
import img6 from "../assets/images/img6.JPG";
import img8 from "../assets/images/img8.JPG";
import img10 from "../assets/images/img10.JPG";

export const HERO_IMAGES = [img1, img6, img8, img10];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "amenities", label: "Amenities" },
  { id: "rooms", label: "Rooms" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Guest Reviews" },
  { id: "nearby", label: "Nearby" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Contact" },
];

export const FEATURES = [
  { icon: "BedDouble", label: "Luxury Rooms" },
  { icon: "Heart", label: "Family Friendly" },
  { icon: "Wifi", label: "Free WiFi" },
  { icon: "Clock", label: "24×7 Service" },
];

export const AMENITIES_DATA = [
  { icon: "Wifi", title: "Free WiFi", desc: "High-speed internet across the property." },
  { icon: "Car", title: "Parking", desc: "Secure on-site parking for all guests." },
  { icon: "Utensils", title: "Restaurant", desc: "Multi-cuisine dining crafted by chefs." },
  { icon: "BellRing", title: "Room Service", desc: "Round-the-clock in-room dining." },
  { icon: "Zap", title: "Power Backup", desc: "Uninterrupted power supply, always." },
  { icon: "Snowflake", title: "Air Conditioning", desc: "Climate-controlled comfort in every room." },
  { icon: "Tv", title: "Smart TV", desc: "Streaming-ready smart entertainment." },
  { icon: "Shirt", title: "Laundry", desc: "Same-day laundry and dry cleaning." },
  { icon: "Clock", title: "24 Hr Reception", desc: "Always available to assist you." },
  { icon: "MoveVertical", title: "Lift", desc: "Effortless access to every floor." },
  { icon: "ShieldCheck", title: "Security", desc: "24/7 CCTV and trained personnel." },
  { icon: "Sparkles", title: "Housekeeping", desc: "Daily premium housekeeping service." },
];

import ssImg from "../assets/images/ss.JPG";
import img4 from "../assets/images/img4.JPG";

export const ROOMS_DATA = [
  {
    name: "Standard Studio",
    price: 3499,
    img: ssImg,
    features: ["King Bed", "City View", "Smart TV", "AC"],
  },
  {
    name: "Suite Room",
    price: 4999,
    img: img4,
    features: ["Work Desk", "Lounge Area", "Mini Bar", "AC"],
  },
  {
    name: "Family Room",
    price: 6299,
    img: img8,
    features: ["2 Queen Beds", "Sofa", "Bath Tub", "Balcony"],
  },
  // {
  //   name: "Suite Room",
  //   price: 8999,
  //   img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  //   features: ["Living Room", "Panoramic View", "Jacuzzi", "Butler"],
  // },
];

import galleryImg1 from "../assets/images/img1.JPG";
import galleryImg2 from "../assets/images/img2.JPG";
import galleryImg3 from "../assets/images/img3.JPG";
import galleryImg4 from "../assets/images/img4.JPG";
import galleryImg5 from "../assets/images/img5.JPG";
import galleryImg6 from "../assets/images/img6.JPG";
import galleryImg7 from "../assets/images/img7.JPG";
import galleryImg8 from "../assets/images/img8.JPG";
import galleryImg9 from "../assets/images/img9.JPG";
import galleryImg10 from "../assets/images/img10.JPG";
import galleryImg11 from "../assets/images/img11.png";
import galleryS from "../assets/images/ss.JPG";

export const GALLERY_IMAGES = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
  galleryImg10,
  galleryImg11,
  galleryS,
];

export const REVIEWS_DATA = [
  {
    name: "Ananya Sharma",
    location: "Mumbai, India",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "Absolutely stunning stay! Impeccable service, elegant rooms, and food that surprised us every evening. PDS Residency is our new favourite.",
  },
  {
    name: "Rahul Verma",
    location: "Bengaluru, India",
    photo: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
    text: "From the warm welcome to the pillow menu, every detail felt considered. The suite view was breathtaking and the staff, exceptional.",
  },
  {
    name: "Sophie Miller",
    location: "London, UK",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80",
    text: "A true 5-star experience without the pretence. The design is beautiful, the beds are heaven, and the concierge team is brilliant.",
  },
  {
    name: "Kabir Malhotra",
    location: "Delhi, India",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    text: "Perfect for a family trip. Kids loved the space, we loved the calm. The housekeeping was invisible yet flawless — the mark of great hospitality.",
  },
];

import nearbyImg12 from "../assets/images/img12.png";
import nearbyImg13 from "../assets/images/img13.png";
import nearbyImg14 from "../assets/images/img14.png";
import nearbyImg15 from "../assets/images/img15.png";

export const NEARBY_DATA = [
  {
    name: "Tiruvannamalai Arunachaleswarar Temple",
    dist: "1.5 km",
    img: nearbyImg12,
    desc: "One of the most famous Lord Shiva temples in India and a major pilgrimage destination.",
  },
  {
    name: "Girivalam Path",
    dist: "2 km",
    img: nearbyImg13,
    desc: "The sacred 14 km circumambulation path around Arunachala Hill, visited by thousands of devotees.",
  },
  {
    name: "Arunachala Hill",
    dist: "2.5 km",
    img: nearbyImg14,
    desc: "A spiritual landmark known for trekking, meditation, and breathtaking sunrise and sunset views.",
  },
  {
    name: "Sri Ramanasramam",
    dist: "3 km",
    img: nearbyImg15,
    desc: "The peaceful ashram of Bhagavan Sri Ramana Maharshi, attracting visitors from around the world.",
  },
];

export const STATS_DATA = [
  { n: 15, s: "+", l: "Years" },
  { n: 4800, s: "+", l: "Guests" },
  { n: 4.9, s: "★", l: "Rated" },
];

export const BOOKING_URL = "https://www.bookingengine.sonachala.com/#/hotels/pds-residency";
