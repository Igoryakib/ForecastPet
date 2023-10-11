const translateFn = async function (currentLanguage, text) {
  const languages = ["uk", "en"];
  const targetLanguage =
    languages[0] === currentLanguage ? languages[1] : languages[0];

  return;
};

export default translateFn;
