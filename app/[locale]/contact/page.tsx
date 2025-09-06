export default function Contact() {
  return (
    <div className="container py-12">
      <div className="card">
        <h1 className="h1">CONTACT</h1>
        <p className="lead">제품 문의 및 협력·투자 관련 사항 등 자유로운 문의가 가능합니다.</p>
        <form action="https://formspree.io/f/yourid" method="POST" className="mt-6 grid gap-4">
          <input name="name" placeholder="Your name" className="border p-3 rounded-xl" required />
          <input type="email" name="email" placeholder="Email" className="border p-3 rounded-xl" required />
          <textarea name="message" placeholder="Message" className="border p-3 rounded-xl min-h-40" required />
          <button className="px-4 py-3 rounded-2xl bg-black text-white">Send</button>
        </form>
      </div>
    </div>
  );
}
