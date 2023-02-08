import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helepers/classNames";
import { Button, ThemeButton } from "shared/ui";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.langSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
