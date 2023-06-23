import View from "./View";
import { useCallback } from "react";

type Props = {
  postArticle: VoidFunction;
  nomArticle: string
  descriptionArticle: string;
  photosArticle: string;
  changeGlobalFields: (field: string, value: any) => void;
  profilUser: string;
};

const ViewModel: React.FC<Props> = ({
  postArticle,
  nomArticle,
  descriptionArticle,
  photosArticle,
  changeGlobalFields,
  profilUser
}) => {

  const addArticle = useCallback(() => {
    postArticle()
  }, [postArticle])

  const editNomArticle = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('nomArticle', value)
  }, [changeGlobalFields])

  const editDescriptionArticle = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('descriptionArticle', value)
  }, [changeGlobalFields])

  const editPhotosArticle = useCallback((e: React.BaseSyntheticEvent) => {
    const value = e.target.value;
    changeGlobalFields('photosArticle', value)
  }, [changeGlobalFields])

  return <View
    addArticle={addArticle}
    nomArticle={nomArticle}
    descriptionArticle={descriptionArticle}
    photosArticle={photosArticle}
    editNomArticle={editNomArticle}
    editDescriptionArticle={editDescriptionArticle}
    editPhotosArticle={editPhotosArticle}
    profilUser={profilUser}
  />;
};

export default ViewModel;
