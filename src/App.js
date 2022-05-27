// 부트스트랩을 사용할 때는 관련 컴포넌트를 불러와서 사용
// "react-bootstrap"에서 불러오기
import { Button, Container, Col, Row } from "react-bootstrap";
// fontAwesome을 사용하기 위해 추가 > 공식 홈페이지 참고
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 바벨 매크로를 이용해서 가져오는 방법 babel.config.js를 .babelrc로 바꾸기
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
// fontAwesome에 직접 접근해서 값 들고오기
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import TestComp from "./components/TestComp";

function App() {
  const gridStyle = {
    background: "yellow",
  };
  return (
    <div className="App">
      <Button
        variant="primary"
        onClick={() => {
          alert("눌렀습니다");
        }}
      >
        Primary
      </Button>{" "}
      <Container style={gridStyle}>
        <Row>
          <Col sm={8} md={4}>
            {/** 직접 접근해서 가져올 때 */}
            <FontAwesomeIcon icon={faCamera} />
            {/** 매크로를 통해서 가져올 때 */}
            <FontAwesomeIcon icon={solid("Camera")} />
            <FontAwesomeIcon icon={regular("face-kiss-wink-heart")} />
            <FontAwesomeIcon icon={solid("mug-saucer")} />
            <FontAwesomeIcon icon={brands("google")} />
            <FontAwesomeIcon icon={brands("apple")} />
          </Col>
          <Col sm={8} md={2}>
            2
          </Col>
        </Row>
        <Row>
          <Col>
            <TestComp>값을 넣었습니다</TestComp>
            <TestComp
              size="large pink"
              // onClick의 값이 props값으로 전달
              onClick={() => {
                alert("눌렀습니다");
              }}
            >
              버튼을 눌러주세요
            </TestComp>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
