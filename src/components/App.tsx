import React, {useState} from 'react'
import {NessContext, NessContextProps} from '../context'
import {Authenticator} from './Authenticator'
import {Bootstrapper} from './Bootstrapper'
import {Settings} from './Settings'

type Props = {
  initial: NessContextProps
}

export const App: React.FunctionComponent<Props> = ({
  children,
  initial,
}: React.PropsWithChildren<Props>) => {
  const [context, setContext] = useState<NessContextProps>(initial)

  return (
    <NessContext.Provider value={{...context, setContext}}>
      <Authenticator>
        <Settings>
          <Bootstrapper>{children}</Bootstrapper>
        </Settings>
      </Authenticator>
    </NessContext.Provider>
  )
}
