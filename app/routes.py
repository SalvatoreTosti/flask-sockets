import json
from app import app, socketio
from flask import render_template, request
from flask import session as flask_session
from flask_socketio import emit, send

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@socketio.on('message', namespace='/socket')
def message(value):
    text = value['text']
    print('Text recieved: '+ text)
    emit(
        'message-response', #send a 'message-recieved response back to front end
        {'text': text}, #send the recieved back to front end
        broadcast = True) #send to ALL front end users, if set to false will only respond to the socket that sent the message.
            
@socketio.on('connect', namespace='/socket')
def socket_connect():
    print('Client connected')

@socketio.on('disconnect', namespace='/socket')
def socket_disconnect():
    print('Client disconnected')