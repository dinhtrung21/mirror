import src
from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route("/api/chatbot", methods=["POST"])
def route():
    if request.method != "POST":
        return jsonify(
            isError=True,
            message="Method not supported. Must be GET",
            statusCode=405,
        )

    d = request.get_json()

    if "message" not in d:
        return jsonify(
            isError=True,
            message="JSON must have 'message' key",
            statusCode=405,
        )

    message = d["message"]

    # Start processing
    response = src.process(message)

    return jsonify(response)
