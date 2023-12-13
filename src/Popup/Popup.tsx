import { useEffect, useRef } from "react";

import "./Popup.css";

export function Popup() {
  const popupRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const popup = popupRef.current;
    if (popup) {
      popup.showModal();
    }
    return () => {
      if (popup) {
        popup.close();
      }
    };
  }, []);
  return (
    <dialog id="popup-con" ref={popupRef}>
      <div id="popup">
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <button
          id="close"
          aria-label="Close"
          onClick={() => popupRef.current?.close()}
        >
          X
        </button>
        <p>
          This Smart Shopping List App was made by early-career developers at
          The Collab Lab.
        </p>
        <p>This project has now been archived.</p>
        <div className="token">
          <p>To view the demo shopping list, enter the three word token: </p>
          <div id="threeWordToken">
            <p>the collab lab</p>
            <button
              id="copy"
              onClick={() => navigator.clipboard.writeText("the collab lab")}
            >
              Copy Token
            </button>
          </div>
        </div>
        <p className="not-supported">
          Please note that the following features are no longer supported:
        </p>
        <ul>
          <li>Creating new shopping lists</li>
          <li>Adding & deleting items from the shopping list</li>
          <li>Marking items on the list as purchased</li>
        </ul>
        <div className="tcl">
          <p>
            The Collab Lab provides collaborative, remote project practice for
            early career developers.
          </p>
          <a
            href="https://the-collab-lab.codes"
            target="_blank"
            rel="noreferrer"
            aria-label="link text - new window"
          >
            the-collab-lab.codes
          </a>
        </div>
      </div>
    </dialog>
  );
}
