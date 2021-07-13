import video from '../vid.mp4'
import sub from '../vid.vtt'

export const source = {
  type: 'video',
  sources: [
    {
      src: { video },
      type: 'video/mp4',
      size: 720,
    },
    {
      src: { video },
      type: 'video/mp4',
      size: 1080,
    },
  ],
  tracks: [
    {
      kind: 'subtitles',
      label: 'VN1',
      src: { sub },
      srcLang: 'vn',
    },
    {
      kind: 'captions',
      label: 'VN2',
      src: { sub },
      srcLang: 'vn',
    },
  ],
}
