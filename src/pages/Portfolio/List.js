import React from 'react';
import { Button } from '../../globalStyles';
import {  RiFileList3Line } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IconContext } from 'react-icons/lib';
import {
  ListSection,
  ListWrapper,
  ListHeading,
  ListContainer,
  ListCard,
  ListCardInfo,
  ListCardIcon,
  ListCardPlan,
  ListCardFeatures,
  ListCardFeature
} from './List.elements';

function List() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ListSection>
        <ListWrapper>
          <ListHeading>Portfolio</ListHeading>
          <ListContainer>
            <ListCard
              to={{
                pathname: "https://mohamed-aymen-tlili.github.io/cv-aymen/",
              }}
              target="_blank"
            >
              <ListCardInfo>
                <ListCardIcon>
                  <RiFileList3Line />
                </ListCardIcon>
                <ListCardPlan>Website CV</ListCardPlan>
                <ListCardFeatures>
                  <ListCardFeature>Website CV</ListCardFeature>
                </ListCardFeatures>
                <Button primary>View</Button>
              </ListCardInfo>
            </ListCard>
            <ListCard
              to={{
                pathname: "https://mohamed-aymen-tlili.github.io/movies/",
              }}
              target="_blank"
            >
              <ListCardInfo>
                <ListCardIcon>
                  <FaThList />
                </ListCardIcon>
                <ListCardPlan>Website Movie</ListCardPlan>
                <ListCardFeatures>
                  <ListCardFeature>Website Movie</ListCardFeature>
                </ListCardFeatures>
                <Button primary>View</Button>
              </ListCardInfo>
            </ListCard>
            <ListCard
              to={{
                pathname: "https://mohamed-aymen-tlili.github.io/cv-aymen/",
              }}
              target="_blank"
            >
              <ListCardInfo>
                <ListCardIcon>
                  <GiShoppingCart />
                </ListCardIcon>
                <ListCardPlan>Website Shop</ListCardPlan>
                <ListCardFeatures>
                  <ListCardFeature>Website Shop</ListCardFeature>
                </ListCardFeatures>
                <Button primary>View</Button>
              </ListCardInfo>
            </ListCard>
          </ListContainer>
        </ListWrapper>
      </ListSection>
    </IconContext.Provider>
  );
}
export default List;
