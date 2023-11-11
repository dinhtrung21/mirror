class Template:
    @classmethod
    def gen_ask_is_predict(cls, msg: str):
        sentence = f"Just answer yes or no is the following require predicting: {msg}"

        return sentence

    @classmethod
    def gen_ask_what_predict(cls, msg: str):
        sentence = f"is the following setence price or trend: {msg}"

        return sentence
