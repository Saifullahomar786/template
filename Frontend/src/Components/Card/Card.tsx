import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'

interface CardProps {
  title:string,
  png: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  value: string;
}

const Card: React.FC<CardProps> = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    
     <CompactCard param={props} />
  );

};

interface CompactCardProps {
  param: CardProps;
}

const CompactCard: React.FC<CompactCardProps> = ({ param }) => {
  const Png = param.png;

  return (
    <div className="CompactCard" style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow
    }}>
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
      </div>
      <div className='detail'>
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
};

export default Card;
