// Dữ liệu 3 tab của bản đồ mobile. Sửa nội dung tại đây.
// x, y: vị trí ghim tính theo % trên bức tranh bản đồ gốc
// (0,0 là góc trên bên trái, 100,100 là góc dưới bên phải).
var MOBILE_TABS = [
    {
        id: 'dong-lam',
        title: 'Hoài niệm Đồng Lầm',
        places: [
            {
                id: 'den-chinh',
                name: 'Đền chính',
                x: 40.5, y: 30,
                image: './static/images/places/den-chinh.webp',
                text: 'Nội dung mẫu: giới thiệu về đền chính. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'cay-da',
                name: 'Cây đa cổ thụ',
                x: 58.5, y: 33,
                image: './static/images/places/cay-da.webp',
                text: 'Nội dung mẫu: giới thiệu về cây đa cổ thụ. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'ho-ban-nguyet',
                name: 'Hồ bán nguyệt',
                x: 36, y: 75,
                image: './static/images/places/ho-ban-nguyet.webp',
                text: 'Nội dung mẫu: giới thiệu về hồ bán nguyệt. Thay đoạn này bằng nội dung thật.'
            }
        ]
    },
    {
        id: 'tran-nam',
        title: 'Hào Khí Trấn Nam',
        places: [
            {
                id: 'nghi-mon',
                name: 'Nghi môn',
                x: 38.5, y: 60,
                image: './static/images/places/nghi-mon.webp',
                text: 'Nội dung mẫu: giới thiệu về nghi môn. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'ta-vu',
                name: 'Nhà Tả vu',
                x: 28, y: 47,
                image: './static/images/places/ta-vu.webp',
                text: 'Nội dung mẫu: giới thiệu về nhà Tả vu. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'huu-vu',
                name: 'Nhà Hữu vu',
                x: 51, y: 47,
                image: './static/images/places/huu-vu.webp',
                text: 'Nội dung mẫu: giới thiệu về nhà Hữu vu. Thay đoạn này bằng nội dung thật.'
            }
        ]
    },
    {
        id: 'thi-thanh',
        title: 'Nét xưa chốn Thị thành',
        places: [
            {
                id: 'ho-tron',
                name: 'Giếng tròn',
                x: 73, y: 61,
                image: './static/images/places/ho-tron.webp',
                text: 'Nội dung mẫu: giới thiệu về giếng tròn. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'thuy-dinh',
                name: 'Thủy đình',
                x: 83, y: 58,
                image: './static/images/places/thuy-dinh.webp',
                text: 'Nội dung mẫu: giới thiệu về thủy đình. Thay đoạn này bằng nội dung thật.'
            },
            {
                id: 'day-nha',
                name: 'Dãy nhà cổ',
                x: 67, y: 52,
                image: './static/images/places/day-nha.webp',
                text: 'Nội dung mẫu: giới thiệu về dãy nhà cổ. Thay đoạn này bằng nội dung thật.'
            }
        ]
    }
];
