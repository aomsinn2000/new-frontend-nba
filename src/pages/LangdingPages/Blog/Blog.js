import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Container, Accordion } from "react-bootstrap";
//images
import Banner from "../../../assets/images/bannerBackground/คำถามที่พบบ่อย.png";

import "./Blog.css";
import Footer from "../../../assets/components/footer/Footer";

function Blog() {
  return (
    <div>
      <img src={Banner} className="size-banner" />
      <div className="background-company">
        <Container>
        <div className="text-center txt-history mb-5">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>คำถามที่พบบ่อย</b>
        </Typography>
        <Typography>NBA Digital Service</Typography>
        <Box className="line-name-header" />
      </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                บริการที่จะท่านจะได้รับ จากบริษัทบริษัทของเรา
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-Kanit">
                  1. บริการด้านเคาน์เตอร์เซอร์วิสครบจงจร และบิลเกินกำหนดชำระ
                  <br />
                  - รายได้จากค่าธรรมเนียมเคาร์เตอร์เชอร์วิส
                  ระบบสามารถกำหนดแองได้
                  <br />
                  - รายได้ค่าธรรมเนียมค่าบริการ ด้าน พรบ. <br />
                  - การรับฝากโอนเงิน ค่าธรรมเนียมศูนย์สามารถคิดเอง <br />
                  - จองตั๋วเครื่องบิน, รถทัวร์, รถไฟ, โรงแรม, อื่นๆ <br />
                </p>
                <p className="text-Kanit"> </p>
                <p className="text-Kanit">
                  2. บริการรับส่งพัสดุ- ครุภัณฑ์ ทั่วประเทศ จากแบรนด์ชั้นนำ
                </p>
                <p className="text-Kanit">3. บริการทางธุรกิจครบวงจร </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> บริการทางธุรกิจครบวงจร คืออะไร ?</Accordion.Header>
              <Accordion.Body> <p>
                        คือบริการต่าง ๆ ที่บริษัทมอบให้ลูกค้าของเเต่ละศูนย์ เช่น
                        <br />
                        - รับจดทะเบียน <br />
                        - รับทำบัญชี รายเดือน-รายปี <br />
                        - ปิดบัญชี เงินเดือน <br />
                        - ประกันสังคม <br />
                        - ยื่นขออนุญาตทำงานต่างด้าว <br />
                        - ยื่นขออนุญาตต่างๆ (บริษัท,ห้างหุ้นส่วน,บุคคล,อื่น)
                        รับเป็นที่ปรึกษาทางด้านธุรกิจครบวงจร <br />
                        - รับทำป้ายไวนิล, ป้ายไฟ, โลโก้, ตรายาง, นามบัตร, การ์ด, สติ๊กเกอร์-ซีทรู,
                        ออกแบบผลิตภัณฑ์, สื่อสิ่งพิมพ์ทุกชนิด <br />
                        - การตลาดดิจิตอล ออนไลน์ทุกช่องทาง, ทำ-ดูแลเพจ, เขียนโปรแกรม, เขียนเว็บไชต์,
                        ฯลฯ
                        <br />
                      </p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>สิ่งที่ลูกค้าต้องเตรียมคือ ?</Accordion.Header>
              <Accordion.Body> <p>
                        1. สถานที่ไว้ให้ลูกค้าที่เข้ามาใช้บริการได้เข้ามาแพคของส่งเล็กน้อย (3*3
                        เมตร)
                        <br />
                        - หากมีหน้าร้าน สามารถทำร่วมกันได้เลยคะ (ไม่มีข้อจำกัด) <br />
                        - หากไม่มีหน้าร้าน สามารถใช้บ้านตนเองทำศูนย์บริการลูกค้าได้เลยคะ <br />
                        2. คอมพิวเตอร์หรือโน๊ตบุ๊ค 1 เครื่อง <br />
                        (สำหรับเครื่องมือสองสำนักงานใหญ่มีจำหน่าย เครื่องละ 4,999 บาท
                        รับประกันและดูแล 6 เดือน) เพื่อให้เจ้าหน้าที่ลงติดตั้งระบบให้และสอนงาน{' '}
                        <br />
                        3. อินเตอร์เน็ต สามารถเชื่อมต่อฮอตปอร์ตมือถือ <br />
                        4. โต๊ะขาวยาวประชุม หรือเคาร์เตอร์ (ตามสะดวก)
                        เอาไว้สำหรับตั้งอุปกรณ์ต่างๆที่เราให้
                      </p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>หากลูกค้าสนใจเปิดศูนย์บริการลูกค้าธุรกิจครบวงจรของเรา </Accordion.Header>
              <Accordion.Body> <p>
                        แอดมินขอจะข้อมูลการปักหมุดและการแต่งตั้งผู้บริหารศูนย์ดังนี้คะ <br />
                        โดยการแอดไลน์ทางการของบริษัท @nba999 และส่งข้อมูลในการจัดตั้งศูนย์ฯ
                        เพื่อให้เจ้าหน้าที่บริการลูกค้าศูนย์ฯ ดูแลต่อนะคะ
                      </p></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>ข้อแตกต่างของแต่ละ ระดับศูนย์</Accordion.Header>
              <Accordion.Body>  <p>
                        ผู้บริหารศูนย์จังหวัดและอำเภอ
                        อนาคตอันใกล้ตอนโปรเจคใหม่ลงมากมายตามแผนบริหารของส่วนกลาง
                        หน้าที่และความรับผิดชอบจะมากขึ้น
                        ในการทำงานแบบบูรณาการร่วมกับส่วนกลางในการบริหารจัดการ โปรเจคใหม่ๆ
                        เพื่อสร้างงานสร้างอาชีพในจังหวัด และค่าตอบแทนต่างๆ
                        ก็จะกระจายไปตามความรับผิดชอบ เป็นค่าตอบแทนการบริหารคิดตามส่วนกลางกำหนดโดย
                        ทางส่วนกลางไม่ได้จบแค่โปรเจคแรกที่มีบริการมากมายคุ้มค่ากับการลงทุนแล้ว
                        แต่เรามองถึงการพัฒนาศักยภาพ และรายได้ให้ยั่งยืนต่อไป
                        ผลตอบแทนในอนาคตก็จะกระจายตามความรับผิดชอบ
                        และระดับศูนย์ตามหลักการบริหารที่ส่วนกลางกำหนด
                      </p></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Blog;
