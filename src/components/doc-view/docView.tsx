import React, { useRef, useEffect, useState } from "react";
import ReactDOMClient from "react-dom/client";
import Markdown from "react-markdown";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "hello-world": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const markdown = "# Hi, *Pluto*!";

function CDocView() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ref : ", ref.current);
    if (!ref.current) return;

    const element = ref.current;
    if (!ref.current.shadowRoot) {
      element.attachShadow({ mode: "open" });
    }

    const div = document.createElement("div");
    const root = ReactDOMClient.createRoot(div);
    const random = Math.floor(Math.random() * 3);

    root.render(
      <Markdown className="markdown">{random ? file3 : file2}</Markdown>
    );
    console.log("div : ", div);
    ref!.current!.shadowRoot!.innerHTML = "";
    ref!.current!.shadowRoot!.appendChild(div);
  }, []);

  return (
    <div
      id="dddd"
      ref={ref}
      className="w-full h-full overflow-y-auto bg-slate-100"
    ></div>
  );
}

const CDocViewRef = React.forwardRef(CDocView);
export const DocView = React.memo(CDocViewRef);

const file = `
# 문화 비평과 영화 비평

### 비평
- 생산자에 집중
- 텍스트에 집중
- 수용자(관객)에 집중

### 구조주의적 분석
- 블라디미르 프롭의 분석
  - 7가지 캐릭터와 6단계의 흐름
    - 영웅(주인공) - 악당과 싸우는 존재
    - 가짜영웅 - 영웅과 비슷하지만 주인공이 아님
    - 악당 - 주인공과 대립
    - 조력자 - 주인공을 도움
    - 증여자 - 주인공에게 특정한 물건, 능력등을 줆
    - 파견자 - 주인공을 파견 보냄
    - 공주, 아버지 - 주인공의 보상
    - 6단계의 흐름 - 준비, 복잡화, 이주, 투쟁, 귀향, 인식 단계
  
### 각색, 리메이크
  - 충실한 각색 - 원작 최대
  - 변형적 각색 - 원작 최소
    - 시즌제 드라마
  - 다원적 각색 - 중간 단계

`;

