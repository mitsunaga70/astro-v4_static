
import { scrollfadeFunc } from "./modules/fade";
import { resizereload } from "./modules/resizereload";

import { topFunc } from "./pages/top";


document.addEventListener("astro:page-load", function() {
  const body = document.getElementById("body");

scrollfadeFunc()
resizereload()


// ========================================
// ページごとの関数実行
// ========================================
if (body?.classList.contains("pageTop")) {
  topFunc();
}

})
