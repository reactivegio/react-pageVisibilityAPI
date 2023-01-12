import { useEffect } from 'react';

/* KEEP IN MIND
*  This method is not recommended because it can be considered an intrusive and frustrating experience 
*  for the user, as it doesn't allow the user to close the tab without confirming the action. 
*  Additionally, some modern browsers might block the alert or confirm dialogs that 
*  beforeunload can display to the user, so it's not recommended to use it 
*  for security or critical features.
*
*  Instead, you should provide an alternative way for the user to save their progress, 
*  or you should use a more informative message that explains why it's important for them 
*  to stay on the page.
*/
export function useIntrusiveTabClose(onTabClose: (e:any) => void):void {
  useEffect(() => {
    window.addEventListener('beforeunload', onTabClose);

    return () => {
      window.removeEventListener('beforeunload', onTabClose);
    };
  }, [onTabClose]);
}