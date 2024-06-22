'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
export default function SuccessToast({
  isDescriptionMatch,
  isTitleMatch,
}: {
  isDescriptionMatch: boolean;
  isTitleMatch: boolean;
}) {
  const { toast } = useToast();

  return (
    <Button
      type="submit"
      disabled={!isDescriptionMatch || !isTitleMatch}
      className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
      onClick={() => {
        toast({
          title: 'Successfully Posted ✅',
          description:
            'Your post has been successfully posted. You will be redirected to the home page in 3 seconds',
        });
      }}
    >
      Post
    </Button>
  );
}
