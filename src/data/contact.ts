export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  { label: "Mobile", value: "+91 86673 44556", href: "tel:+918667344556", icon: "bi-telephone" },
  { label: "Email", value: "niksonandrew8@gmail.com", href: "mailto:niksonandrew8@gmail.com", icon: "bi-envelope" },
  { label: "Instagram", value: "@nikson_andrew_", href: "https://www.instagram.com/nikson_andrew_/", icon: "bi-instagram" },
  { label: "Snapchat", value: "@niksonandrew", href: "https://snapchat.com/t/jWep8RN5", icon: "bi-snapchat" },
  { label: "YouTube", value: "Nikson Andrew C", href: "https://www.youtube.com/@niksonandrewc6187", icon: "bi-youtube" },
  
];