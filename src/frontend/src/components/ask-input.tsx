import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

export const AskInput = ({
  sendMessage,
}: {
  sendMessage: (message: string) => void;
}) => {
  const [input, setInput] = useState("");
  return (
    <>
      <form
        className="w-full overflow-hidden"
        onSubmit={(e) => {
          if (input.trim().length < 5) return;
          e.preventDefault();
          sendMessage(input);
          setInput("");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim().length < 5) return;
            sendMessage(input);
            setInput("");
          }
        }}
      >
        <div className="w-full flex items-center rounded-full focus:outline-none max-h-[30vh] px-2 py-1 bg-card border-muted border-2 ">
          <TextareaAutosize
            className="w-full bg-transparent text-md resize-none h-[40px] focus:outline-none p-2"
            placeholder="Ask anything..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Button
            type="submit"
            variant="default"
            size="icon"
            className="rounded-full bg-accent-foreground aspect-square h-8 disabled:opacity-20"
            disabled={input.trim().length < 5}
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </form>
    </>
  );
};