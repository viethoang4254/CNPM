const products = [
    {
        id: 1,
        name: 'Nike Air Force 1',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png',
        price: '3,100,000đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 2,
        name: 'Nike Revolution 7 EasyOn',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b14aba9a-f828-45d3-9607-b687b884aa7d/NIKE+REVOLUTION+7+EASYON.png',
        price: '1,810,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 3,
        name: 'Nike Dunk P-6000',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da1c5a0e-0d65-4b72-8e99-b65e1062b7d7/NIKE+P-6000.png',
        price: '2,929,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 4,
        name: 'Nike Court Vision low',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png',
        price: '2,069,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 5,
        name: 'Air Jordan 1 Low',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc702cb7-ae0c-4c5a-b132-21c8f4ec93f8/AIR+JORDAN+1+LOW.png',
        price: '3,519,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 6,
        name: 'Nike Dunk Low Retro',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a077d00-5d6b-47c9-a25c-72d9b20b8584/NIKE+DUNK+LOW+RETRO.png',
        price: '2,332,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 7,
        name: 'Nike Kill Shot Leather',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0f6d2a-62c3-47c0-8272-57bde95ca6c8/KILLSHOT+2+LEATHER.png',
        price: '3,000,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 8,
        name: 'Nike Zm Superfly 10 Elite',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f71f58eb-ad7b-4495-acd0-163411f79298/ZM+SUPERFLY+10+ELITE+FG.png',
        price: '2,600,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 9,
        name: 'Nike Calm Slide',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3bbbc21-03a4-46c6-adc1-3066a1ea7e96/NIKE+CALM+SLIDE.png',
        price: '1,490,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 10,
        name: 'Nike Vista SanDal',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa52cda4-2179-4f0d-a17b-83d3e8fe81b0/NIKE+VISTA+SANDAL.png',
        price: '490,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 11,
        name: 'Nike Zoom Vapor 16',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f196101-347d-4bf5-a86a-a816577eda22/ZOOM+VAPOR+16+ACADEMY+FG%2FMG.png',
        price: '6,100,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 12,
        name: 'Nike PhanTom Luna II',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/641c2ad1-800d-469a-9b5b-55b69ec6be60/PHANTOM+LUNA+II+ELITE+FG.png',
        price: '8,200,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 13,
        name: 'Ổi xanh',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f71f58eb-ad7b-4495-acd0-163411f79298/ZM+SUPERFLY+10+ELITE+FG.png',
        price: '5,467,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 14,
        name: 'Nike Vaporfly 3 Eliud Kipchoge',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eb6cdeee-ef8c-4a7e-bd77-5dbc5843f6d4/ZOOMX+VAPORFLY+NEXT%25+3+FK+EK.png',
        price: '7,629,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 15,
        name: 'Nike Alphafly 3 Eliud Kipchoge',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9df887f6-b642-4788-9db0-8502f0be219f/AIR+ZOOM+ALPHAFLY+NEXT%25+3+EK.png',
        price: '8,369,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
    {
        id: 16,
        name: 'Nike G.T. Hustle 3 Paige ',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9d49088-c3d3-4a8a-8ffe-881810c54a33/G.T.+HUSTLE+3++PB+EP.png',
        price: '5,589,000 đ',
        description:
            'Sự rạng rỡ vẫn tồn tại trong Nike Air Force 1`07. phiên bản bóng rổ nguyên bản mang đến sự thay đổi mới mẻ về những gì bạn biết rõ nhất: lớp phủ được khâu bền. lớp hoàn thiện gọn gàng và lượng đèn flash hoàn hảo giúp bạn tỏa sáng.',
    },
];

export default products;
