/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FmFPOJU5KIY
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function VideoPlayer() {
  return (
    <div key="1" className="flex flex-row gap-10 h-screen">
      <div className="w-2/3 aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
        <span className="w-full h-full object-cover rounded-md bg-muted" />
      </div>
      <div className="w-1/3 overflow-auto">
        <div className="sticky top-0 flex items-center justify-center bg-white py-2">
          <h2 className="font-semibold text-xl">Comments</h2>
        </div>
        <div className="grid gap-4 p-4">
          <div className="grid gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Alex Johnson</h3>
              <p>Interesting perspective. I hadn't thought about it that way before.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Jane Smith</h3>
              <p>I learned a lot from this video. Looking forward to more content like this.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">John Doe</h3>
              <p>This is a great video! Thanks for sharing.</p>
            </div>
          </div>
          <div className="grid gap-1.5">
            <div className="flex items-center gap-2">
              <div className="font-semibold">Add a comment</div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="comment">Comment</Label>
                <Textarea id="comment" placeholder="Enter your comment" />
              </div>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
