"""도서 관리 CLI 프로그램 진입점."""

# TODO: models와 utils에서 필요한 클래스/함수를 import한다.

# 여러 도서 객체를 순서대로 보관하기 위한 리스트
books = []

# ISBN은 중복되면 안 되므로 고유값 확인을 위한 집합
isbn_set = set()


def show_menu():
    """CLI 메뉴를 화면에 표시한다."""
    print("\n=== 도서 관리 시스템 ===")
    print("1. 도서 등록")
    print("2. 전체 도서 조회")
    print("3. 도서 검색")
    print("4. 대여/반납 처리")
    print("5. 종료")


def main():
    """프로그램의 메인 반복 루프."""
    # TODO: while 문으로 종료 전까지 메뉴를 반복한다.
    # TODO: input() 또는 utils의 입력 함수를 이용한다.
    # TODO: 메뉴 번호에 따라 등록/조회/검색/대여반납 함수를 호출한다.
    show_menu()


if __name__ == "__main__":
    main()
