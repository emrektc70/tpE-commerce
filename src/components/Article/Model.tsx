import { useEffect } from "react";
import View from "./View";

type Props = {
  getAllArticle: VoidFunction;
  articles: any[]
};

const ViewModel: React.FC<Props> = ({ articles, getAllArticle }) => {

  const description = "Découvrez notre sélection de gants de véhicule sur notre site e-commerce ! Que vous soyez un passionné d'automobile, un conducteur quotidien ou un professionnel de l'industrie automobile, nos gants sont conçus pour répondre à vos besoins spécifiques"
  useEffect(() => {
    getAllArticle()
  }, [getAllArticle])

  return <View description={description} articles={articles} />;
};

export default ViewModel;
