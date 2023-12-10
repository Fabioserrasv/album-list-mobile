import { Asset } from 'expo-asset';

import { AlbumImage } from "../entities/album";


const ImageDiscoUri = Asset.fromModule(require('../assets/images/disco.png')).uri;

export function getImageExtraLarge(albumImage: Partial<AlbumImage>): string {
  return albumImage.large || ImageDiscoUri;
}

export function getImage(albumImage?: string): string {
  return albumImage || ImageDiscoUri;
}
