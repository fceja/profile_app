const PAGE_VALUES = Object.freeze({
  HOME_PAGE: "home",
  GALLERY_PAGE: "gallery",
  CONTACT_PAGE: "contact",
});

const ROOT_PATH = "";

const PAGE_PATHS = Object.freeze({
  HOME_PAGE: `${ROOT_PATH}/${PAGE_VALUES.HOME_PAGE}`,
  GALLERY_PAGE: `${ROOT_PATH}/${PAGE_VALUES.GALLERY_PAGE}`,
  CONTACT_PAGE: `${ROOT_PATH}/${PAGE_VALUES.CONTACT_PAGE}`,
});

export { PAGE_PATHS };
