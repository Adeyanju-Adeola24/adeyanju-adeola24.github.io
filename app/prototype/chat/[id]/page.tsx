import ClientChatPage from "./client-page";

export function generateStaticParams() {
  return [{ id: "chat-1" }, { id: "chat-2" }, { id: "chat-3" }, { id: "chat-4" }];
}

export default function ChatDetailPage() {
  return <ClientChatPage />;
}
