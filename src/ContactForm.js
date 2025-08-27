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
    <form onSubmit={handleSubmit}
      style={{
        // padding: "24px",
        margin: "0 auto",
        maxWidth: "100%",
        background: "transparent",
      }}
    >
      {/* 2열 그리드: 좌측 입력, 우측 내용 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "16px 20px",
          alignItems: "start",
        }}
      >
        {/* 왼쪽 컬럼: 이메일 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, height: '100%' }}>
          <label htmlFor="fromEmail" style={{ fontSize: 16, color: "#000", textAlign: 'left' }}>
            From (Email)
          </label>
          <input
            id="fromEmail"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            placeholder="you@example.com"
            style={inputStyle}
          />

          <label htmlFor="title" style={{ fontSize: 16, color: "#000", marginTop: 12, textAlign:'left' }}>
            Mail Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="문의 제목을 입력해주세요"
            style={inputStyle}
          />
        </div>

        {/* 오른쪽 컬럼: 내용 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label htmlFor="contents" style={{ fontSize: 16, color: "#000", textAlign: 'left' }}>
            Contents
          </label>
          <textarea
            id="contents"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
            required
            placeholder="문의 내용을 자세히 적어주세요."
            rows={10}
            style={{
              ...inputStyle,
              width: "100%",
              height: "220px",
              resize: "vertical",
              lineHeight: 1.5,
            }}
          />
        </div>
      </div>

      {/* 전송 버튼 & 메시지 */}
      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12, justifyContent: 'center', }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 20px",
            borderRadius: 20,
            border: "3px solid #0E4A84",
            background: loading ? "#0E4A84" : "#fff",
            color: "#0E4A84",
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: loading ? "not-allowed" : "pointer",
            width: '160px',
            height: '50px'
          }}
        >
          {loading ? "Sending..." : "Send Mail"}
        </button>

        {/* {msg && (
          <span
            style={{
              fontSize: 14,
              color: msg.type === "success" ? "#1a7f37" : "#b42318",
            }}
          >
            {msg.text}
          </span>
        )} */}
      </div>

      {/* 반응형: 좁은 화면에서 1열로 */}
      <style>{`
        @media (max-width: 768px) {
          form > div[style] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  );
}

const inputStyle = {
  width: "100%",
  height: 40,
  padding: "8px 10px",
  border: "1px solid #999",
  borderRadius: 6,
  outline: "none",
  fontSize: 14,
  boxSizing: "border-box",
  background: "#fff",
  marginBottom: '34px'
};