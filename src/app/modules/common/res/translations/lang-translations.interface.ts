import {Language} from "./language.enum";
import {TranslationUnit} from "./translation-unit.interface";

export interface LanguageTranslations {
  language: Language,
  translations: TranslationUnit[],
}
