import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSingupFields: 'USERNAME_ONLY',
});
