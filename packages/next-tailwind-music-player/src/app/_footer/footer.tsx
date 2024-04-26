'use client'

import {
  MusicPlayerProvider,
  Player,
} from '../../'

import type {Track} from '../../'

export const songs: Track[] = [
  {
    ID: 'uebok-2024',
    coverArt: '/images/albums/uebok.png',
    title: 'Uebok (Captain extended 2024 remix)',
    artist: 'Apashe',
    source:
      'https://www.mediafire.com/file_premium/piwjyso0y28m92j/Apashe_-_Uebok_%2528Captain_remix%2529_3%2528extended%2529.mp3/file'
  },
  {
    ID: 'xld',
    coverArt: '/images/albums/xld.jpg',
    title: 'XLD (Captain remix)',
    artist: 'Tyr Kohout',
    source:
      'https://www.mediafire.com/file/8iktnrnqwqd7guj/Tyr_Kohout_-_XLD_%2528Captain_Remix%2529.mp3/file'
  },
  {
    ID: 'drop-bass',
    coverArt: '/images/albums/drop-bass.png',
    title: 'Drop Bass',
    artist: 'Captain',
    source:
      'http://www.mediafire.com/file/9ek7v4yq6z79dj4/Captain_-_Drop_Bass.mp3/file'
  },
  {
    ID: 'chaos',
    coverArt: '/images/albums/chaos.jpg',
    title: 'Chaos',
    artist: 'Captain',
    source:
      'http://www.mediafire.com/file/newe5opi0mo1o9n/Captain_-_Chaos.mp3/file'
  },
  {
    ID: 'iam',
    coverArt: '/images/albums/iamcaptain.png',
    title: 'I am Captain',
    artist: 'Captain',
    source:
      'http://www.mediafire.com/file/gebeb3fgalazdlv/Captain_-_I_am_Captain.mp3/file'
  },
  {
    ID: 'saxaboom',
    coverArt: '/images/albums/saxaboom.png',
    title: 'Saxaboom',
    artist: 'Captain',
    source:
      'http://www.mediafire.com/file/331keqy5bakihcv/Captain_-_Saxaboom.mp3/file'
  },
  {
    ID: 'thicc',
    coverArt: '/images/albums/thicc.png',
    title: 'Thicc',
    artist: 'Captain',
    source:
      'http://www.mediafire.com/file/8wbtrhesygfvu59/Captain_-_Thicc.mp3/file'
  },
]

export default function Footer() {
  return (
    <MusicPlayerProvider playlist={songs}>
      <Player className="bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/30" />
    </MusicPlayerProvider>
  )
}
