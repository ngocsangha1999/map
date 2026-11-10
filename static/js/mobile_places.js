// Dữ liệu 3 tab của bản đồ mobile, theo 3 tuyến câu chuyện của web thuyết minh số
// Đền Kim Liên (https://thuyetminhsodenkimlien.vercel.app). Sửa nội dung tại đây.
// x, y: vị trí ghim tính theo % trên bức tranh bản đồ gốc
// (0,0 là góc trên bên trái, 100,100 là góc dưới bên phải).
// Một công trình có thể nằm ở nhiều tab (mỗi tuyến một bài thuyết minh riêng): dùng id khác nhau, cùng x, y.
// model3d: link mô hình 3D trên Sketchfab (có thì hiện 3D thay cho ảnh).
// audio: file thuyết minh lấy từ web thuyết minh số.
// slides: ảnh cho trang thuyết minh theo ảnh, mỗi ảnh ứng với một đoạn của text
// (thiếu thì dùng image; đoạn cuối mặc định lấy ảnh điểm kế tiếp trong tuyến).
// cues: giây bắt đầu của từng đoạn trong audio; bỏ trống thì ước lượng theo độ dài chữ.
var MOBILE_TABS = [
    {
        id: 'dong-lam',
        title: 'Hoài niệm Đồng Lầm',
        places: [
            {
                id: 'ho-kim-lien',
                name: 'Hồ Kim Liên',
                x: 36, y: 75,
                image: './static/images/places/ho-kim-lien.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-1-1-1-ho-kim-lien-vn.mp3',
                text: 'Thưa quý khách, điểm dừng chân đầu tiên thu hút ánh nhìn của chúng ta chính là hồ bán nguyệt – nay là hồ Kim Liên nằm ngay trước khu vực nghi môn, được thành phố đầu tư xây dựng hoàn thiện vào năm 2010 nhân kỷ niệm 1000 năm Thăng Long - Hà Nội.\n'
                    + 'Xưa kia, vùng đất này là một vùng đầm nước rộng nhiều bùn (bao gồm cả hồ Ba Mẫu, hồ Bảy Mẫu và dòng sông Kim Ngưu dài). Chính thứ bùn đặc biệt, riêng có của vùng đất này đã được nhân dân làng Đồng Lầm lấy dưới hồ để sử dụng cho nghề nhuộm vải nâu trứ danh, tạo ra những sản phẩm vải nâu non, nâu sồng mỏng như voan hay vải Rồng đẹp lừng lẫy gần xa, từng được ca dao ngợi ca: “Đồng Lầm có vải Nâu non / Có hồ cá rộng, có con sông dài”. Ven hồ xưa chính là nơi người dân thường phơi những tấm vải đẹp tuyệt vời ấy, mang ý nghĩa “tụ linh, tụ phúc” cho di tích.\n'
                    + 'Rời mặt hồ phẳng lặng mang đậm dấu ấn làng nghề, xin mời quý khách tiếp tục bước theo lối đi rợp bóng cây xanh để đến với điểm dừng chân tiếp theo – giếng Ngọc thanh tịnh, một nguồn nước thiêng đã gắn bó bao đời với đời sống tâm linh của người dân nơi đây...'
            },
            {
                id: 'gieng-ngoc',
                name: 'Giếng Ngọc',
                x: 73, y: 61,
                image: './static/images/places/gieng-ngoc.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-1-2-1-gieng-ngoc-vn.mp3',
                text: 'Tiếp bước hành trình, xin mời quý khách rẽ sang phía bên phải khu vực nghi môn để ghé thăm giếng Ngọc hay còn gọi là giếng đình. Giếng được xây dựng theo hình tròn đều đặn, phần móng phía dưới được kè đá vững chãi, phía trên bao quanh bởi tường hoa và các trụ biểu thông thoáng.\n'
                    + 'Từ bao đời nay, nguồn nước trong giếng Ngọc luôn mát lành, không chỉ phục vụ cho các nhu cầu hương khói, lễ nghi của đền mà còn hòa quyện vào không gian cảnh quan thanh tịnh, lưu giữ nét đẹp cổ kính của chốn làng quê xưa.\n'
                    + 'Sau khi chiêm ngưỡng vẻ đẹp trong lành của Giếng Ngọc, chúng ta hãy cùng nhau bước vào không gian thâm nghiêm bên trong để chiêm ngưỡng tấm bia đá cổ và ngược dòng thời gian qua những trang sử được khắc họa trên đá...'
            },
            {
                id: 'mieu-bia',
                name: 'Miếu Bia',
                x: 58.5, y: 33,
                image: './static/images/places/mieu-bia.webp',
                slides: [
                    './static/images/places/mieu-bia.webp',
                    './static/images/places/mieu-bia-tran-bia.webp',
                    './static/images/places/nghi-mon-ngoai.webp'
                ],
                model3d: 'https://sketchfab.com/3d-models/bia-than-tich-5c56de6dd8dd49ab8a056bb7f85bfed5',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-1-3-1-tam-bia-da-co-vn.mp3',
                text: 'Rời giếng Ngọc, chúng ta bước vào không gian thâm nghiêm để chiêm ngưỡng tấm bia đá cổ vô giá mang tên “Cao Sơn đại vương thần từ bi minh tịnh tự”. Tấm bia này do quan Đại học sĩ Lê Tung soạn văn từ năm 1510 và được chính thức khắc đá vào năm Cảnh Hưng thứ 33 (năm 1772).\n'
                    + 'Trán bia chạm trổ nổi bật hình “lưỡng long chầu nhật”, diềm hai bên uốn lượn hình rồng rất sinh động. Phần mặt bia khắc chìm bài văn kể lại công lao vĩ đại của thần Cao Sơn trong việc hiển linh phù giúp vua Lê Tương Dực dẹp loạn, bảo vệ giang sơn xã tắc, đồng thời ghi chép lại quá trình xây dựng, tu bổ ngôi đền, trở thành cuốn sử biên niên vô giá cho hậu thế.\n'
                    + 'Sau khi tìm hiểu những dấu ấn lịch sử được khắc ghi trên bia đá, xin mời quý khách tiến ra trục đường thần đạo để khám phá công trình bề thế khép lại chặng hành trình đầu tiên – khu vực Nghi môn tứ trụ....'
            },
            {
                id: 'nghi-mon-ngoai-dl',
                name: 'Nghi Môn Ngoại',
                x: 38.5, y: 60,
                image: './static/images/places/nghi-mon-ngoai.webp',
                model3d: 'https://sketchfab.com/3d-models/congnghimon-302e0787818e40e2af2b1dcc0ff8a54c',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-1-4-1-nghi-mon-tu-tru-vn.mp3',
                text: 'Điểm dừng chân khép lại chặng một là khu vực Nghi môn ngoại bề thế nằm trên trục đường thần đạo. Công trình được xây dựng bằng gạch với hệ thống bốn trụ biểu lớn nhỏ bố trí cân xứng. Ngước nhìn lên đỉnh các trụ biểu, quý khách sẽ thấy hình tượng tứ phượng, hổ phù và các ô lồng đèn chạm trổ tinh xảo.\n'
                    + 'Nối giữa các trụ là hệ thống mái lợp ngói ta với bờ nóc đắp nổi hình lưỡng long chầu mặt trời và các góc đao cong uốn lượn. Đứng tại đây, nhìn ra Ô Kim Hoa xưa – hay còn gọi là Ô Đồng Lầm, cửa ô mở qua tường phía Nam thành đất Thăng Long – chúng ta như cảm nhận rõ hơn nhịp sống giao hòa giữa kinh kỳ và không gian làng xã.\n'
                    + 'Chúc quý khách có những trải nghiệm thật ý nghĩa, đong đầy cảm xúc và tìm lại được những ký ức hoài niệm tuyệt vời về đất Đồng Lầm xưa trong chặng hành trình đầu tiên này!'
            }
        ]
    },
    {
        id: 'tran-nam',
        title: 'Hào Khí Trấn Nam',
        places: [
            {
                id: 'nghi-mon-ngoai',
                name: 'Nghi Môn Ngoại',
                x: 38.5, y: 60,
                image: './static/images/places/nghi-mon-ngoai.webp',
                model3d: 'https://sketchfab.com/3d-models/congnghimon-302e0787818e40e2af2b1dcc0ff8a54c',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-2-1-1-nghi-mon-tu-tru-vn.mp3',
                text: 'Thưa quý khách, chúng ta khởi đầu chặng hành trình từ Nghi môn ngoại uy nghiêm với hệ thống trụ biểu đắp nổi tứ phượng, hổ phù và các ô lồng đèn tinh xảo, chính là lối mở đầu bước vào cõi linh thiêng của một trong Thăng Long Tứ Trấn – ngôi đền thờ vị thần Trấn Nam được khởi dựng từ thời Lý.\n'
                    + 'Từ cổng ngoại uy nghiêm, xin mời quý khách tiếp tục bước qua những bậc thềm cổ kính để tiến vào không gian linh thiêng bên trong, nơi lưu dấu những dấu ấn kiến trúc độc đáo từ thời Lê Trung Hưng.'
            },
            {
                id: 'nghi-mon-noi',
                name: 'Nghi môn nội',
                x: 39.5, y: 41.5,
                image: './static/images/places/nghi-mon-noi.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-2-2-1-nghi-mon-noi-vn.mp3',
                text: 'Tiếp đó, đoàn vượt qua 9 bậc gạch vồ có kích thước lớn – những viên gạch cổ quý giá từ thời Lê Trung Hưng – kết hợp cùng đôi rồng đá thành bậc mang phong cách thời Nguyễn để tiến lên gò cao, bước qua Nghi môn nội.\n'
                    + 'Ngôi nhà ba gian với hệ thống tường hồi bít đốc và bốn trụ biểu cao vút này mở ra một không gian nghệ thuật chạm trổ vô cùng sống động. Nhìn lên các bộ vì kèo chạm nổi mây cuộn, phượng hàm thư, long mã và đặc biệt là những khối rồng chạm bong kênh nhiều lớp, chúng ta như thấy được tài hoa đỉnh cao của các nghệ nhân xưa.\n'
                    + 'Đi qua Nghi môn nội đầy nghệ thuật ấy, xin mời quý khách tiến bước vào không gian trọng tâm và uy nghiêm nhất của ngôi đền – tòa Đại bái linh thiêng.'
            },
            {
                id: 'toa-tien-te',
                name: 'Tòa tiền tế (Đại bái)',
                x: 40.5, y: 30,
                image: './static/images/places/toa-tien-te.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-2-3-1-toa-tien-te-vn.mp3',
                text: 'Bước sâu vào bên trong, quý khách sẽ đặt chân đến tòa Đại bái – trái tim của ngôi đền chính, được kết cấu theo kiểu chữ Đinh quy mô ba gian hai chái với nền lát gạch Bát Tràng.\n'
                    + 'Ngước nhìn hệ thống khung gỗ bốn bộ vì kết cấu theo kiểu “giá chiêng chồng rường con nhị” cùng các cột cái, câu đầu, xà nách và bẩy chạm khắc hoa văn lá lật tinh xảo, ta càng thêm thán phục quy mô kiến trúc và tâm huyết của cha ông trong việc gìn giữ ngôi đền thờ vị thần Cao Sơn – người có công lớn phò vua giúp nước qua các triều đại\n'
                    + 'Ngay tại không gian trang nghiêm của tòa tiền tế này, xin mời quý khách hướng tầm mắt chiêm ngưỡng sự bài trí tỉ mỉ và tìm hiểu những di vật vô giá đang được bảo lưu nơi đây.'
            },
            {
                id: 'khu-nho-tien-te',
                name: 'Các khu nhỏ trong tòa tiền tế',
                x: 45, y: 28.5,
                image: './static/images/places/khu-nho-tien-te.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-2-4-1-cac-khu-nho-vn.mp3',
                text: 'Tại không gian trang nghiêm bên trong tòa tiền tế, mọi thứ được sắp đặt rạch ròi và tinh tế để phục vụ sinh hoạt tín ngưỡng: tại gian giữa là nơi bài trí sập thờ, hương án, án gian để tri ân cộng đồng các quan; dịch sang gian chái bên phải là ban thờ Tổ nghề và Tam phủ, gợi nhắc về truyền thống gắn kết cộng đồng; trong khi phần không gian còn lại được để trống thông thoáng cho sinh hoạt làng xã. Nơi đây không chỉ lưu dấu truyền thuyết về thần Cao Sơn từ thuở dựng nước Văn Lang cho đến công trạng hiển hách phò tá nhà Lê, mà còn gắn liền với hệ thống 33 đạo sắc phong quý giá từ thời Lê đến thời Nguyễn được lưu giữ tại đền.\n'
                    + 'Chúc quý khách có một hành trình khám phá lịch sử thật hào hùng, trọn vẹn niềm tự hào về hào khí Thăng Long Tứ Trấn và thêm yêu mến những giá trị văn hóa truyền thống của dân tộc!'
            }
        ]
    },
    {
        id: 'thi-thanh',
        title: 'Nét xưa chốn Thị thành',
        places: [
            {
                id: 'ho-kim-lien-tt',
                name: 'Hồ Kim Liên',
                x: 36, y: 75,
                image: './static/images/places/ho-kim-lien.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-3-1-1-ho-kim-lien-vn.mp3',
                text: 'Thưa quý khách, mở đầu chặng cuối là hồ bán nguyệt thanh tịnh ngay trước cửa đền, được đầu tư xây dựng năm 2010. Không chỉ mang ý nghĩa “tụ linh, tụ phúc” và điều hòa cảnh quan, hồ nước này còn gợi nhắc về một làng cổ Kim Liên xưa với những con người tài hoa.\n'
                    + 'Ngoài nghề nhuộm vải nâu, nơi đây còn nổi danh với nghề cắt tóc truyền thống được truyền tụng qua câu ca: “Kim Liên xanh vỏ, đỏ lòng / Đàn ông cắt tóc, đàn bà hái rau”. Nhờ lời khuyên của thầy địa lý Tả Ao thuở trước, trai làng Kim Liên với đôi tay hoa mỹ, điêu nghệ từng được mệnh danh là “Thăng Long đệ nhất kéo”, cắt tóc như múa trên đầu người và đi hành nghề khắp phố phường Hà Nội trước năm 1945.\n'
                    + 'Từ mặt hồ mang đậm dấu ấn làng nghề tài hoa, xin mời quý khách bước tiếp qua bậc thềm lịch sử để trở lại với không gian kiến trúc gỗ đầy tinh xảo của ngôi đền.'
            },
            {
                id: 'nghi-mon-noi-tt',
                name: 'Nghi môn nội',
                x: 39.5, y: 41.5,
                image: './static/images/places/nghi-mon-noi.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-3-2-1-nghi-mon-noi-vn.mp3',
                text: 'Rời khung cảnh làng nghề xưa, đoàn tiến qua thềm bậc gạch vồ thời Lê Trung Hưng để đến với Nghi môn nội. Tại đây, những mảng trang trí công phu như rồng chạm bong kênh, mây cuộn và phượng hàm thư trên các bộ vì kèo bằng gỗ không chỉ làm tăng giá trị thẩm mỹ mà còn tạo cảm giác thanh thoát, nhẹ nhàng cho khối kiến trúc nằm trên gò cao.\n'
                    + 'Đi sâu vào không gian bên phải của hậu cung, xin mời quý khách ghé thăm một không gian tín ngưỡng đặc sắc khác, nơi thể hiện sự dung hợp văn hóa phong phú của người Việt'
            },
            {
                id: 'nha-mau',
                name: 'Nhà Mẫu',
                x: 51, y: 47,
                image: './static/images/places/nha-mau.webp',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-3-3-1-nha-mau-vn.mp3',
                text: 'gian được di dời và thiết lập tại đây từ năm 1972 do sự thay đổi quy hoạch của thủ đô Hà Nội.\n'
                    + 'Với kiến trúc ba gian tường hồi bít đốc và hệ thống bệ thờ, tượng thờ bài trí trang nghiêm dọc theo chiều dọc căn nhà, nơi đây minh chứng cho sự dung hợp tín ngưỡng hài hòa, phong phú trong đời sống tâm linh của người Việt bên cạnh các vị thần hoàng làng.\n'
                    + 'Và điểm dừng chân cuối cùng để khép lại toàn bộ hành trình ý nghĩa này chính là không gian trầm mặc, linh thiêng của tòa Đại bái.'
            },
            {
                id: 'toa-tien-te-tt',
                name: 'Tòa tiền tế (Đại bái)',
                x: 40.5, y: 30,
                image: './static/images/places/toa-tien-te.webp',
                model3d: 'https://sketchfab.com/3d-models/traditional-carved-bell-w-lod-nepal-heritage-24e57dbb36ce41368ba14c887db5f8df',
                audio: 'https://thuyetminhsodenkimlien.vercel.app/audio/A-3-4-1-toa-tien-te-vn.mp3',
                text: 'Điểm dừng chân khép lại toàn bộ hành trình là tòa Đại bái (tòa tiền tế) của đền chính. Nơi đây lưu giữ hệ thống di vật vô giá qua các thời kỳ như hoành phi, câu đối, long ngai bài vị sơn thếp vàng uy nghiêm cùng hệ thống sắc phong dọc dài theo lịch sử.\n'
                    + 'Đứng giữa không gian trầm mặc, lắng nghe tiếng chuông vọng và hương trầm lan tỏa tại tòa tiền tế, mỗi chúng ta như tìm về được sự bình an sâu thẳm, thêm trân trọng những giá trị văn hóa, lịch sử ngàn năm mà bao thế hệ nhân dân Thăng Long – Hà Nội đã gìn giữ.\n'
                    + 'Chúc quý khách sẽ có những phút giây thư thái tuyệt vời, tìm lại được sự bình an trong tâm hồn và lưu giữ trọn vẹn những kỷ niệm đẹp đẽ, sâu lắng tại chốn linh thiêng giữa lòng Thủ đô!'
            }
        ]
    }
];
