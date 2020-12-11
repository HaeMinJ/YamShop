from bs4 import BeautifulSoup
from urllib.request import urlopen
from urllib import request, parse
import json

categorySeq = 54
catId = str(50008508)
url = 'https://search.shopping.naver.com/best100v2/detail.nhn?catId='+catId
with urlopen(url) as response:
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
        lowPrice = int(price.text.replace(',', ''))
        allData[i].append(lowPrice)
        i = i+1
    i = 0
    for image in soup.select("img._productLazyImg"):
        imgUrl = image.get("data-original")
        allData[i].append(imgUrl)
        i = i+1
    print(allData)
    headers = {'Content-Type': 'application/json; chearset=utf-8'}
    for d in allData:
        data = {'name': d[0], 'price': d[1], 'imageUrl' : d[2], 'categorySeq' : categorySeq}
        req = request.Request('https://api.bomandyam.shop:3000/product', headers=headers, data=json.dumps(data).encode('utf-8'))
        res = request.urlopen(req)
        print(str(res.status) + " | " + res.read().decode('utf-8'))