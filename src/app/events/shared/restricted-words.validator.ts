import { FormControl } from "@angular/forms";

  // custom validator (function) for abstrac's textarea
  export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any; } => {

    if (!words) return null;

    let invalidWords = words
      .map(word => control.value.includes(word) ? word : null)
      .filter(word => word != null);
    return invalidWords && invalidWords.length > 0 ? { 'restrictedWord': invalidWords.join(',') } : null;
  };
};