export const appConfig = {
  // Nav Items shown at the navbar/app menu
  // overwrite => false [default]
  // If overwrite is true, then the `items` will
  // overwrite the auto-generated ones.
  // If overwrite is false, then the `items` will
  // be merged with the default ones.
  // TIP: you can use overwrite: true to hide
  // GRANDPARENTs by including the public ones
  // to `items` like so:
  // items: [{ link: "/guide", name: "Guide" }]
  nav: {
    overwrite: false,
    items: []
  },
  // Used in title meta tag
  title: "E-PORTOVOLIO",
  // Sorting method
  // Types: alphabetically, modified
  // alphabetically => A-Z (reverse: Z-A) [default]
  // modified => last modified (reverse: first modified)
  sorting: {
    type: "alphabetically",
    reverse: false
  },
  markdown: {
    base: "page"
  }
};

export default appConfig;
