const PAGE_VALUES = Object.freeze({
  HOME: "home",
  GALLERY: "gallery",
  CONTACT: "contact"
});

const ROOT_PATH = "";

const PAGE_PATHS = Object.freeze({
  HOME: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
  GALLERY: `${ROOT_PATH}/${PAGE_VALUES.GALLERY}`,
  CONTACT: `${ROOT_PATH}/${PAGE_VALUES.CONTACT}`,
});

export {
    PAGE_PATHS
}
