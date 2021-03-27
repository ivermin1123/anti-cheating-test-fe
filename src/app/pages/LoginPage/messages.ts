/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  loginPage: () =>
    _t(
      translations.loginPage.title,
      'Industry-standard Routing', // you can set the default value when extracting
    ),
  title: () => _t(translations.loginPage.title),
  signIn: () => _t(translations.loginPage.signIn),
  slogan: () => _t(translations.loginPage.slogan),
  labelUsername: () => _t(translations.loginPage.labelUsername),
  placeholderUsername: () => _t(translations.loginPage.placeholderUsername),
  labelPwd: () => _t(translations.loginPage.labelPwd),
  placeholderPwd: () => _t(translations.loginPage.placeholderPwd),
  continue: () => _t(translations.loginPage.continue),
};
