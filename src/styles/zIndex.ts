/*
 * This file contains the z-indexes order for the application.
 * This way we don't need to use abstract numbers. Instead,
 * we use human readable names, which makes everything easier.
 * 
 * Also, if we need to change some orders, we can easily shift
 * the array's order and all the application will be updated.
 */

type Layer = 'BACKGROUND' | 'CONTENT' | 'SIDEBAR' | 'HEADER' | 'MODAL' | 'NOTIFICATION' | 'TUTORIAL';

const layers: Layer[] = ['BACKGROUND', 'CONTENT', 'SIDEBAR', 'HEADER', 'MODAL', 'NOTIFICATION', 'TUTORIAL'];

const getLayerPosition = (layer: Layer) => layers.findIndex(l => l === layer);

export default getLayerPosition;