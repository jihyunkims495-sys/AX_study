# AX Study

> AI Agent 엔지니어 부트캠프에서 실제로 학습한 강의 내용, 실습 코드와 과제를 기록하는 공개 저장소입니다.

Python 기초 문법에서 시작해 데이터 분석·머신러닝, SQL 환경 구성, 프론트엔드 기초, LLM 프롬프트 엔지니어링으로 이어지는 학습 과정을 담고 있습니다. 각 주제는 수업 노트와 직접 실행한 실습 파일을 중심으로 정리합니다.

## 저장소 안내

- **학습 시작일:** 2026.08.06
- **기록 형태:** Jupyter Notebook, Python 코드, HTML/CSS, Docker Compose, 실습 데이터와 프로젝트 결과물
- **업데이트 방식:** 부트캠프 진도에 따라 강의(`lesson`)와 실습(`practice`) 내용을 순차적으로 추가
- **현재 확인된 범위:** Python, Machine Learning, SQL, Frontend Basic, LLM Prompt Engineering

> 이 README는 저장소에 실제로 올라온 파일을 기준으로 작성했습니다. 비어 있거나 아직 자료가 없는 폴더는 완료된 학습 범위로 표시하지 않습니다.

## 학습 범위와 기술 스택

| 영역 | 실제 학습 내용 | 도구·라이브러리 |
|---|---|---|
| Python | 개발 환경, 자료형, 자료구조, 제어문, 함수, 모듈·패키지, 예외 처리·디버깅, 객체지향, 내장 함수·표준 라이브러리 | Python, uv, VS Code, Jupyter Notebook |
| Data & Machine Learning | 데이터 분석, 회귀·분류, 모델 검증, 신경망·RNN, Seq2Seq·Attention, Transformer·Hugging Face | NumPy, pandas, Matplotlib, Seaborn, scikit-learn, PyTorch, Transformers |
| SQL / Database | PostgreSQL·pgvector 실행 환경과 관계형 실습용 CSV 데이터 구성 | PostgreSQL 17, pgvector, Docker Compose |
| Frontend Basic | HTML 문서 구조, 링크와 프레임, 이미지, 폼, 테이블, 미디어 요소 | HTML, CSS |
| LLM Prompt Engineering | 메시지 역할, 프롬프트 제약·구분자, 인젝션 방어, Zero/One/Few-shot 프롬프팅 | LangChain, LCEL, Ollama, python-dotenv |

Python 버전과 의존성은 하위 프로젝트별 `pyproject.toml`에 정의되어 있습니다. Python 학습 프로젝트는 3.9 이상, 머신러닝·LLM 프로젝트는 3.13 이상을 기준으로 구성되어 있습니다.

## 폴더 구조

```text
AX_study/
├── 02_PYTHON/
│   ├── chapter01 Setting/
│   ├── chapter02 변수 연산자 자료형/
│   ├── chapter03 기본 자료 구조/
│   ├── chapter04 제어문/
│   ├── chapter05 함수/
│   ├── chapter06 코드 모듈화와 프로젝트 의존성 관리/
│   ├── chapter07 프로그램 검증과 예외 처리/
│   ├── chapter08 객체지향 프로그래밍 기초/
│   ├── chapter09 파이썬 내장함수와 표준 라이브러리 활용/
│   └── python_final_project_김지현/
├── 04.Machine Learning/
│   ├── src/04_machine_learning/chapter01~06/
│   └── machine learning final project_김지현/
├── 05.SQL/
│   └── postgres/postgres/
│       ├── docker-compose.yml
│       └── data/
├── 06.DATABASE_AI/                 # 현재 학습 자료 없음
├── 07_FRONTEND_BASIC/
│   ├── chapter01/
│   └── chapter02/
├── 10_llm_prompt_engineering/
│   ├── src/10_llm_prompt_engineering/chapter01/
│   ├── chapter02/
│   └── chapter03/
├── pyproject.toml
└── README.md
```

### 폴더별 설명

| 폴더 | 설명 |
|---|---|
| [`02_PYTHON`](./02_PYTHON/) | Python 기초부터 객체지향까지의 강의·실습 노트와 도서 관리 CLI 최종과제 |
| [`04.Machine Learning`](./04.Machine%20Learning/) | 데이터 분석, 전통적 머신러닝, 딥러닝·자연어 처리 강의와 당뇨병 분류 최종과제 |
| [`05.SQL`](./05.SQL/) | PostgreSQL·pgvector Docker 환경과 고객·상품·주문·재고 등 관계형 실습 데이터 |
| `06.DATABASE_AI` | 현재 비어 있는 폴더로, 학습 완료 범위에는 포함하지 않음 |
| [`07_FRONTEND_BASIC`](./07_FRONTEND_BASIC/) | HTML 요소를 직접 작성하며 진행한 프론트엔드 기초 실습 |
| [`10_llm_prompt_engineering`](./10_llm_prompt_engineering/) | LLM 입출력 구조와 프롬프트 설계 기법을 LangChain·Ollama로 실습한 노트 |
| `src/ax_study` | 저장소 루트에서 생성된 기본 Python 패키지 구조 |

