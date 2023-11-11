from .knowledge_extract import extract_knowledge


def process(message: str) -> dict:
    knowledges = extract_knowledge(message)

    repsonse = " ".join(knowledges)

    return {
        "response": repsonse,
    }
