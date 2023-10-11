import React, { useState } from "react";

import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
//images
import Banner from "../../assets/images/bannerBackground/ดาวน์โหลด.png";



import "./Download.css"; // ปรับเป็นชื่อไฟล์ของคุณ
import { BsPrinter ,BsGoogle,BsBook} from "react-icons/bs";
import Footer from "../../assets/components/footer/Footer";



function Blog() {
  const [isInstallBySeftVisible, setIsInstallBySeftVisible] = useState(true);
  const [isProgramVisible, setIsProgramVisible] = useState(false);
  const [isDiverHPVisible, setIsDiverHPVisible] = useState(false);
  const [isDiverLabelVisible, setIsDiverLabelVisible] = useState(false);
  const [isDiverReceiptVisible, setIsDiverReceiptVisible] = useState(false);
  const [isGoogleDriveVisible, setIsGoogleDriveVisible] = useState(false);

  const toggleInstallBySelf = () => {
    setIsInstallBySeftVisible(true);
    setIsProgramVisible(false);
    setIsDiverHPVisible(false);
    setIsDiverLabelVisible(false);
    setIsDiverReceiptVisible(false);
    setIsGoogleDriveVisible(false);
  };
  const toggleProgram = () => {
    setIsProgramVisible(true);
    setIsDiverHPVisible(false);
    setIsDiverLabelVisible(false);
    setIsDiverReceiptVisible(false);
    setIsGoogleDriveVisible(false);
    setIsInstallBySeftVisible(false);
  };

  const toggleDiverHP = () => {
    setIsProgramVisible(false);
    setIsDiverHPVisible(true);
    setIsDiverLabelVisible(false);
    setIsDiverReceiptVisible(false);
    setIsGoogleDriveVisible(false);
    setIsInstallBySeftVisible(false);
  };
  const toggleDiverLabel = () => {
    setIsProgramVisible(false);
    setIsDiverHPVisible(false);
    setIsDiverLabelVisible(true);
    setIsDiverReceiptVisible(false);
    setIsGoogleDriveVisible(false);
    setIsInstallBySeftVisible(false);
  };
  const toggleDiverReceipt = () => {
    setIsProgramVisible(false);
    setIsDiverHPVisible(false);
    setIsDiverLabelVisible(false);
    setIsDiverReceiptVisible(true);
    setIsGoogleDriveVisible(false);
    setIsInstallBySeftVisible(false);
  };
  const toggleGoogleDrive = () => {
    setIsProgramVisible(false);
    setIsDiverHPVisible(false);
    setIsDiverLabelVisible(false);
    setIsDiverReceiptVisible(false);
    setIsGoogleDriveVisible(true);
    setIsInstallBySeftVisible(false);
  };
  return (
    <div>
      <img src={Banner} className="size-banner" />
      <div className="background-blog">
        <div>
        
          <div className="padding-driver">
            <Row className="justify-content-center">
              <Col xl={2} md={4} xs={6}> <div className="test" onClick={toggleInstallBySelf}>
                <BsBook className="icon-size"></BsBook>
                <p><strong>ติดตั้งด้วยตัวเอง</strong></p>
                <p className="open-desktop">  โปรแกรมสนับสนุนระยะใกล้ เพื่อเพิ่มความสะดวกในการเเก้ไขปัญหา</p></div>
                </Col>
                <Col  xl={2} md={4} xs={6}> <div className="test" onClick={toggleGoogleDrive}>
              <BsGoogle className="icon-size"></BsGoogle>
                <p><strong> Google Drive</strong></p>
                <p className="open-desktop"> เป็นส่วนที่เก็บไดฟ์เวอร์ทั้งหมดในกรณีที่ลูกค้าโหลดจากเว็บไซต์เองไม่ได้</p></div></Col>
              <Col  xl={2} md={4} xs={6}> <div className="test" onClick={toggleProgram}>
              <BsPrinter className="icon-size"></BsPrinter>
                <p><strong> โปรแกรมสนับสนุน</strong></p>
                <p  className="open-desktop">  โปรแกรมสนับสนุนระยะใกล้ เพื่อเพิ่มความสะดวกในการเเก้ไขปัญหา</p></div></Col>
              <Col  xl={2} md={4} xs={6}> <div className="test" onClick={toggleDiverHP}>
              <BsPrinter className="icon-size"></BsPrinter>
                <p><strong>   ไดร์เวอร์เครื่องปริ้น HP</strong></p>
                <p className="open-desktop">      ส่วนเหลือในการดาวน์โหลดไดร์เวอร์เครื่องปริ้นเตอร์</p></div></Col>
              <Col  xl={2} md={4} xs={6}> <div className="test" onClick={toggleDiverLabel}>
              <BsPrinter className="icon-size"></BsPrinter>
                <p><strong>   ไดร์เวอร์ Xprinter(Label)</strong></p>
                <p className="open-desktop">  ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ฉลาก</p></div></Col>
              <Col  xl={2} md={4} xs={6}> <div className="test" onClick={toggleDiverReceipt}>
              <BsPrinter className="icon-size"></BsPrinter>
                <p><strong>  ไดร์เวอร์ Xprinter(Receipt)</strong></p>
                <p className="open-desktop"> ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ใบเสร็จขนาดเล็ก</p></div></Col>
            
            </Row>
            {isInstallBySeftVisible && <div className="background-detail">
              <Accordion className="mt-5">
              <h1 className="px-3 pt-3">ติดตั้งด้วยตัวเอง</h1>
                             <Accordion.Item eventKey="0">
                  <Accordion.Header>คู่มือการติดตั้งด้วยตัวเอง</Accordion.Header>
                  <Accordion.Body>
                    <a href="https://drive.google.com/drive/folders/12W2bJj438YsL9X27WgXaKTHwgbY-cFoK?usp=sharing"><Button variant="primary">ดาวน์โหลดด้วยตัวเอง</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
                
              </Accordion>
              </div>}
            {isProgramVisible && <div className="background-detail">
              <Accordion className="mt-5"> 
                  <h1 className="px-3 pt-3">โปรแกรมสนับสนุน</h1>
                  <p className=" px-3 open-mobile">  โปรแกรมสนับสนุนระยะใกล้ เพื่อเพิ่มความสะดวกในการเเก้ไขปัญหา</p>

                  <Accordion.Item eventKey="1">
                  <Accordion.Header>    โปรเเกรม TeamViewer (สำหรับ windows)
                  </Accordion.Header>
                  <Accordion.Body>
                  ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                    <a href="https://drive.google.com/file/d/1j8r5SA-5tdHoe2LHPINRWoYDYwjwByzy/view?usp=sharing">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>   โปรเเกรม TeamViewer (สำหรับ Mac)
                  </Accordion.Header>
                  <Accordion.Body>
                  ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                    <a href="https://download.teamviewer.com/download/TeamViewer.dmg">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>    โปรเเกรม Anydesk (สำหรับ windows)
                  </Accordion.Header>
                  <Accordion.Body>
                  ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                    <a href="https://anydesk.com/en/downloads/thank-you?dv=win_exe">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>    โปรเเกรม Anydesk (สำหรับ Mac)
                  </Accordion.Header>
                  <Accordion.Body>
                  ใช้สำหรับการเข้าถึงคอมพิวเตอร์ระยะไกลทุกวันตลอด 24 ชั่วโมง
                        ที่ทำให้ช่วยแก้ปัญหาได้อย่างดีเยี่ยม ไม่ว่าจะเป็นการตรวจสอบจากระยะไกล
                        การบำรุงรักษาเซิร์ฟเวอร์ หรือการเชื่อมต่อกับ PC หรือ Mac
                        ทั้งที่สำนักงานหรือที่บ้าน
                    <a href="https://anydesk.com/en/downloads/thank-you?dv=mac_dmg">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>}
            {isDiverHPVisible && <div className="background-detail">
              <Accordion className="mt-5">
                <Accordion.Item eventKey="1">
                  <h1 className="px-3 pt-3">  ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows All (Basic
                    Driver)
                  </h1>
                  <p className="px-3 open-mobile"> ส่วนเหลือในการดาวน์โหลดไดร์เวอร์เครื่องปริ้นเตอร์</p>
                  <Accordion.Header>
                    ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows All (BasicDriver)</Accordion.Header>
                  <Accordion.Body>
                    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows (Basic Driver)
                    <a href="https://www.infdriver.com/download/hp/hp-deskjet-d2300/hp-deskjet-d2300-basic-driver.zip">    <Button variant="primary">ดาวน์โหลด</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>  ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 7
                  </Accordion.Header>
                  <Accordion.Body>
                    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 7
                    <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>     ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 10
                  </Accordion.Header>
                  <Accordion.Body>
                    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 10
                    <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>  ไดร์เวอร์เครื่องปริ้น HP2300 (Driver Printer hp 2300) Windows 11
                  </Accordion.Header>
                  <Accordion.Body>
                    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 11
                    <a href="https://www.mediafire.com/file/og6kvfgunih1n4x/DJ2300_Full_WebPack_51.1.4707.exe">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ macOS 10.11 to10.15
                  </Accordion.Header>
                  <Accordion.Body>
                    สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows 11
                    <a href="https://www.mediafire.com/file/4gvk3lkwddgowdu/HP_DJ_2300_HP_Easy_Start.app_mac.zip">    <Button variant="primary">ดาวน์โหลด</Button></a>

                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>




            </div>}
            {isDiverLabelVisible && <div className="background-detail">
            <Accordion className="mt-5">
            <h1 className="px-3 pt-3">  ไดรเวอร์เครื่องพิมพ์ฉลาก Xprinter (Label)</h1>
            <p className="px-3 open-mobile">  ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ฉลาก</p>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ไดรเวอร์เครื่องพิมพ์ฉลาก (Label) Windows</Accordion.Header>
                  <Accordion.Body>
                  สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows
                  <a href="https://www.xprintertech.com/label-driver"><Button variant="primary">ดาวน์โหลด</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> ไดรเวอร์เครื่องพิมพ์ฉลาก (Label) Mac</Accordion.Header>
                  <Accordion.Body>
                  สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Mac
                  <a href="https://www.xprintertech.com/label-printer-driver-mac"><Button variant="primary">ดาวน์โหลด</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


            </div>}
            {isDiverReceiptVisible && <div className="background-detail">
            <Accordion className="mt-5">
            <h1 className="px-3 pt-3"> ไดรเวอร์เครื่องใบเสร็จ Xprinter (Receipt)</h1>
            <p className="px-3 open-mobile"> ส่วนช่วยเหลือในการดาวน์โหลดไดรเวอร์เครื่องพิมพ์ใบเสร็จขนาดเล็ก</p>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ไดรเวอร์เครื่องพิมพ์ใบเสร็จ (Receipt) Windows</Accordion.Header>
                  <Accordion.Body>
                  สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows
                  <a href="https://www.xprintertech.com/58-76-80mm-driver"><Button variant="primary">ดาวน์โหลด</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header> ไดรเวอร์เครื่องพิมพ์ใบเสร็จ (Receipt) Mac</Accordion.Header>
                  <Accordion.Body>
                  สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Mac
                  <a href="https://www.xprintertech.com/receipt-printer-mac"><Button variant="primary">ดาวน์โหลด</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
              
              </div>}
            {isGoogleDriveVisible && <div className="background-detail">
            <Accordion className="mt-5">
            <h1 className="px-3 pt-3">   Google Drive</h1>
            <p className="px-3 open-mobile"> เป็นส่วนที่เก็บไดฟ์เวอร์ทั้งหมดในกรณีที่ลูกค้าโหลดจากเว็บไซต์เองไม่ได้</p>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>ไปยังไดรเวอร์ที่ทำการเก็บไฟล์ Driver</Accordion.Header>
                  <Accordion.Body>
                  สามารถคลิ๊กเพื่อดาวน์โหลดและติดตั้งได้ทันที สำหรับ ผู้ที่ใช้ Windows
                  <a href="https://drive.google.com/drive/folders/12W2bJj438YsL9X27WgXaKTHwgbY-cFoK?usp=sharing"><Button variant="primary">ไปยังไดรเวอร์ที่ทำการเก็บไฟล์</Button></a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
              
              </div>}


          </div>
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
}
export default Blog;
