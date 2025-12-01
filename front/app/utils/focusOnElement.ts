/** 指定した要素にフォーカスを当てる */
export const focusOnElement = (selector: string) => {
  const element = document.querySelector<HTMLElement>(selector);

  if (element) {
    element.focus();
  }
};
