import pandas as pd
import requests
from datetime import datetime, timedelta
import time
import io
from typing import Union
import zoneinfo


class DryRun:
    def __init__(self, ):

    def inject_data_to_template(self, template: str, value: Union[str, int]) -> str:
        return template.format(value)

    def export_html(self, file_name: str) -> None:
        pass
