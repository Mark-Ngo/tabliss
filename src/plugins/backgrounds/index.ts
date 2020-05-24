import colour from './colour';
import giphy from './giphy';
import gradient from './gradient';
import image from './image';
import unsplash from './unsplash';
import drive from './google';

export const backgroundConfigs = [
  colour,
  giphy,
  gradient,
  image,
  unsplash,
  drive,
];

backgroundConfigs.sort((a, b) => a.name.localeCompare(b.name));
