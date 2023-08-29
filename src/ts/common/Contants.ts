const PAGE_VALUES = Object.freeze({
  HOME: "home",
  MYGALLERY: "gallery",
  CONTACT: "contact",
});

const ROOT_PATH = "";

const PAGE_PATHS = Object.freeze({
  HOME: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
  MYGALLERY: `${ROOT_PATH}/${PAGE_VALUES.MYGALLERY}`,
  CONTACT: `${ROOT_PATH}/${PAGE_VALUES.CONTACT}`,
});

export { PAGE_PATHS };
