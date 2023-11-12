# mirror

1. Key hightlight của model: Xoáy vào các ưu điểm của hệ thống: Sustainability, Efficiency, Adaptability and Trust worthiness

2. Giải thích cách vận hành model
Các step của model: 
   1. Câu hỏi đưa vào sẽ đi qua các tầng trích xuất thông tin bằng MirrorAI (nhẹ hơn chatGPT),
   2. Các thông tin được trích xuất sẽ dùng search trong Database được cập nhật liên tục từ các nguồn tin cậy define bởi người dùng
   3. Kết quả DB trả về sẽ đi qua một language model thứ 2 chuyên sinh câu trả lời

3. Note down cơ chế tìm reliable resources

Reliable resources là từ các nguồn:
   1. Nguồn nội bộ của công ty 
   2. Nguồn từ các trang được đánh giá là tin cậy trong ngành
   3. Nguồn từ chuyên gia
   4. Nguồn từ human feedback

4. Note down efficiency
Efficiency sẽ đạt được nhờ:
- MirrorAI là language model chuyên để xác định các text liên quan tới ngành thép => không lớn như chatGPT hay Bard
- Language model thứ 2 cũng chỉ dedicated for generating data và không cần lớn như chatGPT, Bard

5. Plan to scale up (road map)
Scale
