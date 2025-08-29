import { useState } from "react";

export default function ContactForm() {
  const [fromEmail, setFromEmail] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "ca51ffe3-1099-4cc1-8544-64e8415d93a0", // ← 교체
          subject: `[DBI-Lab] ${title}`,
          email: fromEmail,
          message: contents
        }),
      });

      const data = await res.json(); // Web3Forms는 JSON을 반환함
      if (!data?.success) throw new Error(data?.message || "Send failed");

      alert("메일 전송이 완료되었습니다.")
      setFromEmail(""); setTitle(""); setContents("");
    } catch (err) {
      alert("메일 전송에 실패했습니다. 지속적인 오류 시 chungyn@hanyang.ac.kr로 연락주세요.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-fields">
        {/* From (Email) 필드 */}
        <div className="form-field">
          <label htmlFor="fromEmail" className="form-label">
            From (Email)
          </label>
          <input
            id="fromEmail"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="form-input"
          />
        </div>

        {/* Mail Title 필드 */}
        <div className="form-field">
          <label htmlFor="title" className="form-label">
            Mail Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Please enter the title of your inquiry."
            className="form-input"
          />
        </div>

        {/* Contents 필드 */}
        <div className="form-field">
          <label htmlFor="contents" className="form-label">
            Contents
          </label>
          <textarea
            id="contents"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            required
            placeholder="Please provide the details of your inquiry."
            rows={6}
            className="form-textarea"
          />
        </div>
      </div>

      {/* Submit 버튼 */}
      <div className="submit-container">
        <button
          type="submit"
          disabled={loading}
          className="submit-button"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
