import type {FillLayer} from 'react-map-gl';

export const countiesLayer: FillLayer = {
  id: 'counties',
  source: '',
  type: 'fill',
  'source-layer': 'original',
  paint: {
    'fill-outline-color': 'rgba(0,0,0,0.1)',
    'fill-color': 'rgba(0,0,0,0.1)'
  }
};
// Highlighted county polygons
export const highlightLayer: FillLayer = {
  id: 'counties-highlighted',
  type: 'fill',
  source: 'counties',
  'source-layer': 'original',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.75
  }
};
