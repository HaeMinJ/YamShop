from bs4 import BeautifulSoup
from urllib.request import urlopen
from urllib import request, parse
import json


categoryData = [
    [10, 50006631],
    [11, 50006632],
    [12, 50006633],
    [13, 50006634],
    [14, 50006635],
    [15, 50008289],
    [16, 50006637],
    [17, 50006638],
    [18, 50006639],
    [19, 50006640],
    [20, 50006641],
    [21, 50006642],
    [22, 50006643],
    [23, 50006644],
    [24, 50006645],
    [25, 50008408],
    [26, 50006647],
    [27, 50006648],
    [28, 50006649],
    [29, 50006650],
    [30, 50006652],
    [31, 50006653],
    [32, 50006655],
    [33, 50006657],
    [34, 50006656],
    [35, 50006658],
    [36, 50006659],
    [37, 50006660],
    [38, 50006661],
    [39, 50006663],
    [40, 50006664],
    [41, 50006665],
    [42, 50006666],
    [43, 50006667],
    [44, 50006668],
    [45, 50006669],
    [46, 50006670],
    [47, 50006671],
    [48, 50008348],
    [49, 50008309],
    [50, 50006674],
    [51, 50006676],
    [52, 50006677],
    [53, 50008508],
    [60, 50006679],
    [61, 50006680],
    [62, 50006682],
    [63, 50006683],
    [64, 50008388],
    [65, 50006685],
    [66, 50006686],
    [67, 50006687],
    [68, 50006688],
    [69, 50006689],
    [70, 50006690],
    [71, 50006691],
    [72, 50006692],
    [73, 50006693],
    [74, 50008368],
    [75, 50006695],
    [76, 50006696],
    [77, 50006697],
    [78, 50006698],
    [79, 50006699],
    [80, 50006700],
    [81, 50006701],
    [82, 50006702],
    [83, 50006703],
    [84, 50008389],
    [85, 50006705],
    [86, 50006706],
    [87, 50006707],
    [88, 50008488],
    [89, 50006719],
    [90, 50006720],
    [91, 50006721],
    [92, 50006722],
    [93, 50006723],
    [94, 50006922]
]

for category in categoryData:

    categorySeq = category[0]
    catId = str(category[1])
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
            if(len(d) < 3):
                continue
            data = {'name': d[0], 'price': d[1], 'imageUrl' : d[2], 'categorySeq' : categorySeq}
            req = request.Request('https://api.bomandyam.shop:3000/product', headers=headers, data=json.dumps(data).encode('utf-8'))
            res = request.urlopen(req)
            print(str(res.status) + " | " + res.read().decode('utf-8'))