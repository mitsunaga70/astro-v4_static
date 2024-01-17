type siteType = {
  siteTitle: string;
  siteDesc: string;
  siteUrl: string;
};
const siteUrl = import.meta.env.PUBLIC_SITE_URL;

export const siteMeta: siteType = {
  siteTitle: "サイトタイトル",
  siteDesc: "ディスクリプションが入ります。",
  siteUrl: siteUrl,
};

export const pageInfo = {
  top: {
    pageTitle: "",
    pageDesc: "",
    pageClass: "pageTop",
    pageNoindex: true,
  },
  page404: {
    pageTitle: "お探しのページが見つかりませんでした",
    pageDesc: "",
    pageNoindex: true,
  },
};
