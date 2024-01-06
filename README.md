Projeyi indirdikten sonra npm install attıktan sonra npm run start ile proje localde kalkmaktadır.
kullandığım teknolojiler;
js frameworkleri;
react,redux,drei
2-3 adet component dışardan importladım fav eklendi kutusu veya kalp emote gibi
css de düz css + tailwind kullandım responsive mediaquery ile elle yazdım tamamı grid ile boostrap yada primereact gibi framework kullanmadım.
Projeyi anlatıcak olursam sol taraftaki city filter menüsü gelen listedeki lokasyonlara göre bastırdım lokasyon seçip de aramada yapabiliyorsunuz seçmeden de arama sistemi çalışıyor.
lokasyona izin verirseniz konum bilginizi long lat olarak çekip bir api yardımıyla ücretsiz bir siteden ülke il ilçe olarak çevirerek ön yüze verdim.
redux kısmını fav list için kullandım sayfa refreshlenince kaybolmasın diye localstorage e attım.
details butonu ile gelen verilerin room bilgisi görünürken oraya drei kullanarak canvas içine 3d bir room öğesi ekledim bu tabi db de nasıl saklanır vs. düşünülür sonuçta prototip.
Bu canvas içinde scroll ile zoom out yada in yapıp maus sağ tık ile objeyi kaydırabilirsiniz. 
Canlı hali için :
https://master--idyllic-valkyrie-e5207b.netlify.app
