import View from "./View";
import { useEffect } from "react";

type Props = {
  article: any;
};

const ViewModel: React.FC<Props> = ({ article }) => {
  return <View article={article} />;
};

export default ViewModel;
