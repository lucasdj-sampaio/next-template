import Signin from '../../app/login/signin/page';

interface Props {
  children: React.ReactNode;
  userSession?: any;
}

export const SessionProvider: React.FC<Props> = ({
  children,
  userSession,
}: Props) => {
  return !userSession ? <Signin /> : <>{children}</>;
};

SessionProvider.defaultProps = {
  userSession: false,
};
