import facebookIcon from "../assets/images/facebook.png";
import instagramIcon from "../assets/images/instagram.png";
import xIcon from "../assets/images/twitter.png";
import axios from "../api/axiosInstance";
import { useEffect, useState } from "react";

const Footer = () => {
  const [contacts, setContacts] = useState({
    address: "",
    phone: "",
    facebook: "",
    instagram: "",
    x: "",
    email: "",
  });

  async function load() {
    try {
      const res = await axios.get("/contact-info/all");
      if (!res?.data?.contacts) {
        return;
      }

      const newContacts = {};
      res.data.contacts.forEach((c) => {
        newContacts[c.contactName] = c.value;
      });

      setContacts(newContacts);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="flex flex-col items-center footerCont w-full pt-5">
      <div className="flex flex-col gap-5 mb-5 lg:flex-row lg:w-full lg:justify-evenly">
        <div className="text-red-950 text-sm flex flex-col gap-1 items-center lg:items-start">
          <p>{contacts.address || "jaha"}</p>

          <p>+{contacts.phone || "+639099397366"}</p>
        </div>

        <div className="flex gap-1 justify-center mt-3">
          <a
            href={
              contacts.facebook ||
              "https://www.facebook.com/profile.php?id=61573621421491"
            }
          >
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="footerIcon sl"
            />
          </a>
          <a
            href={
              contacts.instagram ||
              "https://www.instagram.com/scy_elle/?igsh=MWxtYzh4NG9hb2FvdQ%3D%3D&fbclid=IwY2xjawOCTLNleHRuA2FlbQIxMABicmlkETFacEl4RERqSnhHUjVFRDdRc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHndPNASM1BqQCxxKdxiZqPojP3SsLw9FmdCLOgW4rDFRvhCtR8DfOWlK5J-7_aem_KPlvIRZ_Fg3aMWsMntGjNQ#"
            }
          >
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="footerIcon sl"
            />
          </a>
          <a
            href={
              contacts.x ||
              "https://x.com/rosamiaavellana?t=LcrWud_DOnPjMecJaxYXwA&s=09&fbclid=IwY2xjawOGmtVleHRuA2FlbQIxMABicmlkETEzMXlMcEhyb3FlZjRCNEN3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MghjYWxsc2l0ZQEyAAEeoXpIYannsFC-8e_H7eFROAe1iPCGB4zsmrA4zCTVidmhYHvJIPEefOGT9FI_aem_eac_Xy-3tpVwlZY6hqH4Ww&brid=h0zd72wSCaTj67zgSEKasQ"
            }
          >
            <img src={xIcon} alt="X Icon" className="footerIcon sl" />
          </a>
        </div>
      </div>

      <p className="text-xs mb-5">© 2025 MBeautyQueen</p>
    </div>
  );
};

export default Footer;
