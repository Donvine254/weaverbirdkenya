import Clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = "zf05dsgkil";

export function initClarity() {
  if (typeof window === "undefined") return;
  Clarity.init(CLARITY_PROJECT_ID);
}

export default Clarity;
