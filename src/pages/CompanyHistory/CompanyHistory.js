

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//images
import Banner from "../../assets/images/bannerBackground/ประวัติบริษัท.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col ,Button } from "react-bootstrap";

import "./CompanyHistory.css"
import Footer from "../../assets/components/footer/Footer";


function CompanyHistory() {
  return (
    <div>
      <img src={Banner} className="size-banner" />
       <div className="background-company">
      <Container>
     
      <div className="video-history">
      <iframe
              width="100%"
              src="https://www.youtube.com/embed/3ZGcaGhkCTI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
      </div>


      <div className="text-center txt-history">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>ประวัติความเป็นมา</b>
        </Typography>
        <Typography>NBA Digital Service</Typography>
        <Box className="line-name-header" />
      </div>

      <div className="MainCard">
        <li>เอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์ จำกัด ก่อตั้งเมื่อ 2554</li>
        <li>
          โดยเป็นบุคคลธรรมดาประกอบธุรกิจให้บริการทางด้านสำนักงานบัญชี-การเงินภาษี
          และบริการทางด้านธุรกิจทั่วไป จนกระทั้งมาในปี 2563 ทั้งโลกประสบปัญหาปัญหาโรคระบาด
          ของเชื้อไวรัส โควิด-19 รวมทั้งในประเทศไทย คณะผู้บริหารจึงได้แปลสภาพจากบุคคลธรรมดา
          เป็นนิติบุคคล ในนามบริษัท เอ็นบีเอ ดิจิตอล เซอร์วิส เซ็นเตอร์ จำกัด
          “ของคนไทย..โดยคนไทย..เพื่อคนไทย”
        </li>
        <li>
          โดยเปลี่ยนแปลงแผนการบริหารจัดการ
          และการตลาดในยุดดิจิตอลจึงได้เล็งเห็นว่าในสภาวะการทำงานในยุคที่ต้องจำกัดการเดินทางการสัมผัส
          การเว้นระยะห่าง และการรับผิดชอบต่อสังคม
          มีความจำเป็นต้องใช้เทคโนโลยีดิจิตอลมาช่วยในการทำงานและการประกอบธุรกิจ
          เพื่อให้ตอบสนองภารกิจ ในธุรกิจที่ต้องดำเนินการไปในสภาวะปัจจุบันให้ได้ กระทั้งถึงปัจจุบัน
        </li>
        <li>
          เราได้พัฒนาและนำระบบดิจิตอลฯ มาใช้โดยทำเป็นแพลทฟอร์มทางธุรกิจ (platform)
          โดยเราเขียนโปรแกรมและพัฒนาระบบเองทั้งหมด โดยรวบรวมกิจกรรมทางธุรกิจ มาให้บริการในแพลทฟอร์ม
          “ระบบบริหารจัดการศูนย์” E-Branch เพื่อให้บริการลูกค้าทั่วประเทศในรูปแบบ
        </li>
        <li>
          ศูนย์บริการลูกค้าครบวงจรทางด้านธุรกิจของ เอ็นบีเอฯ (ระดับภาค ระดับเขต ระดับจังหวัด
          ระดับอำเภอ และระดับตำบล) ซึ่งบริการของเรา ตั้งแต่ให้คำปรึกษาเริ่มต้นประกอบกิจการ
          จนกระทั้งเลิกประกอบกิจการ อีกทั้งบริการทุกๆ ด้านทางธุรกิจ อธิเช่น สร้างแบรนด์สินค้า
          ให้บริการระบบบริหารจัดการครบวงจรทางด้าน แพลทฟอร์ม ธุรกิจ (platform)
          ซึ่งปัจจุบันให้บริการทั่วประเทศ 77 จังหวัด
        </li>
        <li>
          ให้บริการด้านเคาน์เตอร์เซอร์วิสฝากจ่ายค่าใช้จ่ายต่างๆ
          ผ่านระบบบริหารจัดการศูนย์ซึ่งเป็นบริการฝากจ่ายผ่านสำนักงานใหญ่ดำเนินการให้ทั้งหมดทุกรายจ่าย
          บริการด้านขนส่งพัสดุไปรษณีย์ในประเทศ-ต่างประเทศ ผ่านพันธมิตรทางธุรกิจหลายแบรนด์หลัก
          และให้บริการทางด้านธุรกิจครบวงจร ในการผลิตงานอธิเช่น ป้ายไวนิล สื่อสิ่งพิมพ์ทุกชนิด ตรายาง
          ป้ายไฟและป้ายทุกชนิด เขียนโปรแกรม เขียนเว็บไชต์ ออกแบบผลิตภัณฑ์ และสื่อการตลาด
          ร่วมทั้งการตลาดดิจิตอลทุกรูปแบบ รวมถึงการให้บริการแพลทฟอร์มบัญชีดิจิตอล “Accounting
          E-Transfer” เพื่อให้ผู้ประกอบการรุ่นใหม่ได้ใช้งานจริงและเรียนรู้ระบบและระเบียนต่างๆ
          ทางบัญชี-การเงิน กฎหมาย-ภาษี และความรู้ทางด้านธุรกิจ
          ผ่านแพลทฟอร์มบัญชีของเราครบวงจรสะดวกสบายเท่าทันสภาวะปัจจุบัน
        </li>
        <li>
          เรายังมีโปรเจคอีกมากมายที่จะลงให้บริการ ณ ศูนย์ที่เปิดไปแล้วทั่วประเทศมีรายได้ต่อเนื่อง
          เอ็นบีเอฯ มุ่งมันและสร้างสรรค์ สร้างแพลทฟอร์มแพลทฟอร์ม (platform)
          เครื่องมืออันทรงพลังที่จะสานต่อธุรกิจของศูนย์ในเป็นจริง เน้นสร้างรายได้ที่แท้จริง
          ต้นทุนต่ำ ตามนโนบายผู้บริหาร ตามสโลแกน (ที่เดียวครบ-จบที่เรา-จบทุกบริการ)
          รวมทั้งสานต่อปณิธานผู้บริหารสืบเนื่องมาจนถึงปัจจุบัน (สร้างเงิน-สร้างงาน-สานต่ออาชีพ)
        </li>
        <li>
          เราหวังเป็นอย่างยิ่งว่าจะได้เคียงคู่ประเทศไทยและชุมชนเป็นศูนย์กลางในการพัฒนาระบบ
          แพลทฟอร์มที่ให้บริการครบวงจรทุกด้านต่อไป
        </li>
      </div>
       

    </Container></div>
    <Footer/>
    </div>
  );
}
export default CompanyHistory;
