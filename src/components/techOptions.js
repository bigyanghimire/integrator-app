import React from "react";
import Button from "./theButton";

export default function TechOptions(props) {
  return (
    <div id="tech-kind">
      <ul style={{ top: `${props.menuSlideDown}px` }}>
        <li>
          <Button
            onClick={props.topicChoose}
            value="Html&CSS"
            children="HTML&CSS"
          />
        </li>
        <li>
          <Button
            onClick={props.topicChoose}
            value="JavaScript"
            children="JavaScript"
          />
        </li>
        <li>
          <Button 
            onClick={props.topicChoose} 
            value="React" 
            children="React" 
          />
        </li>
      </ul>
    </div>
  );
}
