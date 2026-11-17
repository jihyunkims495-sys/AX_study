# RAG 검색 최적화 실습

LangChain을 사용해 키워드 검색과 벡터 검색을 구성하고, 두 검색 결과를 결합하는 과정을 실습합니다.

## 실습 내용

- `05_01.ipynb`: BM25 검색기 구성과 키워드 검색
- `05_02.ipynb`: BM25와 PGVector를 결합한 Hybrid Search 및 검색 결과 기반 질의응답

## 실행 환경

- Python 3.13 이상
- PostgreSQL과 pgvector
- OpenAI API를 사용할 수 있는 프로젝트

실행 환경에는 `OPENAI_API_KEY`와 `DATABASE_URL`을 설정해야 합니다. 노트북에 지정된 모델을 사용하려면 해당 OpenAI 프로젝트에 모델 접근 권한이 있어야 합니다.

의존성은 `pyproject.toml`에 정의되어 있습니다.
