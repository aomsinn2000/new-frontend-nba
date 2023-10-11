// Images
import EMS from "../../../../assets/images/logoParcel/ems.png";
import DHL from "../../../../assets/images/logoParcel/dhl.png";
import Flash from "../../../../assets/images/logoParcel/flash.png";
import Kerry from "../../../../assets/images/logoParcel/kerry.png";
import SCG from "../../../../assets/images/logoParcel/scg.png";
import BestExpress from "../../../../assets/images/logoParcel/best.png";
import Ninjavan from "../../../../assets/images/logoParcel/ninja.png";
import SCGCool from "../../../../assets/images/logoParcel/scgcool.png";
import Lazada from "../../../../assets/images/logoParcel/lazada.png";
// import bgImageBuble from '../../../../assets/images/logoParcel/';

const data = [
  {
    name: "Ninja Van",
    image:  Ninjavan ,
    linkWeb: "https://www.ninjavan.co/en-th",
    position: "บริษัท ไปรษณีย์ไทย จำกัด (ปณท)",
    description:
      "ให้บริการส่งของทางไปรษณีย์ บริการส่งด่วน (EMS) ตรวจสอบสถานะหรือเช็คเลขพัสดุ ได้ตลอด 24 ชม. ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },
  {
    name: "Kerry Express",
    image:  Kerry ,
    linkWeb: "https://th.kerryexpress.com/th/track/",
    position: "บริษัท เคอรี่ เอ็กซ์เพรส จำกัด (มหาชน)",
    description:
      "ผู้ให้บริการจัดส่งพัสดุในประเทศอย่างรวดเร็วและปลอดภัย การันตีด้วยคุณภาพบริการ No.1 Brand Thailand 4 ปีซ้อน ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },
  {
    name: "Flash Express",
    image: Flash ,
    linkWeb: "https://www.flashexpress.co.th/tracking/",
    position: "บริษัท แฟลช เอ็กซ์เพรส จำกัด",
    description:
      "ให้บริการจัดส่งสินค้าภายในประเทศได้อย่างรวดเร็วและปลอดภัย พร้อมงานบริการเรียกเก็บเงินปลายทางใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },

  {
    name: "Ninja Van",
    image:  Ninjavan ,
    linkWeb: "https://www.ninjavan.co/th-th/",
    position: "Ninja Van",
    description:
      "นินจาแวน มีระบบการส่งพัสดุที่พร้อมให้บริการทุกความต้องการ รองรับทุกโอกาสทางธุรกิจ และความพึงพอใจสูงสุดถึงมือผู้รับ.",
  },

  {
    name: "DHL eCommerce",
    image: DHL ,
    linkWeb: "https://www.dhl.com/th-th/home/tracking.html",
    position: "บริษัท ดีเอชแอล อีคอมเมิร์ซ โซลูชั่นส์ จำกัด",
    description:
      "ขนส่งชั้นนำมีชื่อเสียงในประเทศ มอบบริการจัดส่งพัสดุทั้งภายในประเทศสำหรับลูกค้าที่ต้องการมาใช้บริการที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },

  {
    name: "Best Express",
    image:  BestExpress ,
    linkWeb: "https://www.best-inc.co.th/track",
    position: "บริษัท เบสท์ โลจิสติกส์ (ประเทศไทย) จำกัด",
    description:
      "ผู้ให้บริการด้านซัพพลายเชนและผู้นำเสนอแนวทางการแก้ปัญหาทาง ด้านโลจิสติกส์แถวหน้าของโลก ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },

  {
    name: "SCG Express",
    image:  SCG ,
    linkWeb: "https://www.scgexpress.co.th/tracking/",
    position: "บริษัท เอสซีจี เอ็กซ์เพรส จำกัด",
    description:
      "มุ่งเน้นการให้บริการขนส่งพัสดุด่วน ทั้งแบบทั่วไปและพัสดุประเภทอาหารที่ต้องการการควบคุมอุณหภูมิเป็นพิเศษ ใช้บริการได้ที่สาขาเอ็นบีเอ ได้ทุกสาขาทั่วประเทศ.",
  },

  {
    name: "SCG CHILLED & FROZEN PARCEL",
    image:  SCGCool ,
    linkWeb: "https://www.scgexpress.co.th/tracking/",
    position: "บริษัท เอสซีจี เอ็กซ์เพรส จำกัด",
    description:
      " การขนส่งสินค้าแบบแช่เย็น หรือแช่แข็ง SCG EXPRESSมีบริการขนส่งสินค้าสำหรับพัสดุที่ต้องควบคุมอุณหภูมิ เช่น ของสด อาหารทะเลผลไม้.",
  },

  {
    name: "Lazada Drop-Off",
    image:  Lazada ,
    linkWeb:
      "https://www.lazada.co.th/helpcenter/how-do-i-track-my-order-status-6074.html",
    position: "บริษัท ลาซาด้า จำกัด",
    description:
      "เป็นผู้ให้บริการเว็บไซต์ช้อปปิ้งออนไลน์สินค้าราคาถูกโดยมีสินค้าให้เลือกซื้อหลายสิบกลุ่มใหญ่ และแยกย่อยอีกหลายร้อยหมวดหมู่ย่อย.",
  },
];

export default data;