## 주요 학습 내용

### 1. Python 기초와 프로젝트 구성

- `uv` 프로젝트 생성, 가상환경, VS Code와 Jupyter 커널 연결
- 변수·동적 타이핑, 형변환, 연산자와 문자열 포매팅
- 리스트·튜플·딕셔너리·집합과 데이터 조회·중복 제거
- 조건문·반복문을 이용한 데이터 필터링과 누적 계산
- 함수, 스코프, 람다, 고차 함수, 클로저, 데코레이터, 이터레이터·제너레이터
- 모듈·패키지와 `import`, `uv`를 활용한 의존성 관리
- 예외 처리, traceback 해석, 중단점을 이용한 디버깅
- 클래스·인스턴스, 상속, 캡슐화와 메서드 오버라이딩
- Python 내장 함수와 표준 라이브러리 활용

#### Python 최종과제: 도서 관리 CLI

[`python_final_project_김지현`](./02_PYTHON/python_final_project_김지현/)에는 수업에서 배운 문법을 하나의 프로그램으로 연결한 도서 관리 시스템이 있습니다.

- 일반 도서와 전자책 등록·조회·검색
- ISBN 중복 방지와 입력값 검증
- 도서 대여·반납 및 이력 관리
- 월별 대여 건수와 최다 대여 도서 통계
- `Book` 상속 구조, 캡슐화, 오버라이딩
- `models`, `utils`, `main.py`로 역할 분리

### 2. 데이터 분석과 머신러닝

- NumPy 배열 연산, pandas `Series`·`DataFrame`, Matplotlib 시각화
- EDA, 결측치·이상치·중복 데이터 처리
- 선형·다중 회귀, 경사하강법, 스케일링과 데이터 분할
- 규제 모델, 로지스틱 회귀, 이진·다중 분류와 교차 검증
- PyTorch 기반 FashionMNIST 심층 신경망과 영화 리뷰 LSTM
- LSTM 인코더·디코더를 이용한 Seq2Seq 번역 구조
- Attention 가중치 계산과 시각화
- Transformer의 위치 인코딩·멀티헤드 어텐션, Hugging Face 모델 활용

머신러닝 최종과제에서는 `diabetes.csv`를 사용해 EDA와 전처리를 수행하고, 로지스틱 회귀 모델을 구성·평가한 과정을 기록했습니다.

### 3. SQL과 데이터베이스 환경

- `pgvector/pgvector:pg17` 이미지로 PostgreSQL 실행 환경 구성
- 고객, 직원, 매장, 브랜드, 카테고리, 상품, 주문, 주문 상세, 재고 CSV 데이터 보관
- 관계형 데이터 실습을 위한 샘플 데이터셋 구성

현재 저장소에는 Docker Compose와 데이터 파일이 있으며, 별도의 SQL 쿼리 파일은 포함되어 있지 않습니다.

### 4. 프론트엔드 기초

- HTML 문서의 기본 구조와 제목·텍스트 요소
- 링크 이동과 `target`, 중첩 프레임 실습
- 이미지, 회원가입 폼, 테이블, 비디오 등 기본 요소 작성
- HTML과 CSS 파일을 분리한 기초 구조

### 5. LLM 프롬프트 엔지니어링

- LLM 애플리케이션의 입력·출력과 LCEL 파이프라인
- LLM의 환각, 민감 정보 유출 등 한계와 위험 요소
- System·User·Assistant 역할별 메시지와 대화 이력 구조
- Task, Context, 제약 조건을 포함한 명확한 지시 작성
- XML 구분자로 입력 데이터를 분리하고 프롬프트 인젝션을 완화하는 방법
- Zero-shot, One-shot, Few-shot 프롬프팅과 실패 사례 비교

## 학습 기록 방식

1. 강의 노트에서 개념과 실행 흐름을 확인합니다.
2. 같은 주제의 실습 노트에서 직접 코드를 작성하고 결과를 검증합니다.
3. 오류가 발생하면 traceback과 디버거를 이용해 원인을 추적합니다.
4. 여러 장의 내용을 최종과제에 연결해 프로그램과 모델로 구현합니다.
5. 수업 진도에 맞춰 파일과 기록을 계속 보완합니다.

이 저장소는 완성된 라이브러리나 서비스 배포본보다 **학습 당시의 코드, 실습 과정과 결과를 보존하는 기록**에 가깝습니다. 폴더별 실행 환경이 다를 수 있으므로 실습을 재현할 때는 해당 폴더의 `pyproject.toml`, `uv.lock`, README를 먼저 확인해 주세요.

## 실행 참고

Python 기반 하위 프로젝트는 일반적으로 해당 폴더에서 다음과 같이 환경을 준비합니다.

```bash
uv sync
```

Jupyter Notebook은 생성된 가상환경을 커널로 선택해 실행합니다. PostgreSQL 실습 환경은 `05.SQL/postgres/postgres/docker-compose.yml`을 기준으로 구성되어 있습니다.
