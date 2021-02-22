const fetch = require("node-fetch");
const { config } = require("../config");

exports.getCat = async function (gif, tag, text) {
  try {
    const response = await fetch(getPath(gif, tag, text));
    return await response.blob();
  } catch (e) {
    console.log(e);
    throw Error("Error to get cat.");
  }
};

function getPath(gif, tag, text) {
  let suffix = "/cat";

  if (gif == "true") {
    suffix += "/gif";
  } else {
    if (tag != null && tag != "") {
      suffix += "/" + tag;
    }
    if (text != null && text != "") {
      suffix += "/says/" + text;
    }
  }
  return `${config.catHost}` + suffix;
}
