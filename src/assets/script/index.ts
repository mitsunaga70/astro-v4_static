
import { scrollfadeFunc } from "./modules/fade";
import { resizereload } from "./modules/resizereload";
import { tabFunc } from "./modules/tab";
import { accordionFunc } from "./modules/accordion";

import { topFunc } from "./pages/top";


document.addEventListener("astro:page-load", function () {
  const body = document.getElementById("body");

  scrollfadeFunc()
  resizereload()
  tabFunc()
  accordionFunc()


  // ========================================
  // ページごとの関数実行
  // ========================================
  if (body?.classList.contains("pageTop")) {
    topFunc();
  }

})
