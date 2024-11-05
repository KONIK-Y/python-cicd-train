import pandas as pd
import requests
from datetime import datetime, timedelta
import schedule
import time

SYUKUJITSU_CSV_URL = "https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv"


def load_holidays():
    try:
        response = requests.get(SYUKUJITSU_CSV_URL)
        response.encoding = "shift_jis"
        csv_data = response.text
        holidays = pd.read_csv(pd.compat.StringIO(csv_data), parse_dates=["国民の祝日・休日月日"], encoding="shift_jis")
        holidays.columns = ["Date", "Holiday Name"]  # カラム名を使いやすいように変更
        return holidays
    except Exception as e:
        raise Exception(f"Failed to load holidays csv: {e}")


# 今日が祝日かをチェック
def is_today_holiday(holidays):
    today = datetime.now().date()
    if today in holidays["Date"].dt.date.values:
        holiday_name = holidays[holidays["Date"].dt.date == today]["Holiday Name"].values[0]
        print(f"今日は{holiday_name}です。お休みを楽しんでください！")
    else:
        print("今日は祝日ではありません。素敵な一日をお過ごしください！")


# 次の3連休を確認
def find_next_long_weekend(holidays):
    today = datetime.now().date()
    holidays_in_future = holidays[holidays["Date"].dt.date >= today]

    for i in range(len(holidays_in_future) - 2):
        day1 = holidays_in_future.iloc[i]["Date"].date()
        day2 = holidays_in_future.iloc[i + 1]["Date"].date()
        day3 = holidays_in_future.iloc[i + 2]["Date"].date()

        if day2 == day1 + timedelta(days=1) and day3 == day2 + timedelta(days=1):
            print(f"次の3連休は {day1} - {day3} です。予定を立てましょう！")
            return

    print("今後の3連休は見つかりませんでした。")


# 曜日ごとの挨拶メッセージ
def weekday_greeting():
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
    print(greetings[today_weekday])


# 各機能を実行する関数
def run_notifications():
    holidays = load_holidays()
    is_today_holiday(holidays)
    find_next_long_weekend(holidays)
    weekday_greeting()


# 定期実行のスケジュールを設定
schedule.every().day.at("08:00").do(run_notifications)

# 定期実行
while True:
    schedule.run_pending()
    time.sleep(60)
