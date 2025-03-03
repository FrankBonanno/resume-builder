import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Editor",
};

const EditorPage = () => {
  return <ResumeEditor />;
};

export default EditorPage;
