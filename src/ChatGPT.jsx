import { useState } from "react";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    var input = inputValue;
    let questionSummary = input + "이 뉴스 영어 말고 꼭 한국어로 요약해줘.";
    chat(questionSummary).then((answer) => console.log(`키워드: ${answer}`));
    let questionKeyword =
      input +
      "이 뉴스의 카테고리를 정했을 때 정치, 경제, 사회, 생활/문화, 세계, 기술/IT, 연예, 스포츠 중에서 가장 유사한거 하나 선택 후 키워드를 추출해줘. 요약 하지 말고 예시처럼 키워드만 무조건 간단하게 3개 이내로 괄호에 넣어서 추출해줘. 예시) (연예),(스캔들)";
    chat(questionKeyword).then((answer) => console.log(`본문: ${answer}`));
  };

  async function chat(question) {
    return await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer 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`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      }),
    })
      .then((res) => res.json())
      .then((data) => data.choices[0].message.content);
  }

  return (
    <div>
      <textarea
        style={{ width: "600px", height: "600px" }}
        onChange={onChangeInput}
      ></textarea>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Chat;
