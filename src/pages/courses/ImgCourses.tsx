import img1 from "../../assets/imgCursos/1.png";
import img2 from "../../assets/imgCursos/2.png";
import img3 from "../../assets/imgCursos/3.png";
import img4 from "../../assets/imgCursos/4.png";
import img5 from "../../assets/imgCursos/5.png";
import img6 from "../../assets/imgCursos/6.png";
import img7 from "../../assets/imgCursos/7.png";
import img8 from "../../assets/imgCursos/8.png";
import img9 from "../../assets/imgCursos/9.png";
import img10 from "../../assets/imgCursos/10.png";
import img11 from "../../assets/imgCursos/11.png";
import img12 from "../../assets/imgCursos/12.png";
import img13 from "../../assets/imgCursos/13.png";
import img14 from "../../assets/imgCursos/14.png";
import img15 from "../../assets/imgCursos/15.png";
import img16 from "../../assets/imgCursos/16.png";
import img17 from "../../assets/imgCursos/17.png";
import img18 from "../../assets/imgCursos/18.png";
import img19 from "../../assets/imgCursos/19.png";
import img20 from "../../assets/imgCursos/20.png";
import img21 from "../../assets/imgCursos/21.png";
import img22 from "../../assets/imgCursos/22.png";
import img23 from "../../assets/imgCursos/23.png";
import img24 from "../../assets/imgCursos/24.png";
import img25 from "../../assets/imgCursos/25.png";
import img26 from "../../assets/imgCursos/26.png";
import img27 from "../../assets/imgCursos/27.png";
import img28 from "../../assets/imgCursos/28.png";
import img29 from "../../assets/imgCursos/29.png";
import img30 from "../../assets/imgCursos/30.png";
import img31 from "../../assets/imgCursos/31.png";
import img32 from "../../assets/imgCursos/32.png";
import img33 from "../../assets/imgCursos/33.png";
import img34 from "../../assets/imgCursos/34.png";
import img35 from "../../assets/imgCursos/35.png";
import img36 from "../../assets/imgCursos/36.png";
import img37 from "../../assets/imgCursos/37.png";
import img38 from "../../assets/imgCursos/38.png";
import img39 from "../../assets/imgCursos/39.png";
import img40 from "../../assets/imgCursos/40.png";
import img41 from "../../assets/imgCursos/41.png";
import img42 from "../../assets/imgCursos/42.png";
import img43 from "../../assets/imgCursos/43.png";
import img44 from "../../assets/imgCursos/44.png";
import img45 from "../../assets/imgCursos/45.png";
import img46 from "../../assets/imgCursos/46.png";
import img47 from "../../assets/imgCursos/47.png";
import img48 from "../../assets/imgCursos/48.png";
import img49 from "../../assets/imgCursos/49.png";
import img50 from "../../assets/imgCursos/50.png";
import img51 from "../../assets/imgCursos/51.png";
import img52 from "../../assets/imgCursos/52.png";
import img53 from "../../assets/imgCursos/53.png";
import img54 from "../../assets/imgCursos/54.png";
import img55 from "../../assets/imgCursos/55.png";
import img56 from "../../assets/imgCursos/56.png";
import img57 from "../../assets/imgCursos/57.png";
import img58 from "../../assets/imgCursos/58.png";
import img59 from "../../assets/imgCursos/59.png";
import img60 from "../../assets/imgCursos/60.png";
import img61 from "../../assets/imgCursos/61.png";
import React, { useState } from 'react';

const ImgCourses: React.FC = () => {

  const arrayImg: string[] = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35,
    img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45,
    img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55,
    img56, img57, img58, img59, img60,
    img61,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const cardsImg = arrayImg.map((item, id) => (
    <div key={id} className="course-card">
      <img src={item} className="img-card" alt={`Course ${id + 1}`} />
      <button onClick={() => openModal(item)}>Show Full-Size Image</button>
    </div>
  ));

  return (
    <>
      {cardsImg}
      {isOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          {selectedImage && <img src={selectedImage} className="img-card--full" alt="Full Size" />}
        </div>
      )}
    </>
  );
}

export { ImgCourses }
