import { useEffect, useState } from 'react'

interface Props {
    query: string;
}

const useMediaQuery = ({query}: Props) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
        setMatches(media.matches);
    }

    const listener = () => {
        setMatches(media.matches)
    }

    media.addListener(listener);
    return () => media.removeListener(listener)
  }, [matches, query]);
  
  return matches
}

export default useMediaQuery