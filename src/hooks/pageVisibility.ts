import { useEffect } from 'react';

export function useChangeTab(onTabChanged: () => void):void {      
  useEffect(() => {

    
    function handleVisibilityChange() {
      if (document.hidden) {
        onTabChanged();
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [onTabChanged]);
}