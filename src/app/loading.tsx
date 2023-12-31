import { Skeleton } from '~/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="grid w-full grid-cols-1 grid-rows-1 justify-items-center">
      <Skeleton className="h-[300px] w-2/3" />
    </div>
  );
};

export default Loading;
