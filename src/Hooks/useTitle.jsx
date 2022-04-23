import { useEffect, useState } from "react";

const useTitle = (titleText) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = titleText + " - product management app";
    setTitle(titleText);
  }, [titleText]);
  return [title, setTitle];
};

export default useTitle;
