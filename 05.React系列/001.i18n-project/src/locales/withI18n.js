import React from "react";

import I18nContext from "./I18nContext";

const withI18n = (WrappedComponent) => {
  return (props) => (
    <I18nContext.Consumer>
      {(i18n) => <WrappedComponent {...i18n} {...props} />}
    </I18nContext.Consumer>
  );
};

export default withI18n;
