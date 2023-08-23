import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  classes?: string;
}
const ShelfIcon = ({classes = 'w-6 h-6 text-white'}: Props) => (
  <Svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
    <Path d="M11.997 24c-6.438.012-9.21-7.697-10.997-8.879 6.163-2.661 9.556.165 11 2.589l.034-.057c1.463-2.41 4.851-5.172 10.966-2.532-1.787 1.182-4.559 8.891-10.997 8.879h-.006zm.006-2c4.096 0 7.328-5.716 7.328-5.716-2.299-.522-4.16.193-7.258 4.59l-.073.105c-3.141-4.491-5.014-5.221-7.331-4.695 0 0 3.232 5.716 7.328 5.716h.006zm.05-7c-1.405 0-2.615-.863-3.125-2.087-1.337.172-2.695-.493-3.37-1.663-.703-1.216-.56-2.696.245-3.75-.805-1.054-.947-2.534-.245-3.751.675-1.17 2.039-1.837 3.371-1.662.51-1.224 1.719-2.087 3.124-2.087 1.404 0 2.614.863 3.125 2.087 1.333-.176 2.694.492 3.371 1.662.701 1.217.558 2.697-.246 3.751.804 1.054.947 2.533.246 3.75-.677 1.17-2.038 1.834-3.371 1.663-.511 1.224-1.721 2.087-3.125 2.087zm-1.391-5.09l.008 1.713c.003.76.624 1.377 1.383 1.377s1.38-.617 1.383-1.376l.008-1.71 1.487.846c.643.367 1.521.123 1.885-.51.38-.657.156-1.504-.501-1.886l-1.48-.864 1.48-.864c.657-.382.881-1.229.501-1.887-.364-.631-1.244-.874-1.883-.509l-1.489.852-.008-1.716c-.003-.758-.624-1.376-1.383-1.376s-1.38.618-1.383 1.376l-.008 1.714-1.488-.849c-.641-.368-1.518-.123-1.884.508-.38.659-.155 1.505.5 1.887l1.481.864-1.481.864c-.655.382-.88 1.228-.5 1.886.366.633 1.245.877 1.884.51l1.488-.85zm1.338-4.431c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z" />
  </Svg>
);

export default ShelfIcon;
