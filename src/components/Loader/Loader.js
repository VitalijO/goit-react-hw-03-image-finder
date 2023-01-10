
import { Blocks} from 'react-loader-spinner';
import  css from "./Loader.module.css"


export const Loader = () => {
  return (
    <div className = {css.Loader}> 
 <Blocks 
  visible={true}
  height="180"
  width="180"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
</div>
  );
};


