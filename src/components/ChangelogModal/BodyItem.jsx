export default function ChangelogBodyItem({ data, containerWidth }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-6"
      style={{ width: containerWidth }}
    >
      <h1 className="text-2xl font-bold text-center mb-2 text-[var(--text2)]">
        {data.title}
      </h1>
      <span className="text-base text-[var(--text3)] mb-2 text-center max-w-[28rem]">
        {data.description.map((desc, index) => (
          <p key={index} className="mb-2">
            {desc}
          </p>
        ))}
      </span>
      {data.media && (
        <div className="w-full flex justify-center my-4">
          <img src={data.media} className="max-h-70 rounded-lg" />
        </div>
      )}
      {data.icons && <div className="text-4xl mb-2">{data.icons}</div>}
    </div>
  );
}
