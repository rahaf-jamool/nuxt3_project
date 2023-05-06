// Value Parameters : must be the first letter is Uppercase as 'Title'
export const useTranslate = (object, value) => {
  const lang = useLang().value ? useLang().value : 'en';
  const langUpperCase = lang.charAt(0).toUpperCase() + lang.slice(1);
  const word = value + langUpperCase;
  return object[`${word}`]
} 