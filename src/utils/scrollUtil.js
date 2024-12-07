import { scroller } from 'react-scroll'

export const handleScroll = (to) => {
  setTimeout(() => {
    scroller.scrollTo(to, {
      smooth: true,
      duration: 500,
    })
  }, 400)
}
