import { ReactNode } from 'react';

type DefaultLayoutPropsType = {
  children: ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-500">{children}</div>
  );
};
