import "styles/global.css";
import { ButtonTemplate } from "stories/Button/Button.stories";
import { InputTemplate } from "stories/Input/Input.stories";
import { useState } from "react";
import {PaginationTemplate} from "stories/Pagination/Pagination.stories";

function App(): JSX.Element {
  const [input, setInput] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>();
  const showTotal = (total:number) => {
    return `Total ${total} items`
  }
  return (
    <div className="App">
      <ButtonTemplate label="HI" size="medium" backgroundColor="white" />
      <InputTemplate
        value={input}
        onChange={setInput}
        placeholder="name"
        type="text"
        error
        errorMsg="Here Error"
      />
      <PaginationTemplate size="default" total={500} disabled={false} showTotal={showTotal} showSizeChanger showQuickJumper/>
      {input}
    </div>
  );
}

export default App;
