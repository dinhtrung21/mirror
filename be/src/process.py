from typing import Literal
from ai import Template

def inteprete_action(message: str) -> Literal['predict', 'look up', 'search']:
    Template.gen_ask_is_predict


def process(message: str) -> dict:
    # Inteprete message
    