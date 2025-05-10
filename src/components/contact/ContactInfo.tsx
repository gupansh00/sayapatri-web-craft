
import { ReactNode } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactDetail {
  label: string;
  href?: string;
}

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  details: ContactDetail[];
}

const ContactItem = ({ icon, title, details }: ContactItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-sayapatri-100 hover:bg-sayapatri-200 transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        {details.map((detail, i) => (
          <p key={i} className="text-gray-600">
            {detail.href ? (
              <a href={detail.href} className="text-sayapatri-600 hover:underline transition-colors duration-300 hover:text-sayapatri-700">
                {detail.label}
              </a>
            ) : (
              <span className="text-sayapatri-600 hover:underline">
                {detail.label}
              </span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  const contactItems: ContactItemProps[] = [
    {
      icon: <Phone className="h-6 w-6 text-sayapatri-600 mx-auto transition-all duration-300 hover:scale-125" />,
      title: "Phone",
      details: [
        {
          label: "+977 9816751098",
          href: "tel:+9779816751098",
        },
        {
          label: "+977 9840985166",
          href: "tel:+9779840985166",
        },
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-sayapatri-600 mx-auto transition-all duration-300 hover:scale-125" />,
      title: "Email",
      details: [
        {
          label: "sayapatri01@gmail.com",
          href: "mailto:sayapatri01@gmail.com",
        },
      ],
    },
    {
      icon: <MapPin className="h-6 w-6 text-sayapatri-600 mx-auto transition-all duration-300 hover:scale-125" />,
      title: "Address",
      details: [
        { label: "Tinpaini, Biratnagar" },
        { label: "Nepal" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ContactInfo;
