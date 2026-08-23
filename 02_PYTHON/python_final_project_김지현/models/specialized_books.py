"""하위 도서 클래스 모듈."""

from models.base_book import Book


class PrintedBook(Book):
    """일반 단행본 클래스."""

    # TODO: Book을 상속받고 필요한 추가 속성을 정의한다.
    # TODO: 상세 정보 메서드를 오버라이딩한다.
    pass


class Ebook(Book):
    """전자도서 클래스."""

    # TODO: Book을 상속받고 전자도서만의 추가 속성을 정의한다.
    # TODO: 상세 정보 메서드를 오버라이딩한다.
    pass
