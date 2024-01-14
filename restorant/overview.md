dom elements bubbling


fielset
|
label
|    |
|    +-input[type="checkbox"]
     |   \
|    |    +----change------toggleMenuItemHandler(event)
|    |
|    +--#text:Pizza
|
+--div
|     |
|     |
|    +--button:- 
|          \    
|          +----change------decHandler(event)
|
+---input
|
|
+--button:+
     \
      +------click -----incHandler(event)
