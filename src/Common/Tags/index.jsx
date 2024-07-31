import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef} from "react";
import "./style.css";

function Tags() {
  const tabRef = useRef(null);
  // const [crrIndex , setCrrIndex] = useState(0);

  const handleLeft = () => {
    if (tabRef.current) {
        console.log(tabRef.current.scrollWidth);
        tabRef.current.scrollLeft += 100;
      }
  }
  const handleRight = () => {
    if (tabRef.current) {
        console.log(tabRef.current.scrollWidth);
        tabRef.current.scrollLeft -= 100;
      }
  }

  return (
    <>
      <div className="tags-container">
        <div className="tags-title">Tags</div>
        <div className="tags-line"></div>
        <div className="tagscroll">
          <div className="left-angle" onClick={handleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="tags" ref={tabRef}>
            <div className="tag-item">Pakistan</div>
            <div className="tag-item">World</div>
            <div className="tag-item">Cricket</div>
            <div className="tag-item">Football</div>
            <div className="tag-item">Bussiness</div>
            <div className="tag-item">Technology</div>
            <div className="tag-item">Google</div>
            <div className="tag-item">Elon Mask</div>
            <div className="tag-item">Apple Company</div>
            <div className="tag-item">Culture</div>
            <div className="tag-item">Karachi</div>
            <div className="tag-item">Car</div>
            <div className="tag-item">Bike</div>
          </div>
          <div className="right-angle" onClick={handleRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>

        <div className="tags-line"></div>
      </div>
    </>
  );
}

export default Tags;
