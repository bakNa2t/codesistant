import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { FileIcon, FolderIcon } from "@react-symbols/icons/utils";

import { LoadingRow } from "./loading-row";
import { CreateInput } from "./create-input";

import { getItemPadding } from "./constants";
import {
  useCreateFile,
  useCreateFolder,
  useDeleteFile,
  useFolderContents,
  useRenameFile,
} from "@/features/projects/hooks/use-files";
import { Doc, Id } from "../../../../../convex/_generated/dataModel";

export const Tree = ({
  item,
  level = 0,
  projectId,
}: {
  item: Doc<"files">;
  level?: number;
  projectId: Id<"projects">;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [creating, setCreating] = useState<"file" | "folder" | null>(null);

  const renameFile = useRenameFile();
  const deleteFile = useDeleteFile();
  const createFile = useCreateFile();
  const createFolder = useCreateFolder();

  const folderContents = useFolderContents({
    projectId,
    parentId: item._id,
    enabled: item.type === "folder" && isOpen,
  });

  if (item.type === "file") {
    return <div>This is a file!</div>;
  }

  return <div>This is a folder</div>;
};