const file2 = `
# [Versions](https://mui.com/versions/)

## 5.14.18

<!-- generated comparing v5.14.17..master -->

_Nov 14, 2023_

A big thanks to the 14 contributors who made this release possible. Here are some highlights ✨:

- 💫 Introduced new [Stepper](https://mui.com/joy-ui/react-stepper/) component in Joy UI (#39688) @siriwatknp
- other 🐛 bug fixes and 📚 documentation improvements

- &#8203;<!-- 32 -->[Autocomplete] Add \`defaultMuiPrevented\` to onKeyDown type (#39820) @sai6855
- &#8203;<!-- 31 -->[Autocomplete] Fix React key warning in Next.js (#39795) @mj12albert
- &#8203;<!-- 24 -->[Checkbox] Asterisk placement aligned correctly (#39721) @axelbostrom
- &#8203;<!-- 04 -->[Rating] Fix the hover highlighting for spaced icons (#39775) @ZeeshanTamboli
- &#8203;<!-- 03 -->[TablePagination] Implement \`slotProps\` pattern for the actions and the select slots (#39353) @anle9650
- &#8203;<!-- 02 -->[TextField] Fix padding on small filled multiline TextField (#39769) @mj12albert

### \`@mui/joy@5.0.0-beta.15\`

- &#8203;<!-- 11 -->[Stepper] Add new \`Stepper\` component (#39688) @siriwatknp
- &#8203;<!-- 12 -->[Select] Fix displaying placeholder when multiple is true (#39806) @sai6855

### \`@mui/material-next@6.0.0-alpha.110\`

- &#8203;<!-- 26 -->[ButtonGroup] Copy \`ButtonGroup\` to material next (#39739) @lhilgert9
- &#8203;<!-- 09 -->[ProgressIndicator] Change \`CircularProgress\` files to ts (#39791) @lhilgert9
- &#8203;<!-- 08 -->[ProgressIndicator] Change \`LinearProgress\` files to ts (#39793) @lhilgert9
- &#8203;<!-- 07 -->[ProgressIndicator] Copy \`LinearProgress\` to material next (#39779) @lhilgert9
- &#8203;<!-- 06 -->[ProgressIndicator] Copy \`CircularProgress\` to material next (#39780) @lhilgert9
- &#8203;<!-- 05 -->[TextField] Add FormLabel and InputLabel components (#39483) @mj12albert

## Docs

- &#8203;<!-- 30 -->[base-ui][NumberInput] Fix inconsistent demo component names (#39786) @mnajdova
- &#8203;<!-- 29 -->[base-ui][Menu] Refine demos (#39823) @zanivan
- &#8203;<!-- 28 -->[base-ui][Switch] Refine demos (#39822) @zanivan
- &#8203;<!-- 16 -->[joy-ui] Fix API generation for Grid (#39861) @oliviertassinari
- &#8203;<!-- 15 -->[joy-ui] Fix menu in color inversion header demo (#39785) @sai6855
- &#8203;<!-- 14 -->[joy-ui] Change the design kit link on the Overview page (#39725) @danilo-leal
- &#8203;<!-- 13 -->[joy-ui] Add \`CssBaseline\` to integration with Material UI page (#39790) @swillianc
- &#8203;<!-- 10 -->[joy-ui][Tabs] Add wordBreak style to demo (#39821) @sai6855

## Core

- &#8203;<!-- 27 -->[blog] MUI X late v6 blog post (#39700) @joserodolfofreitas
- &#8203;<!-- 25 -->[CHANGELOG] Correct the Joy UI version in the changelog (#39788) @michaldudak
- &#8203;<!-- 23 -->[core] Remove legacy docs files (#39860) @oliviertassinari
- &#8203;<!-- 22 -->[core] Fix GitHub title tag consistency @oliviertassinari
- &#8203;<!-- 21 -->[core] Make the API docs builder configurable per project (#39772) @michaldudak
- &#8203;<!-- 20 -->[docs] Fix the default theme viewer font family (#39782) @danilo-leal
- &#8203;<!-- 19 -->[docs-infra] Fix hydration api (#39706) @oliviertassinari
- &#8203;<!-- 18 -->[docs-infra] Adjust the website & docs footer (#39810) @danilo-leal
- &#8203;<!-- 17 -->[docs-infra] Fix bug on API prop copy experience (#39707) @oliviertassinari
- &#8203;<!-- 01 -->[website] Change roadmap link destination (#39639) @danilo-leal

All contributors of this release in alphabetical order: @anle9650, @axelbostrom, @danilo-leal, @joserodolfofreitas, @lhilgert9, @michaldudak, @mj12albert, @mnajdova, @oliviertassinari, @sai6855, @siriwatknp, @swillianc, @zanivan, @ZeeshanTamboli
`;

const file3 = `
# 영화의 탄생

## 정의

1. 영화는 상업적인 예술이다
2. 종합예술

## 영화의 특징

- 연극 - 공연 예술 | 기록 예술
- 연극 - 하나의 동일 시 | 이중적 동일 
- 소설 - 문자 예술 | 영상 예술

## 기법

- 플래시백 : 과거를 보여준다
- 플래시 포워드 : 앞으로 나아감

## 영화의 역사

19세기 사진 카메라의 발명
1890년 에딘슨의 영사기 발명
1895년 뤼미에의 시네마토의 발명 - 찍고 영사 한 번에 가능

## 영화의 원리

- 잔상효과의 원리
  - 회상요지경 원리
  - 플립북

## 영화의 역사

1. 기록 영화 - 뤼미에르
2. 공상과학 영화 - 멜리에
3. 
`;
