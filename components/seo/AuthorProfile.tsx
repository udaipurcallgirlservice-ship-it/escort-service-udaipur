interface AuthorProfileProps {
  author: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    articlesCount?: number;
    credentials?: string[];
    linkedin?: string;
    twitter?: string;
  };
}

export default function AuthorProfile({ author }: AuthorProfileProps) {
  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      className="author-box flex flex-col sm:flex-row gap-4 rounded-xl border border-pink-100 bg-gradient-to-br from-pink-50 to-white p-5 my-6 shadow-sm"
    >
      <img
        src={author.avatar}
        alt={author.name}
        itemProp="image"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover border-2 border-pink-200 flex-shrink-0"
      />
      <div className="flex-1">
        <h3 itemProp="name" className="text-lg font-bold text-gray-900">
          {author.name}
        </h3>
        <p itemProp="jobTitle" className="text-sm text-pink-600 font-medium">
          {author.title}
        </p>
        <p itemProp="description" className="mt-1 text-sm text-gray-600 leading-relaxed">
          {author.bio}
        </p>
        <p className="mt-2 text-xs text-green-700 font-semibold">
          ✅ Verified Expert{author.articlesCount ? ` | ${author.articlesCount}+ Articles Published` : ''}
        </p>

        {author.credentials && author.credentials.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {author.credentials.map((credential) => (
              <li
                key={credential}
                className="text-xs bg-pink-100 text-pink-800 rounded-full px-3 py-1"
              >
                {credential}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 flex gap-3">
          {author.linkedin && (
            <a
              href={author.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              itemProp="url"
              className="text-xs text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {author.twitter && (
            <a
              href={author.twitter}
              rel="noopener noreferrer"
              target="_blank"
              className="text-xs text-sky-500 hover:underline"
            >
              Twitter
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
