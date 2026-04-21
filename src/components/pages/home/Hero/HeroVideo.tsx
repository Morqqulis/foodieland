
import { Btn } from '@/components/custom/Btn'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'



export default function HeroVideo() {
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Btn size={'lg'} text={'View Recipes'} icon={'/hero/play.svg'} />
         </DialogTrigger>
         <DialogContent className={`rounded-custom! max-w-300! w-full min-h-150`}>
            <DialogHeader>
               <DialogTitle></DialogTitle>
               <DialogDescription></DialogDescription>
            </DialogHeader>

            <video className={`absolute inset-0 h-full w-full object-cover rounded-custom`} src={`/hero/video.mp4`} playsInline controls autoPlay />
         </DialogContent>
      </Dialog>
   )
}