const PAGE_VALUES = Object.freeze({
  HOME: "home",
  MYIMAGEGALLERY: "gallery",
  CONTACT: "contact",
});

const ROOT_PATH = "";

const PAGE_PATHS = Object.freeze({
  HOME: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
  MYIMAGEGALLERY: `${ROOT_PATH}/${PAGE_VALUES.MYIMAGEGALLERY}`,
  CONTACT: `${ROOT_PATH}/${PAGE_VALUES.CONTACT}`,
});

export { PAGE_PATHS };
