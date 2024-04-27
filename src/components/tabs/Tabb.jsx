import React, { useState } from 'react';
import './Tab.css'
import ImageCarousel from '../../carousel/ImageCarousel';
import courimg2 from '../../img/courimg2.png'
function Tabb() {
  const images = [
    courimg2,
    courimg2,
    courimg2,
    // Add more image URLs as needed
  ];
  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Study">
          
        <ImageCarousel images={images} />
            
          
        </Tab>
        <Tab label="Quiz">
          <div>
          
            <p>Tab 2 content</p>
          </div>
        </Tab>
        <Tab label="Test">
          <div>
         
            <p>Tab 3 content</p>
          </div>
        </Tab>
        <Tab label="Game">
          <div>
          
            <p>Tab 4 content</p>
          </div>
        </Tab>
        <Tab label="Others">
          <div>
           
            <p>Tab 5 content</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  let content;

  React.Children.forEach(children, child => {
    if (child.props.label === activeTab) {
      content = child.props.children;
    }
  });

  const buttons = React.Children.map(children, child => child.props.label);

  return (
    <div>
      <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
      <div className="tab-content">{content}</div>
    </div>
  );
}

function TabButtons({ buttons, changeTab, activeTab }) {
  return (
    <div className="tab-buttons">
      {buttons.map(button => (
        <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)} key={button}>
          {button}
        </button>
      ))}
    </div>
  );
}

function Tab(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

export default Tabb;
