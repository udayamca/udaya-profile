type Props = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

export default function Section({ title, subTitle, children }: Props) {
  return (
    <section className="section m-4">
      <div className="text-xs text-blue-500 tracking-widest">{subTitle}</div>
      <h2 className="text-2xl tracking-widest ">{title}</h2>
      {children}
    </section>
  );
}
