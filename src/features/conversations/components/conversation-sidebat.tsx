import ky from "ky";
import { toast } from "sonner";
import { useState } from "react";
import { CopyIcon, HistoryIcon, LoaderIcon, PlusIcon } from "lucide-react";

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
  MessageActions,
  MessageAction,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { Button } from "@/components/ui/button";

import {
  useConversation,
  useConversations,
  useCreateConversation,
  useMessages,
} from "../hooks/use-conversations";

import { Id } from "../../../../convex/_generated/dataModel";
import { DEFAULT_CONVERSATION_NAME } from "../../../../convex/constants";

interface ConversationSidebarProps {
  projectId: Id<"projects">;
}

export const ConversationSidebar = ({
  projectId,
}: ConversationSidebarProps) => {
  return (
    <div className="flex flex-col h-full bg-sidebar">
      <div className="flex items-center justify-between h-8.75 border-b">
        <div className="text-sm truncate pl-3">{DEFAULT_CONVERSATION_NAME}</div>

        <div className="flex items-center px-1 gap-1">
          <Button size="icon-xs" variant="highlight">
            <HistoryIcon className="size-3.5" />
          </Button>

          <Button size="icon-xs" variant="highlight">
            <PlusIcon className="size-3.5" />
          </Button>
        </div>
      </div>
      <Conversation className="flex-1">
        <ConversationContent>
          <p>messages</p>
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>

      <div className="p-3">
        <PromptInput onSubmit={() => {}} className="mt-2">
          <PromptInputBody>
            <PromptInputTextarea
              onChange={() => {}}
              value=""
              placeholder="Ask Codesistant anything..."
              disabled={false}
            />
          </PromptInputBody>

          <PromptInputFooter>
            <PromptInputTools />
            <PromptInputSubmit status="ready" disabled={false} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};
