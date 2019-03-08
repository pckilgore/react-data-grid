import React from "react";

export const wrapOrRender = (Wrapper, MaybeComponent, MaybeComponentProps) => {
  if (typeof MaybeComponent === "string")
    return <Wrapper {...MaybeComponentProps}>{MaybeComponent}</Wrapper>;
  return <MaybeComponent {...MaybeComponentProps} />;
};
