import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  CardBody,
  CardRight,
  CardRightButtom,
  CardRightButtomRight,
  ShareIcon,
} from "./Character.style";

const Characters = ({ character }) => {
  const { name, image, created } = character;

  return (
    <CardBody>
      <div>
        <img src={image} alt="" />
      </div>
      <CardRight>
        <div>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quisquam perferendis aspernatur
          </p>
        </div>
        <CardRightButtom>
          <span>{created}</span>
          <CardRightButtomRight>
            <ShareIcon>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </ShareIcon>
            <ShareIcon>
              <h6>Beğen</h6>
            </ShareIcon>
          </CardRightButtomRight>
        </CardRightButtom>
      </CardRight>
    </CardBody>
  );
};

export default Characters;
