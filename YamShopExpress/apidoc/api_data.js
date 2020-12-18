define({ "api": [
  {
    "type": "get",
    "url": "/banner",
    "title": "Request Banner information",
    "name": "GetBannerList",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "Banner",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n},\n{\n  \"boardSeq\" : 1,\n  \"boardName\" : \"Event\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/banner",
    "title": "Add banner",
    "name": "Post_Banner",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "Banner"
  },
  {
    "type": "delete",
    "url": "/board/:boardSeq",
    "title": "Delete board",
    "name": "Delete_board",
    "group": "Board",
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/board/:boardSeq",
    "title": "Delete board",
    "name": "Delete_board",
    "group": "Board",
    "version": "0.0.0",
    "filename": "routes/board.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/board/:boardSeq",
    "title": "Request Board information",
    "name": "GetBoard",
    "group": "Board",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "boardSeq",
            "description": "<p>Board's unique Seq.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/board/:boardSeq",
    "title": "Request Board information",
    "name": "GetBoard",
    "group": "Board",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "boardSeq",
            "description": "<p>Board's unique Seq.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/board.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/board",
    "title": "Request Board information",
    "name": "GetBoardList",
    "group": "Board",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/board.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n},\n{\n  \"boardSeq\" : 1,\n  \"boardName\" : \"Event\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/board/:boardSeq",
    "title": "Modify board",
    "name": "Modify_board",
    "group": "Board",
    "version": "0.0.0",
    "filename": "routes/board.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/board/:boardSeq",
    "title": "Modify board",
    "name": "Modify_board",
    "group": "Board",
    "version": "0.0.0",
    "filename": "routes/banner.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/board",
    "title": "Add board",
    "name": "Post_Board",
    "group": "Board",
    "version": "0.0.0",
    "filename": "routes/board.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"boardSeq\" : 0,\n  \"boardName\" : \"Product\",\n  \"readLevel\" : 0,\n  \"writeLevel\" : 2\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/cart/:cartSeq",
    "title": "Delete Cart",
    "name": "Delete_Cart",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cartSeq",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/cart.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/cart",
    "title": "장바구니 정보요청",
    "name": "GetCartList",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 액세스 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/cart.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"cartSeq\" : 0,\n  \"userSeq\" : 2,\n  \"prodSeq\" : 0\n},\n{\n  \"cartSeq\" : 0,\n  \"userSeq\" : 2,\n  \"prodSeq\" : 0\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/cart",
    "title": "장바구니 추가",
    "name": "Post_Cart",
    "group": "Cart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": "<p>상품 시퀀스 번호</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/cart.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"cartSeq\" : 0,\n  \"userSeq\" : 2,\n  \"prodSeq\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/category/:categorySeq",
    "title": "Delete board",
    "name": "Delete_category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/category/:categorySeq",
    "title": "Request Category information",
    "name": "GetCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categorySeq",
            "description": "<p>Category's unique Seq.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/category",
    "title": "Request category information",
    "name": "GetCategoryList",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 0\n},\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 1\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/category/:categorySeq",
    "title": "Modify Category",
    "name": "Modify_category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Add Category",
    "name": "Post_Category",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"categorySeq\" : 0,\n  \"categoryName\" : \"잡화\",\n  \"parentCategory\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/delivery/:prodSeq/:deliverySeq",
    "title": "Delete Delivery",
    "name": "Delete_Delivery",
    "group": "Delivery",
    "version": "0.0.0",
    "filename": "routes/delivery.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"deliverySeq\" : 0,\n  \"deliveryName\" : \"오늘 바로 배송 가능\",\n  \"prodSeq\" : 0,\n  \"deliveryPrice\" : 4000\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/delivery/:prodSeq",
    "title": "배송 정보 요청",
    "name": "GetDeliveryList",
    "group": "Delivery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/delivery.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"deliverySeq\" : 0,\n  \"deliveryName\" : \"오늘 바로 배송 가능\",\n  \"prodSeq\" : 0,\n  \"deliveryPrice\" : 4000\n},\n{\n  \"deliverySeq\" : 0,\n  \"deliveryName\" : \"오늘 바로 배송 가능\",\n  \"prodSeq\" : 0,\n  \"deliveryPrice\" : 4000\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/delivery/:prodSeq",
    "title": "배송 정보 등록",
    "name": "Post_Delivery",
    "group": "Delivery",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deliveryPrice",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/delivery.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"deliverySeq\" : 0,\n  \"deliveryName\" : \"오늘 바로 배송 가능\",\n  \"prodSeq\" : 0,\n  \"deliveryPrice\" : 4000\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/delivery/:prodSeq/:deliverySeq",
    "title": "배송 정보 수정",
    "name": "배송정보_수정",
    "group": "Delivery",
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>유저 접근 토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/delivery.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/file",
    "title": "파일 정보 요청",
    "name": "GetFileList",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "boardSeq",
            "description": "<p>게시판 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postSeq",
            "description": "<p>게시글 번호</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/file.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"fileSeq\" : 0,\n  \"fileUrl\" : \"https://s3-ap-northest...\",\n  \"boardSeq\" : 0,\n  \"uploaderSeq\" : 1,\n  \"postSeq\" : 3\n},\n{\n  \"fileSeq\" : 0,\n  \"fileUrl\" : \"https://s3-ap-northest...\",\n  \"boardSeq\" : 0,\n  \"uploaderSeq\" : 1,\n  \"postSeq\" : 3\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/payment",
    "title": "결제내역 요청",
    "name": "GetPaymentList",
    "group": "Payment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 액세스 토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"paymentSeq\" : 1,\n  \"prodSeq\" : 1,\n  \"deliveryState\": 0,\n  \"userSeq\" : 1\n},\n{\n  \"paymentSeq\" : 1,\n  \"prodSeq\" : 1,\n  \"deliveryState\": 0,\n  \"userSeq\" : 1\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/payment/purchase",
    "title": "결제 하기",
    "name": "Purchase_Product",
    "group": "Payment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 액세스 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": "<p>상품 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "purchaseInfo",
            "description": "<p>거래 정보</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "paymentSeq",
            "description": "<p>거래 번호</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment",
    "title": "결제 요청하기",
    "name": "Request_Purchase_Product",
    "group": "Payment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 액세스 토큰</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": "<p>상품 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>수량</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>상품 가격</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "deliveryFee",
            "description": "<p>배달비</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "priceSum",
            "description": "<p>총 가격</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/payment.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/pet",
    "title": "반려동물 정보 요청",
    "name": "GetPetInformation",
    "group": "Pet",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>사용자 접근 액세스 토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/pet.js",
    "groupTitle": "Pet",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"petSeq\" : 1,\n  \"userSeq\" : 1,\n  \"petInfo\": \"~~~\"\n},\n{\n  \"petSeq\" : 1,\n  \"userSeq\" : 1,\n  \"petInfo\": \"~~~\"\n},\n{\n  \"petSeq\" : 1,\n  \"userSeq\" : 1,\n  \"petInfo\": \"~~~\"\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/product",
    "title": "Request Product List",
    "name": "GetProduct",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "categorySeq",
            "description": "<p>Optional categorySeq</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/product/:prodSeq",
    "title": "DELETE ProductInfo",
    "name": "GetProductInfo",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "prodSeq",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/:prodSeq",
    "title": "Request ProductInfo",
    "name": "GetProductInfo",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "prodSeq",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/bomspick",
    "title": "Request Bomspick",
    "name": "GetProduct_List_by_bom",
    "group": "ProductList",
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "ProductList"
  },
  {
    "type": "get",
    "url": "/product/yamspick",
    "title": "Request Yamspick",
    "name": "GetProduct_List_by_yam",
    "group": "ProductList",
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "ProductList"
  },
  {
    "type": "post",
    "url": "/product",
    "title": "Add Product",
    "name": "Product_Post_For_Crawler",
    "group": "Product",
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "patch",
    "url": "/product/signaturepick/:prodSeq",
    "title": "Add To Signature Pick",
    "name": "Signature_Pick",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "prodSeq",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "who",
            "description": "<p>bom : 봄이 yam : 얌이</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isChecked",
            "description": "<p>0: false 1: true</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/product.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/user/token-verification",
    "title": "Check accessToken",
    "name": "Check_token_토큰_로그인",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>유저 액세스 토큰</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:userSeq",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userSeq",
            "description": "<p>User's unique Seq.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Request User information",
    "name": "GetUserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Current page number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Page size</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n},\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n}\n]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/user/:userSeq",
    "title": "Modify user",
    "name": "Modify_user_회원정보_수정",
    "group": "User",
    "permission": [
      {
        "name": "admin",
        "title": "Only admin User access only",
        "description": "<p>Only admin can access.</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userSeq",
            "description": "<p>사용자 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>비밀 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>휴대폰 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>접근 액세스 토큰</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 남성 : 0, 여성 : 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>사용자 타입</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/signin",
    "title": "Sign In user",
    "name": "SignIn_User_로그인",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>비밀번호</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userSeq\" : 0,\n  \"email\" : \"haemin001212@gmail.com\",\n  \"pw\" : wqewfosieoajfhwejf@fweali3j,\n  \"name\" : \"정해민\",\n  \"phone\" : 01098810664,\n  \"registerTime\" : 1605929904,\n  \"accessToken\" : wqewfosieoajfhwejf@fweali3jwqewfosieoajfhwejf@fweali3j,\n  \"gender\" : 0,\n  \"typeSeq\" : 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "Sign up user",
    "name": "SignUp_User",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pw",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>휴대폰 번호</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>생년월</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 남성 : 0, 여성 : 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "typeSeq",
            "description": "<p>사용자 타입 (없어도 됨.)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"fieldCount\": 0,\n \"affectedRows\": 1,\n \"insertId\": 1,\n \"info\": \"\",\n \"serverStatus\": 2,\n \"warningStatus\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": ""
  }
] });
