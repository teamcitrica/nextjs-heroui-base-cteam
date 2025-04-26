import React, { ReactNode } from 'react';
import {Card as CardHeroUI, CardBody as CardBodyHeroUI} from "@heroui/card";

const Card = ({children}: {children: ReactNode}) => {
  return (
    <CardHeroUI>
      <CardBodyHeroUI>
        {children}
      </CardBodyHeroUI>
    </CardHeroUI>
  );
}

export default Card