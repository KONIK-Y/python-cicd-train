import pytest
from unittest.mock import patch, Mock
from freezegun import freeze_time
import datetime
import zoneinfo

from src.main import is_today_holiday, load_holidays, weekday_greeting

JST = zoneinfo.ZoneInfo("Asia/Tokyo")
EST = zoneinfo.ZoneInfo("America/New_York")
NZST = zoneinfo.ZoneInfo("Pacific/Auckland")


@pytest.fixture
def mock_requests_get():
    with patch("requests.get") as mock_get:
        sample_csv = """国民の祝日・休日月日,国民の祝日・休日名称
2025/1/1,元旦
2025/4/29,昭和の日
2025/5/3,憲法記念日
2025/5/4,みどりの日
2025/5/5,こどもの日
2025/5/6,休日"""
        mock_response = Mock()
        mock_response.content = sample_csv.encode("shift_jis")
        mock_response.encoding = "shift_jis"
        mock_get.return_value = mock_response
        yield


@freeze_time("2025-01-01")
def test_is_today_holiday_on_gantan(mock_requests_get):
    holidays = load_holidays()
    message = is_today_holiday(holidays)
    expected_message = "今日は元旦です。明けましておめでとうございます！"
    assert message == expected_message


@freeze_time("2025-05-03")
def test_is_today_holiday_on_holiday(mock_requests_get):
    holidays = load_holidays()
    message = is_today_holiday(holidays)
    expected_message = "今日は憲法記念日です。お休みを楽しんでください！"
    assert message == expected_message


@freeze_time("2025-05-02")
def test_is_today_holiday_on_non_holiday(mock_requests_get):
    holidays = load_holidays()
    message = is_today_holiday(holidays)
    assert message is None


@freeze_time("2025-05-05")
def test_weekday_greeting_monday():
    greeting = weekday_greeting()
    expected_greeting = "新しい週の始まりです！今週も頑張りましょう！"
    assert greeting == expected_greeting


@freeze_time(f"{datetime.datetime(2024,12,31,10,0,0,0,tzinfo=EST)}")
def test_is_today_omisoka_in_cet(mock_requests_get):
    holidays = load_holidays()
    message = is_today_holiday(holidays)
    expected_message = "今日は元旦です。明けましておめでとうございます！"
    assert message == expected_message


@freeze_time(f"{datetime.datetime(2024,1,1,0,0,0,0,tzinfo=NZST)}")
def test_is_today_omisoka_in_nzst(mock_requests_get):
    holidays = load_holidays()
    message = is_today_holiday(holidays)
    expected_message = "今日は大晦日です。今年もお疲れ様でした！"
    assert message == expected_message
