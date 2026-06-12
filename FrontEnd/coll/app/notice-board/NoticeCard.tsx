type Notice = {
  id: string;
  title: string;
  date: string;
  image?: string;
  content: string;
  downloadUrl?: string;
};

export default function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border">
      {notice.image && (
        <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${notice.image})` }} />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
          <time className="text-sm text-gray-500">{notice.date}</time>
        </div>
        <p className="mt-3 text-sm text-gray-600 break-words">{notice.content}</p>

        <div className="mt-4 flex items-center gap-3">
          {notice.downloadUrl && (
            <a href={notice.downloadUrl} className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm">Download</a>
          )}
          <a href={`/notice-board/${notice.id}`} className="text-sm text-orange-600 font-semibold">Read more</a>
        </div>
      </div>
    </article>
  );
}
