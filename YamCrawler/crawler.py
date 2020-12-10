from bs4 import BeautifulSoup
from urllib.request import urlopen
from urllib import request, parse
import json

with urlopen('https://search.shopping.naver.com/best100v2/detail.nhn?catId=50000155') as response:
    soup = BeautifulSoup(response, 'html.parser')
    i = 0
    allData = []
    for title in soup.select("p.cont"):
        allData.append([])
        name = title.get_text()[1:-1]
        allData[i].append(name)
        i = i+1
    i = 0
    for price in soup.select("div.price span.num"):
        lowPrice = price.text
        allData[i].append(lowPrice+"원")
        i = i+1
    i = 0
    for image in soup.select("img._productLazyImg"):
        imgUrl = image.get("data-original")
        allData[i].append(imgUrl)
        i = i+1
    print(allData)

    headers = {'Content-Type': 'application/json; chearset=utf-8'}
    data = {'title': 'dummy title', 'id': 1, 'message': 'hello world!'}
    req = request.Request('http://127.0.0.1:5000', headers=headers, data=json.dumps(data).encode('utf-8'))
    res = request.urlopen(req)
    print(str(res.status_code) + " | " + res.text)