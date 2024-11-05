import pandas as pd
import requests
from datetime import datetime, timedelta
import time
import io
from typing import Union
import zoneinfo

SYUKUJITSU_CSV_URL = "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv"
JST = zoneinfo.ZoneInfo("Asia/Tokyo")


def load_holidays():
    try:
        response = requests.get(SYUKUJITSU_CSV_URL)
        holidays = pd.read_csv(
            io.BytesIO(response.content),
            encoding="shift_jis",
            parse_dates=["国民の祝日・休日月日"],
        )
        holidays.columns = ["Date", "Holiday Name"]
        return holidays
    except Exception as e:
        raise Exception(f"Failed to load holidays csv: {e}")


def is_today_holiday(holidays) -> Union[str, None]:
    today = datetime.now(JST).date()
    if today == datetime(today.year, 12, 31, tzinfo=JST).date():
        return f"今日は大晦日です。今年もお疲れ様でした！"
    elif today in holidays["Date"].dt.date.values:
        holiday_name = holidays[holidays["Date"].dt.date == today]["Holiday Name"].values[0]
        if holiday_name == "元旦":
            return f"今日は{holiday_name}です。明けましておめでとうございます！"
        else:
            return f"今日は{holiday_name}です。お休みを楽しんでください！"
    else:
        return None


def weekday_greeting() -> str:
    greetings = {
        "Monday": "新しい週の始まりです！今週も頑張りましょう！",
        "Tuesday": "まだ火曜日です！焦らずいきましょう。",
        "Wednesday": "週の真ん中です。あと少し頑張りましょう！",
        "Thursday": "木曜日です！週末はもうすぐ！",
        "Friday": "金曜日です！一週間お疲れ様でした。",
        "Saturday": "週末です！ゆっくり休んでください。",
        "Sunday": "日曜日です。充電して、来週に備えましょう！",
    }
    today_weekday = datetime.now().strftime("%A")
    return greetings[today_weekday]


def run_notifications():
    holidays = load_holidays()
    greeting = is_today_holiday(holidays)
    if greeting:
        print(greeting)
    else:
        print(weekday_greeting())


if __name__ == "__main__":
    run_notifications()
