import { useState, useEffect, useRef } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useAuth } from "../../../context/AuthContext";

const ChatPage = () => {
  const { currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);
  const [mobileSidebar, setMobileSidebar] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));
      const allUsers = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((u) => u.uid !== currentUser.uid);
      setUsers(allUsers);
    };
    fetchUsers();
  }, [currentUser]);

  const getChatId = (uid1, uid2) => {
    return [uid1, uid2].sort().join("_");
  };

  useEffect(() => {
    if (!selectedUser) return;
    const chatId = getChatId(currentUser.uid, selectedUser.uid);
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setMessages(msgs);
    });
    return unsubscribe;
  }, [selectedUser, currentUser]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;
    setSending(true);
    try {
      const chatId = getChatId(currentUser.uid, selectedUser.uid);
      await addDoc(collection(db, "chats", chatId, "messages"), {
        text: newMessage.trim(),
        senderId: currentUser.uid,
        senderName: currentUser.displayName || currentUser.email,
        receiverId: selectedUser.uid,
        createdAt: serverTimestamp(),
      });
      setNewMessage("");
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      (u.displayName || u.email || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-screen-xl mx-auto h-[calc(100vh-80px)] flex">
        <div className={`${mobileSidebar ? "flex" : "hidden"} md:flex flex-col w-full md:w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 shrink-0`}>
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3">💬 Messages</h2>
            <input
              id="chat-user-search"
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredUsers.length === 0 ? (
              <div className="text-center py-10 px-4">
                <p className="text-slate-400 dark:text-slate-500 text-sm">No users found</p>
              </div>
            ) : (
              filteredUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => {
                    setSelectedUser(user);
                    setMobileSidebar(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition border-b border-slate-100 dark:border-slate-700/50 ${selectedUser?.id === user.id ? "bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-l-indigo-500" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {(user.displayName || user.email || "?")[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{user.displayName || "No name"}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${user.role === "admin" ? "bg-rose-400" : "bg-emerald-400"}`}></span>
                </button>
              ))
            )}
          </div>
        </div>

        <div className={`${!mobileSidebar || !selectedUser ? (selectedUser ? "flex" : "hidden md:flex") : "hidden md:flex"} flex-col flex-1 bg-white/50 dark:bg-slate-900/50`}>
          {selectedUser ? (
            <>
              <div className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <button onClick={() => setMobileSidebar(true)} className="md:hidden text-slate-600 dark:text-slate-400 mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  {(selectedUser.displayName || selectedUser.email || "?")[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">{selectedUser.displayName || "No name"}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{selectedUser.email}</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                {messages.length === 0 && (
                  <div className="text-center py-20">
                    <div className="text-5xl mb-4">👋</div>
                    <p className="text-slate-400 dark:text-slate-500 font-medium">Start the conversation!</p>
                  </div>
                )}
                {messages.map((msg) => {
                  const isMine = msg.senderId === currentUser.uid;
                  return (
                    <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${isMine ? "bg-indigo-600 text-white rounded-br-md" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-bl-md"}`}>
                        {!isMine && (
                          <p className="text-xs font-bold text-indigo-500 dark:text-indigo-400 mb-1">{msg.senderName}</p>
                        )}
                        <p className="leading-relaxed break-words">{msg.text}</p>
                        <p className={`text-[10px] mt-1.5 ${isMine ? "text-indigo-200" : "text-slate-400 dark:text-slate-500"}`}>
                          {formatTime(msg.createdAt)}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSend} className="flex gap-3 px-6 py-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                <input
                  id="chat-message-input"
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  id="chat-send-btn"
                  type="submit"
                  disabled={sending || !newMessage.trim()}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition disabled:opacity-50 text-sm shrink-0"
                >
                  {sending ? "..." : "Send"}
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Your Messages</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">Select a user from the sidebar to start chatting in real-time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
