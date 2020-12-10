from bs4 import BeautifulSoup
from urllib.request import urlopen

with urlopen('https://search.shopping.naver.com/best100v2/detail.nhn?catId=50000155') as response:
    soup = BeautifulSoup(response, 'html.parser')
    i = 0
    allData = []
    for title in soup.select("p.cont"):
        allData.append([])
        allData[i].append(title.get_text())
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