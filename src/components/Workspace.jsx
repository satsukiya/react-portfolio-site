import { useEffect } from 'react';

const Workspace = (props) => {

  useEffect(() => {
    console.log("workspace");
  });

  return (
    <div id="workspace" >
      <div className="container">
        <div className="workspace-contents">
          <h2>
            {props.title}
          </h2>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export { Workspace };
