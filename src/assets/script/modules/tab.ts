
export function tabFunc() {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const navLists = tab.querySelectorAll("[data-tab-navList]");
    const contentItems = tab.querySelectorAll("[data-tab-contentItem]");

    navLists.forEach((navList) => {
      const navItems = navList.querySelectorAll("[data-tab-navItem]");
      navItems.forEach((navItem, index) => {
        navItem.addEventListener("click", () => {
          // すべてのナビゲーションアイテムからアクティブクラスを削除
          navLists.forEach((otherNavList) => {
            otherNavList
              .querySelectorAll("[data-tab-navItem]")
              .forEach((item) => item.classList.remove("is-active"));
          });
          // 関連するすべてのナビゲーションアイテムにアクティブクラスを追加
          navLists.forEach((otherNavList) => {
            if (otherNavList.children[index]) {
              otherNavList.children[index].classList.add("is-active");
            }
          });

          // すべてのコンテンツアイテムからアクティブクラスを削除
          contentItems.forEach((item) => item.classList.remove("is-active"));
          // 対応するコンテンツアイテムにアクティブクラスを追加
          if (contentItems[index]) {
            contentItems[index].classList.add("is-active");
          }
        });
      });
    });

    // 初期表示設定
    if (navLists[0] && navLists[0].children[0]) {
      (navLists[0].children[0] as HTMLElement).click();
    }
  });
}
