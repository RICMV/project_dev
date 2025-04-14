from flask import Flask
from redis import Redis
import os
import socket

app = Flask(__name__)
redis = Redis(host=os.environ.get('REDIS_HOST', '127.0.0.1'), port=6379)


@app.route('/')
def hello():
    redis.incr('hits')
    counter = str(redis.get('hits'), 'utf-8')
    return f"This webpage has been viewed {redis.get('hist').decode('utf-8')} times and hostname is {socket.gethostname()}.\n"

if __name__ == "__main__":
    app.run()
