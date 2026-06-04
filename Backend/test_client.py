import urllib.request
import json

url = "http://localhost:5000/api/reaction"
data = {"tag": "Empathy"}

json_data = json.dumps(data).encode('utf-8')

req = urllib.request.Request(url, data=json_data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req) as res:
        result = res.read().decode('utf-8')
        print("Server's answer: ")
        print(json.dumps(json.loads(result), indent=2))
except Exception as e:
    print(f"Error: {e}")