import { useLocation } from 'react-router-dom';

// True on the home page (the song list). Several components branch on this - the
// header nav toggle, the playlist link - so the check lives in one place.
const useIsRootPath = (): boolean => useLocation().pathname === '/';

export default useIsRootPath;
