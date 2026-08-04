/* TopLead Website - JavaScript */

var currentLang = "vi";

var translations = {
  vi: {
    "nav.home": "Trang chủ",
    "ph.scroll": "Cuộn xuống",
    "ui.toTop": "Lên đầu trang",
    "nav.about": "Về chúng tôi",
    "nav.services": "Dịch vụ",
    "nav.approach": "Quy trình làm việc",
    "nav.jobs": "Việc làm",
    "nav.tools": "Blog",
    "nav.contact": "Liên hệ",
    "nav.ourStory": "Câu chuyện",
    "nav.ourTeam": "Đội ngũ",
    "nav.whyChoose": "Tại sao chọn TopLead",
    "nav.clients": "Khách hàng & Đối tác",
    "nav.milestones": "Cột mốc",
    "nav.compare": "So sánh",
    "nav.guardian": "Guardian Screen",
    "nav.trustcare": "Trustcare Framework",
    "nav.guarantee": "Guarantee Framework",
    "nav.journey": "Hành trình",
    "nav.exclusive": "Độc quyền",
    "hero.badge": "TopLead Recruitment",
    "hero.slide1.line1": "Người cũ vừa nghỉ.",
    "hero.slide1.line2": "Người mới vẫn chưa thấy đâu?",
    "hero.slide1.desc": "TopLead gửi hồ sơ trong 48 giờ — đã lọc sẵn theo đúng ngành bạn cần.",
    "hero.slide1.cta": "Tuyển ngay →",
    "hero.slide2.line1": "Ba hồ sơ đã lọc kỹ.",
    "hero.slide2.line2": "Bạn chỉ cần chọn một.",
    "hero.slide2.desc": "Không cần đọc hàng chục CV. Chúng tôi lọc, bạn chọn — có người làm việc ngay trong tuần.",
    "hero.slide2.cta": "Gửi yêu cầu →",
    "hero.slide3.line1": "Đang thiếu người làm?",
    "hero.slide3.line2": "Đừng để ngày mai vẫn vậy.",
    "hero.slide3.desc": "Mỗi ngày thiếu nhân sự là một ngày doanh thu bị ảnh hưởng. Liên hệ hôm nay, có hồ sơ ngay ngày mai.",
    "hero.slide3.cta": "Liên hệ ngay →",
    "hero.slide4.line1": "Không hợp thì đổi.",
    "hero.slide4.line2": "Không hỏi nhiều, không tốn thêm.",
    "hero.slide4.desc": "Người TopLead giới thiệu đều được bảo hành thay thế trong 3 tháng.",
    "hero.slide4.cta": "Xem cam kết →",
    "founders.tag": "Đội ngũ sáng lập",
    "founders.title": "Những người sáng lập",
    "founders.f1.name": "Tạ Vinh An",
    "founders.f1.role": "CEO & Nhà sáng lập",
    "founders.f1.quote": "“Tôi tin rằng: mỗi người nên xứng đáng thuộc về đúng nơi họ cần.”",
    "founders.f1.exp1": "7+ năm kinh nghiệm HR & tuyển dụng cấp cao (IT, CS, FMCG, F&B, Khách sạn, HR)",
    "founders.f1.exp2": "Chứng chỉ SHRM-CP (2026)",
    "founders.f2.name": "Nguyễn Trần Nhật Hưng",
    "founders.f2.role": "CFO & Đồng sáng lập",
    "founders.f2.quote": "“Tuyển dụng cho SME là bài toán không có công thức chung — nhưng luôn có câu trả lời đúng nếu chịu nghe kỹ.”",
    "founders.f2.exp1": "5+ năm kinh nghiệm tuyển dụng cho SME (Tài chính, Kế toán, Xây dựng, Cơ điện)",
    "founders.f3.name": "Vũ Quang Bình",
    "founders.f3.role": "CCO & Đồng sáng lập",
    "founders.f3.quote": "“Không ai giỏi một mình — nhân sự tốt cần đúng môi trường để trở thành phiên bản tốt nhất của họ.”",
    "founders.f3.exp1": "Hơn 4 năm tuyển dụng chuyên nghiệp mảng bán hàng B2C/B2B & phát triển kinh doanh (Bảo hiểm, Bất động sản, Xây dựng)",
    "logos.label": "Đối tác tin cậy của các công ty hàng đầu",
    "value.title": "Những nhân sự giỏi luôn đến từ người bạn tin tưởng",
    "value.card1.title": "Mạng lưới chuyên gia",
    "value.card1.desc": "Kết nối với hơn 10,000 ứng viên chất lượng cao từ nhiều ngành nghề khác nhau.",
    "value.card2.title": "Tìm kiếm chủ động",
    "value.card2.desc": "Không chờ ứng viên ứng tuyển, chúng tôi chủ động tìm kiếm và tiếp cận nhân tài phù hợp.",
    "services.tag": "Dịch vụ",
    "services.title": "Giải pháp tuyển dụng toàn diện",
    "services.subtitle": "Phục vụ mọi nhu cầu nhân sự của doanh nghiệp",
    "services.s1.title": "Tìm kiếm nhân sự cấp cao",
    "services.s1.desc": "Tuyển dụng CEO, CFO, Giám đốc và các vị trí quản lý cao cấp với quy trình kín đáo và hiệu quả.",
    "services.s2.title": "Xây dựng đội ngũ",
    "services.s2.desc": "Giúp công ty khởi nghiệp và doanh nghiệp đang phát triển xây dựng đội ngũ từ giai đoạn nền móng.",
    "services.s3.title": "Tuyển dụng công nghệ",
    "services.s3.desc": "Chuyên tuyển Developer, Data Scientist, Product Manager cho các công ty công nghệ.",
    "pain.tag": "Thách thức",
    "pain.title": "Bạn đang gặp vấn đề nào?",
    "pain.word1": "tuyển sai người",
    "pain.word2": "mất thời gian",
    "pain.word3": "tốn chi phí",
    "pain.word4": "thiếu nhân sự",
    "pain.p1.title": "Cần nhân sự gấp nhưng tuyển hoài không được",
    "pain.p1.desc": "Chúng tôi giúp bạn tiếp cận ứng viên phù hợp trong thời gian ngắn nhất.",
    "pain.p2.title": "Người sáng lập giỏi kỹ thuật nhưng không biết tuyển người",
    "pain.p2.desc": "Đội ngũ của chúng tôi hỗ trợ bạn xây dựng đội ngũ chuyên nghiệp.",
    "pain.p3.title": "Nhân sự cũ nghỉ, công việc bị đình trệ",
    "pain.p3.desc": "Quy trình handover nhanh chóng, giảm thiểu gián đoạn công việc.",
    "stats.title": "Bạn đang có đối tác tốt",
    "stats.s1.role": "Nhân sự cấp cao",
    "stats.s1.company": "cho TechCorp trong 12 tháng",
    "stats.s2.role": "Vị trí tuyển",
    "stats.s2.company": "cho VietRetail từ đầu năm",
    "stats.s3.role": "Nhân sự",
    "stats.s3.company": "cho BuildPro tại 14 chi nhánh",
    "stats.s4.role": "Vị trí Tech",
    "stats.s4.company": "cho LogiGroup trong 6 tháng",
    "jobs.tag": "Việc làm",
    "jobs.title": "Vị trí đang tuyển dụng",
    "jobs.subtitle": "Cơ hội nghề nghiệp hấp dẫn từ các doanh nghiệp hàng đầu",
    "cta.title": "Sẵn sàng xây dựng đội ngũ xuất sắc?",
    "cta.subtitle": "Hãy để TopLead giúp bạn tìm ra nhân tài phù hợp",
    "cta.start": "Bắt đầu ngay",
    "testimonials.tag": "Đánh giá",
    "testimonials.title": "Khách hàng nói gì về chúng tôi",
    "tst.google": "Đánh giá 5★ trên Google",
    "tst.clientbadge": "Phản hồi từ khách hàng",
    "tst.candidatebadge": "Phản hồi từ ứng viên",
    "svc.o.tag": "Dịch vụ",
    "svc.o.title": "3 dịch vụ tuyển dụng",
    "svc.o.sub": "Ba cấp độ, phân theo vị trí bạn cần tuyển. Chọn đúng cấp, chúng tôi lo phần còn lại.",
    "svc.incl": "Bao gồm",
    "svc.price": "Liên hệ báo giá",
    "svc.add": "Thêm vào yêu cầu tư vấn",
    "svc.p1.tier": "Thực tập & mới đi làm",
    "svc.p1.name": "Tuyển dụng số lượng lớn",
    "svc.p1.tagline": "Tuyển số lượng lớn cho vị trí đầu vào",
    "svc.p1.desc": "Chủ động tiếp cận và tuyển nhanh ứng viên cho các vị trí thực tập, đầu vào và tuyển số lượng lớn. Phù hợp khi doanh nghiệp cần lấp nhiều vị trí trong thời gian ngắn.",
    "svc.p1.f1": "Tuyển số lượng lớn",
    "svc.p1.f2": "Vị trí thực tập, mới ra trường, đầu vào",
    "svc.p1.f3": "Thời gian tuyển nhanh",
    "svc.p2.tier": "Cấp trung & cấp cao",
    "svc.p2.name": "Tuyển chọn nhân sự chuyên môn",
    "svc.p2.tagline": "Tuyển chọn nhân sự chuyên môn và quản lý",
    "svc.p2.desc": "Tìm kiếm và sàng lọc kỹ lưỡng ứng viên cho các vị trí chuyên môn cấp trung đến cấp cao. Áp dụng Guardian Screen 5 lớp để đảm bảo chất lượng và độ phù hợp.",
    "svc.p2.f1": "Vị trí cấp trung đến cấp cao (chuyên viên, trưởng nhóm, quản lý)",
    "svc.p2.f2": "Guardian Screen - sàng lọc 5 lớp",
    "svc.p2.f3": "Danh sách rút gọn 3-5 ứng viên trong 48 giờ",
    "svc.p3.tier": "Cấp điều hành",
    "svc.p3.name": "Tìm kiếm lãnh đạo cấp cao",
    "svc.p3.tagline": "Tìm kiếm lãnh đạo cấp cao",
    "svc.p3.desc": "Tìm kiếm nhân sự cấp cao (CEO, CFO, CTO, COO, VP, Giám đốc) với quy trình kín đáo, bảo mật và chuyên nghiệp. Tiếp cận trực tiếp những ứng viên hàng đầu trên thị trường.",
    "svc.p3.f1": "CEO, CFO, CTO, COO",
    "svc.p3.f2": "VP, Giám đốc, Trưởng các phòng ban",
    "svc.p3.f3": "Quy trình bảo mật tuyệt đối",
    "svc.hrc.label": "Dịch vụ bổ trợ",
    "svc.hrc.name": "Tư vấn nhân sự",
    "svc.hrc.desc": "Tư vấn chiến lược nhân sự và xây dựng quy trình tuyển dụng nội bộ: chuẩn hoá JD, khung lương theo thị trường, và lộ trình hội nhập. Dành cho doanh nghiệp muốn tự chủ khâu tuyển dụng về lâu dài.",
    "svc.hrc.cta": "Trao đổi với chúng tôi",
    "svc.ind.sub": "Kinh nghiệm tuyển dụng trải rộng trên tám nhóm ngành, mỗi nhóm có mạng lưới ứng viên riêng.",
    "svc.ind.kicker": "Chuyên môn theo ngành",
    "svc.ind.heroline": "Một mạng lưới ứng viên riêng cho từng lĩnh vực",
    "svc.why.sub": "Bốn cam kết chúng tôi đặt ra cho chính mình, không phải khẩu hiệu.",
    "jobs.detail": "Xem chi tiết",
    "jobs.partner": "Đối tác TopLead",
    "jobs.showing": "Hiển thị",
    "jobs.positions": "vị trí tuyển dụng",
    "jobs.empty": "Hiện chưa có vị trí phù hợp với bộ lọc của bạn.",
    "jobs.empty.cta": "Gửi CV để chúng tôi liên hệ khi có vị trí mới",
    "jobs.error": "Không tải được danh sách vị trí. Nếu bạn đang mở tệp trực tiếp từ ổ đĩa, hãy chạy trang qua máy chủ cục bộ rồi thử lại.",
    "jobs.admin.flag": "Chế độ quản trị",
    "jobs.admin.export": "Tải jobs.json đã cập nhật",
    "jobs.admin.reset": "Hoàn tác",
    "jobs.admin.remove": "Xoá vị trí này",
    "jd.crumb": "Chi tiết vị trí",
    "jd.hero": "Chi tiết vị trí",
    "jd.location": "Địa điểm",
    "jd.level": "Cấp bậc",
    "jd.type": "Hình thức",
    "jd.salary": "Mức lương",
    "jd.about": "Mô tả công việc",
    "jd.resp": "Trách nhiệm",
    "jd.req": "Yêu cầu",
    "jd.ben": "Quyền lợi",
    "jd.back": "Quay lại danh sách",
    "jd.missing.title": "Không tìm thấy vị trí này",
    "jd.missing.desc": "Vị trí bạn tìm có thể đã đóng hoặc đường dẫn không đúng.",
    "jd.missing.cta": "Xem tất cả vị trí đang tuyển",
    "sc.tag": "TopLead 360°",
    "sc.title": "Toàn cảnh cách TopLead đồng hành cùng bạn",
    "sc.sub": "Từ vấn đề đến giải pháp, đến đúng đối tượng và những đối tác đã tin tưởng.",
    "sc.t0": "Thách thức",
    "sc.t1": "Giải pháp",
    "sc.t2": "Đối tượng",
    "sc.t3": "Đối tác",
    "sc.c0.h": "Bạn đang gặp vấn đề nào?",
    "sc.c0.a": "Cần người gấp nhưng tuyển mãi không ra.",
    "sc.c0.b": "Giỏi chuyên môn nhưng không rành tuyển dụng.",
    "sc.c0.c": "Người cũ nghỉ, công việc bị đình trệ.",
    "sc.c0.cta": "Xem giải pháp",
    "sc.c1.h": "Giải pháp tuyển dụng toàn diện",
    "sc.c1.a": "nhân sự cấp cao, kín đáo và hiệu quả.",
    "sc.c1.b": "xây đội ngũ từ giai đoạn đầu.",
    "sc.c1.c": "Developer, Data, Product cho công ty công nghệ.",
    "sc.c1.cta": "Tìm hiểu dịch vụ",
    "sc.c2.h": "Chuyên sâu cho doanh nghiệp SME",
    "sc.c2.p": "Nơi mỗi lần tuyển đúng người tạo ra khác biệt lớn nhất - TopLead đồng hành cùng SME Việt Nam.",
    "sc.c3.h": "Đối tác nói gì về TopLead",
    "testimonials.t1.text": "“Đội ngũ hỗ trợ tuyển rất nhanh - chỉ sau 5 ngày đã có 3 ứng viên phù hợp để phỏng vấn. Tiết kiệm rất nhiều thời gian cho đội ngũ HR nội bộ.”",
    "testimonials.t2.text": "“TopLead hiểu rõ nhu cầu doanh nghiệp — không gửi hồ sơ đại trà mà chọn lọc rất kỹ. Rất đáng để giới thiệu!”",
    "testimonials.t3.text": "“Dịch vụ tốt, rất đáng giới thiệu vì cam kết thực tế của họ.”",
    "contact.tag": "Liên hệ",
    "contact.title": "Bắt đầu hợp tác",
    "contact.subtitle": "Để lại thông tin, chúng tôi sẽ liên hệ lại trong 24 giờ.",
    "contact.phone": "Điện thoại",
    "contact.address": "Địa chỉ",
    "contact.addressValue": "791/92F Trần Xuân Soạn, phường Tân Hưng, TP. HCM",
    "footer.tagline": "Kết nối đúng người với đúng doanh nghiệp - đối tác tuyển dụng có trách nhiệm.",
    "footer.follow": "Theo dõi chúng tôi",
    "footer.services": "Dịch vụ",
    "footer.s1": "Tìm kiếm nhân sự cấp cao",
    "footer.s2": "Xây dựng đội ngũ",
    "footer.s3": "Tuyển dụng công nghệ",
    "footer.s4": "Đánh giá năng lực",
    "footer.company": "Công ty",
    "footer.about": "Về chúng tôi",
    "footer.approach": "Quy trình làm việc",
    "footer.jobs": "Việc làm",
    "footer.tools": "Blog",
    "footer.contact": "Liên hệ",
    "footer.emailsTitle": "Email liên hệ",
    "footer.officeTitle": "Văn phòng TopLead",
    "footer.addressLabel": "Địa chỉ",
    "footer.address": "791/92F Trần Xuân Soạn, phường Tân Hưng, TP. HCM",
    "footer.phoneLabel": "Điện thoại",
    "footer.emailLabel": "Email",
    "footer.directions": "Xem chỉ đường",
    "footer.rights": "Tất cả quyền được bảo lưu.",
    "form.name": "Họ và tên",
    "form.email": "Email",
    "form.phone": "Số điện thoại",
    "form.optional": "(Tùy chọn)",
    "form.cv": "Đính kèm CV",
    "form.drag": "Kéo thả file hoặc",
    "form.choose": "chọn file",
    "form.maxSize": "tối đa 5MB",
    "form.company": "Tên công ty",
    "form.position": "Vị trí cần tuyển",
    "form.quantity": "Số lượng",
    "form.message": "Nội dung",
    "form.optional2": "(Tùy chọn)",
    "form.submit": "Gửi thông tin",
    "form.success": "Cảm ơn bạn!",
    "form.successMsg": "Đội ngũ TopLead sẽ liên hệ với bạn trong 24 giờ làm việc.",
    "form.namePlaceholder": "Nhập họ và tên của bạn",
    "form.emailPlaceholder": "email@example.com",
    "form.phonePlaceholder": "+84 xxx xxx xxx",
    "form.linkedinPlaceholder": "https://linkedin.com/in/your-profile",
    "form.companyPlaceholder": "Tên công ty của bạn",
    "form.positionPlaceholder": "VD: Software Engineer",
    "form.quantityPlaceholder": "VD: 2",
    "form.messagePlaceholder": "Chia sẻ nhu cầu của bạn...",
    "page.hero.title": "Liên hệ",
    "page.hero.subtitle": "Kết nối với TopLead để tìm kiếm cơ hội hoặc tư vấn dịch vụ",
    "contact.tab.employer": "Nhà tuyển dụng",
    "contact.tab.candidate": "Ứng viên",
    "contact.form.name": "Họ và tên *",
    "contact.form.email": "Email công ty *",
    "contact.form.phone": "Số điện thoại *",
    "contact.form.company": "Tên công ty *",
    "contact.form.companyPlaceholder": "Tên công ty",
    "contact.form.service": "Dịch vụ quan tâm",
    "contact.form.serviceSelect": "Chọn dịch vụ...",
    "contact.form.quantity": "Số lượng tuyển dụng",
    "contact.form.quantitySelect": "Chọn số lượng...",
    "contact.form.demand": "Nhu cầu tuyển dụng",
    "contact.form.demandPlaceholder": "Mô tả ngắn về nhu cầu tuyển dụng...",
    "contact.form.position": "Vị trí quan tâm",
    "contact.form.positionPlaceholder": "Vị trí mong muốn",
    "contact.form.experience": "Kinh nghiệm",
    "contact.form.experienceSelect": "Chọn mức kinh nghiệm...",
    "contact.form.linkedin": "Liên kết LinkedIn / Portfolio",
    "contact.form.linkedinPlaceholder": "https://linkedin.com/in/...",
    "contact.form.note": "Ghi chú thêm",
    "contact.form.notePlaceholder": "Giới thiệu ngắn về bản thân...",
    "contact.form.uploadCV": "Tải lên CV",
    "contact.form.uploadCVLabel": "Tải lên CV (PDF, DOC)",
    "contact.form.submit": "Gửi yêu cầu",
    "contact.form.submitCandidate": "Gửi hồ sơ",
    "contact.info.address": "Địa chỉ",
    "contact.info.addressValue": "Tầng 8, Tòa nhà ABC<br>123 Nguyễn Trãi, Quận 1<br>TP. Hồ Chí Minh, Việt Nam",
    "contact.info.phone": "Điện thoại",
    "contact.info.email": "Email",
    "contact.info.hours": "Giờ làm việc",
    "contact.info.hoursValue": "Thứ 2 - Thứ 6: 8:30 - 18:00<br>Thứ 7: 8:30 - 12:00",
    "contact.social.title": "Kết nối với TopLead",
    "contact.social.subtitle": "Theo dõi chúng tôi để cập nhật tin tức và cơ hội việc làm mới nhất",
    "contact.faq.title": "Câu hỏi thường gặp",
    "contact.faq.q1": "TopLead có phí cho ứng viên không?",
    "contact.faq.a1": "Không. TopLead cung cấp dịch vụ hoàn toàn miễn phí cho ứng viên.",
    "contact.faq.q2": "Thời gian tuyển dụng mất bao lâu?",
    "contact.faq.a2": "Với quy trình TopLead, trung bình chỉ 14 ngày để tuyển xong một vị trí.",
    "contact.faq.q3": "Có bảo hành không?",
    "contact.faq.a3": "TopLead cam kết 3 tháng bảo hành thay thế miễn phí.",
    "contact.faq.q4": "Làm sao để theo dõi tiến trình?",
    "contact.faq.a4": "Bạn sẽ được cập nhật thường xuyên qua email và điện thoại.",
    "jobs.hero.title": "Việc làm",
    "jobs.hero.subtitle": "Cơ hội nghề nghiệp hấp dẫn từ các doanh nghiệp hàng đầu",
    "jobs.filter.search": "Tìm kiếm",
    "jobs.filter.searchPlaceholder": "Tên vị trí, từ khóa...",
    "jobs.filter.industry": "Ngành nghề",
    "jobs.filter.location": "Địa điểm",
    "jobs.filter.level": "Cấp bậc",
    "jobs.filter.all": "Tất cả",
    "jobs.count": "Hiển thị 12 vị trí tuyển dụng",
    "jobs.apply": "Ứng tuyển ngay",
    "jobs.cta.title": "Không tìm thấy vị trí phù hợp?",
    "jobs.cta.subtitle": "Để lại CV, chúng tôi sẽ liên hệ khi có cơ hội phù hợp",
    "jobs.cta.button": "Gửi CV ngay",
    "tools.hero.title": "Blog",
    "tools.hero.subtitle": "Góc nhìn và kinh nghiệm tuyển dụng từ đội ngũ TopLead",
    "tools.blog.tag": "Blog",
    "tools.blog.title": "Bài viết mới nhất",
    "tools.blog.subtitle": "Cập nhật xu hướng và kinh nghiệm tuyển dụng",
    "blog.all": "Tất cả",
    "blog.searchPh": "Tìm bài viết theo tiêu đề...",
    "blog.empty": "Không tìm thấy bài viết phù hợp.",
    "tools.resources.tag": "Tài nguyên",
    "tools.resources.title": "Công cụ & Tài nguyên",
    "tools.resources.subtitle": "Tải miễn phí các tài liệu hữu ích",
    "tools.resources.download": "Tải xuống ↓",
    "tools.newsletter.title": "Đăng ký nhận bản tin",
    "tools.newsletter.subtitle": "Nhận cập nhật xu hướng tuyển dụng và các bài viết mới từ TopLead.",
    "tools.newsletter.placeholder": "Nhập email của bạn",
    "tools.newsletter.button": "Đăng ký",
    "tools.cta.title": "Cần tư vấn về nhân sự?",
    "tools.cta.subtitle": "Liên hệ đội ngũ TopLead để được hỗ trợ",
    "tools.cta.button": "Liên hệ ngay",
    "services.option": "Chọn dịch vụ...",
    "services.optionExec": "Tìm kiếm lãnh đạo cấp cao",
    "services.optionETS": "Tuyển chọn nhân sự chuyên môn",
    "services.optionStaff": "Cung ứng nhân sự",
    "services.optionRPO": "RPO",
    "services.optionHead": "Tuyển dụng số lượng lớn",
    "services.optionConsult": "Tư vấn nhân sự",
    "services.optionOther": "Khác",
    "experience.none": "Chưa có kinh nghiệm",
    "experience.1to2": "1-2 năm",
    "experience.3to5": "3-5 năm",
    "experience.5to10": "5-10 năm",
    "experience.10plus": "10+ năm",
    "about.hero.title": "Về chúng tôi",
    "about.hero.subtitle": "Đối tác tuyển dụng có trách nhiệm cho doanh nghiệp Việt Nam",
    "approach.hero.title": "Cách tiếp cận",
    "approach.hero.subtitle": "Phương pháp tuyển dụng độc đáo của TopLead",
    "approach.compare.tag": "So sánh",
    "approach.compare.title": "Traditional Recruitment vs TopLead",
    "approach.compare.subtitle": "Sự khác biệt rõ rệt trong cách tiếp cận tuyển dụng",
    "approach.exclusive.tag": "Độc quyền",
    "approach.exclusive.title": "3 Đặc trưng của TopLead",
    "approach.exclusive.subtitle": "Những quy trình và cam kết riêng có của TopLead",
    "approach.guardian.title": "Guardian Screen",
    "approach.guardian.desc": "Quy trình sàng lọc 5 bước đảm bảo chất lượng ứng viên",
    "approach.trustcare.title": "Trustcare",
    "approach.trustcare.desc": "Cam kết chất lượng dựa trên 3 trụ cột minh bạch",
    "approach.guarantee.title": "Guarantee",
    "approach.guarantee.desc": "3 tháng bảo hành thay thế miễn phí",
    "approach.howitworks.tag": "Process",
    "approach.howitworks.title": "How It Works",
    "approach.howitworks.subtitle": "Quy trình 6 bước để tìm đúng người cho đúng vị trí",
    "approach.workflow.tag": "Workflow",
    "approach.workflow.title": "Quy trình làm việc",
    "approach.workflow.subtitle": "Công khai - Minh bạch - Hiệu quả",
    "approach.research.tag": "Research",
    "approach.research.title": "Số liệu nói lên sự khác biệt",
    "approach.cta.title": "Sẵn sàng xây dựng đội ngũ xuất sắc?",
    "approach.cta.subtitle": "Hãy để TopLead giúp bạn tìm ra nhân tài phù hợp",
    "approach.cta.button": "Bắt đầu ngay",
    "approach.testimonials.tag": "Đánh giá",
    "approach.testimonials.title": "Khách hàng và ứng viên nói gì về TopLead",
    "services.hero.title": "Dịch vụ",
    "services.hero.subtitle": "Giải pháp tuyển dụng toàn diện cho doanh nghiệp",
    "post.readUnit": "phút đọc",
    "post.cta.title": "Cần một đối tác tuyển dụng có trách nhiệm?",
    "post.cta.sub": "TopLead chỉ thu phí khi ứng viên vượt qua thử việc. Hãy bắt đầu cuộc trò chuyện.",
    "post.cta.contact": "Liên hệ TopLead",
    "post.cta.all": "← Tất cả bài viết",
    "b1.cat": "Nghề HR",
    "b1.title": "Nghề HR: tại sao không?",
    "b1.teaser": "Nghề nghiệp tình cờ trở nên có chủ đích ngay khi bạn xem con người là đòn bẩy, không phải chi phí.",
    "b2.cat": "Bền vững",
    "b2.title": "Không chỉ là một dự án — đó là một tư duy",
    "b2.teaser": "Vì sao TopLead không thu phí cho đến khi ứng viên vượt qua thử việc - và cái giá thật sự của sự bền vững.",
    "b3.cat": "Mô hình tuyển dụng",
    "b3.title": "Giai đoạn thử việc mới là cuộc phỏng vấn thật sự",
    "b3.teaser": "Ai cũng có thể tỏa sáng trong 30 phút. Buổi phỏng vấn thật sự bắt đầu từ ngày thứ 60.",
    "b4.cat": "Cơ chế",
    "b4.title": "Tuyển dụng không có vấn đề nhân tài. Vấn đề là cơ chế.",
    "b4.teaser": "Mọi hệ thống đều tạo ra hành vi mà nó tưởng thưởng. Vấn đề thật sự của tuyển dụng không phải là nhân tài.",
    "b5.cat": "Ứng viên",
    "b5.title": "Do dự tốn kém hơn bạn nghĩ",
    "b5.teaser": "Người được nhận không phải là người giỏi nhất trên giấy - mà là người hành động trước.",
    "b6.cat": "Doanh nghiệp SME",
    "b6.title": "Vì sao SME liên tục mất người giỏi vào tay tập đoàn",
    "b6.teaser": "SME không thể trả lương cao hơn tập đoàn. Họ thua ở quy trình - và điều đó có thể khắc phục.",
    "b7.cat": "Giữ chân nhân sự",
    "b7.title": "Nghỉ việc thầm lặng — bài toán của thế kỷ",
    "b7.teaser": "Kiểu nghỉ việc tốn kém nhất là kiểu không bao giờ nộp đơn xin nghỉ.",
    "b8.cat": "Chi phí tuyển dụng",
    "b8.title": "Một lần tuyển sai có thể ngốn hơn 100 triệu đồng",
    "b8.teaser": "Trên giấy tờ chỉ là vài tháng lương. Trên thực tế, chi phí ẩn mới là phần khiến doanh nghiệp SME chảy máu dòng tiền.",
    "sig.b8": "<div class=\"post-stat\"><b>50–100tr ₫</b><span>thiệt hại từ một quyết định tuyển dụng sai (InCorp Vietnam 2025)</span></div><div class=\"post-stat\"><b>15–35tr ₫</b><span>chi phí ẩn cho đăng tin, hòa nhập và đào tạo — chưa tính lương</span></div>",
    "body.b8": "      <p class=\"post-lead\">Một lần tuyển sai có thể khiến doanh nghiệp mất hơn 100 triệu đồng — và đó vẫn chưa phải phần đáng sợ nhất.</p>\n      <p>Hãy hình dung tình huống này: một doanh nghiệp SME tuyển một Sales Executive với mức lương 15 triệu đồng/tháng. Bốn tháng sau, người đó nghỉ việc.</p>\n      <p>Trên giấy tờ: 60 triệu đồng tiền lương. Nhưng trên thực tế, con số còn lớn hơn nhiều:</p>\n      <ul>\n        <li>5–15 triệu đồng cho đăng tin và phí tuyển dụng</li>\n        <li>10–20 triệu đồng cho hòa nhập và đào tạo</li>\n        <li>Nhiều tuần năng suất hao hụt trong thời gian thử việc</li>\n        <li>Và một vòng tuyển dụng mới — cùng một vị trí, cùng một áp lực, chỉ thêm phần mệt mỏi</li>\n      </ul>\n      <h2>Con số thật sự</h2>\n      <p>Theo InCorp Vietnam (2025), một quyết định tuyển dụng sai có thể tiêu tốn từ 50 đến 100 triệu đồng — đủ để tài trợ một đợt marketing quan trọng, mở một văn phòng vệ tinh, hoặc tuyển thêm hai thực tập sinh.</p>\n      <h2>Với SME, đây không chỉ là chi phí</h2>\n      <p>Với các tập đoàn lớn, đó là một khoản chi phí vận hành có thể hấp thụ. Với doanh nghiệp SME, đó là tổn thất trực tiếp đến dòng tiền và cả bộ máy vận hành.</p>\n      <p>Làm đúng ngay từ lần đầu luôn rẻ hơn làm lại lần thứ hai.</p>\n      <p><strong>Stop Rehiring. Start Growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>InCorp Vietnam (2025) — chi phí của một quyết định tuyển dụng sai ước tính 50–100 triệu đồng đối với doanh nghiệp tại Việt Nam.</p></div>",
    "b9.cat": "Thị trường",
    "b9.title": "SECC: bốn ngành đang hội tụ và tấm bản đồ nhân sự phía sau",
    "b9.teaser": "Ba ngày, hơn 700 gian hàng, doanh nghiệp từ hơn 24 quốc gia. Nhưng tín hiệu thật sự không nằm ở quy mô — mà ở hướng dịch chuyển của thị trường.",
    "b9.caption": "SECC — Điện · Năng lượng · Nông nghiệp · Tự động hóa · Đóng gói",
    "sig.b9": "<div class=\"post-stat\"><b>700+</b><span>gian hàng trong ba ngày triển lãm</span></div><div class=\"post-stat\"><b>24+</b><span>quốc gia có doanh nghiệp tham dự</span></div><div class=\"post-stat\"><b>4</b><span>ngành đang hội tụ thành một chuỗi giá trị mới</span></div>",
    "body.b9": "      <p class=\"post-lead\">Tuần trước, TopLead có mặt tại SECC trong chuyến khảo sát thực địa bao trùm bốn triển lãm quốc tế diễn ra đồng thời: Vietnam ETE, Greenergy Expo, ELECS Vietnam và Vietnam PFA (15–17/07/2026).</p>\n      <p>Ba ngày. Hơn 700 gian hàng. Doanh nghiệp đến từ hơn 24 quốc gia. Nhưng tín hiệu thật sự không nằm ở quy mô — mà ở hướng đi mà thị trường đang dịch chuyển.</p>\n      <h2>Bốn ngành đang hội tụ thành một chuỗi giá trị mới cho Việt Nam</h2>\n      <ul>\n        <li>Công nghệ điện &amp; điện khí hóa công nghiệp</li>\n        <li>Năng lượng xanh &amp; giải pháp tiết kiệm năng lượng</li>\n        <li>Chế biến thực phẩm &amp; nông sản</li>\n        <li>Kỹ thuật &amp; tự động hóa sản xuất</li>\n      </ul>\n      <h2>Một tấm bản đồ nhu cầu nhân sự</h2>\n      <p>Với TopLead, đây không đơn thuần là một chuyến thăm ngành. Đó là tấm bản đồ cho thấy nhu cầu nhân sự cấp trung đang mở rộng nhanh nhất ở đâu: kỹ sư điện, chuyên viên vận hành năng lượng, quản lý chuỗi cung ứng nông sản, kỹ thuật viên tự động hóa.</p>\n      <p>Các doanh nghiệp SME trong những lĩnh vực này đều cần chung một thứ: đúng người, vào đúng thời điểm.</p>\n      <h2>Hiểu ngành trước khi tuyển cho ngành</h2>\n      <p>Đó là lý do TopLead có mặt ở đó — để hiểu ngành trước khi tuyển dụng cho ngành đó.</p>\n      <p><strong>Stop Rehiring. Start Growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Sự kiện</span><p>Vietnam ETE, Greenergy Expo, ELECS Vietnam &amp; Vietnam PFA — SECC, TP.HCM, 15–17/07/2026.</p></div>",
    "sig.b1": "Nghề nghiệp tình cờ trở nên có chủ đích ngay khi con người nhận ra: tầm ảnh hưởng vượt trên quyền lực.",
    "body.b1": "<p class=\"post-lead\">Không ai lớn lên mà mơ ước được làm nghề HR.</p>\n      <p>Trẻ con nói bác sĩ, phi công, cầu thủ. Không ai nói “người xây dựng đội ngũ”. Vậy mà nghiên cứu cho thấy phần lớn người làm HR chưa từng dự định đi con đường này - họ tình cờ bước vào, rồi không nỡ rời đi (SHRM 2025).</p>\n      <p>Vì sao? Điều gì phân biệt người chọn công việc này với người xem thường nó? Người bỏ đi chỉ thấy chi phí. Giấy tờ, quy định, những cuộc trò chuyện chẳng ai muốn nhận. Họ muốn một nấc thang rõ ràng và một chức danh dễ đoán. Cũng dễ hiểu thôi - nhưng họ nhầm lẫn giữa khó khăn và sự vô nghĩa.</p>\n      <p>Người ở lại thì thấy đòn bẩy. Họ biết rằng 40% người làm HR bước vào ngành vì muốn phát triển tổ chức, không phải vì nghĩa vụ, và chỉ 7% xem đó là công việc lấy lương (BambooHR 2026). Họ hiểu rằng một quyết định duy nhất - tuyển ai, phát triển ai, giữ ai - sẽ lan tỏa khắp cả một công ty. Văn hóa là tài sản duy nhất đối thủ không thể sao chép, và 97% lãnh đạo HR ngày nay xem đó là ưu tiên hàng đầu (Gartner 2025).</p>\n      <p>Đó mới là ranh giới thật sự. Không phải mềm hay cứng. Không phải an toàn hay rủi ro. Mà là bạn xem con người là chi phí phải quản lý, hay là động cơ của mọi thứ theo sau.</p>\n      <p>Vậy nên hãy lựa chọn một cách có chủ đích. Đội ngũ bạn xây dựng sẽ nhớ bạn đã chọn điều gì.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>BambooHR (2026) The Definitive Guide to HR Career Growth. &middot; Gartner (2025), trích trong Compono (2025) Full Research: Latest HR &amp; Talent Statistics (2025). &middot; SHRM (2025) Breaking into HR Without Official Experience.</p></div>",
    "sig.b2": "Sự bền vững chỉ thật sự có ý nghĩa khi việc giữ gìn nó khiến bạn phải trả giá.",
    "body.b2": "<p class=\"post-lead\">Tôi từng nghĩ sự bền vững là thứ có thể chứng minh được. Một dự án. Một tấm chứng nhận. Một cái bắt tay từ người có tầm ảnh hưởng. Rồi tôi nhận ra mình đã sai ngay từ đầu.</p>\n      <p>Bền vững không phải thứ bạn giành được trong một cuộc thi. Đó là điều bạn lựa chọn - một cách lặng lẽ, nhất quán - trong mỗi quyết định không có khán giả và không ai chấm điểm. Và chính nhận thức đó đã định hình cách tôi xây dựng công ty của mình. Không phí trả trước. Không thu phí cho đến khi ứng viên vượt qua thử việc. Chỉ thanh toán khi kết quả là thật - khi người được tuyển thật sự phù hợp, thật sự gắn bó, thật sự đóng góp. Phần lớn trong ngành né tránh mô hình này vì nó không thoải mái. Bạn phải gánh rủi ro. Bạn phải hấp thụ sự bất định. Nhưng chính sự khó chịu đó mới là mấu chốt - bởi bền vững chỉ có ý nghĩa khi việc giữ gìn nó khiến bạn phải trả giá.</p>\n      <p>Chiến thắng cuộc thi ấy không dạy tôi bền vững trông ra sao trên một tấm chứng nhận. Nó dạy tôi bền vững phải trông ra sao trong thực tế: mỗi lần tuyển, mỗi khách hàng, mỗi quyết định mà không ai chấm điểm ngoài chính bạn. Tiêu chuẩn không nằm trên tường. Nó nằm trong cách bạn vận hành khi không ai nhìn.</p>",
    "sig.b3": "<div class=\"post-stat\"><b>46%</b><span>nhân sự mới thất bại trong 18 tháng đầu</span></div><div class=\"post-stat\"><b>82%</b><span>quản lý tuyển dụng đã nhận ra dấu hiệu từ trước (TriNet 2026)</span></div>",
    "body.b3": "<p class=\"post-lead\">Ai cũng có thể tỏa sáng trong 30 phút bên bàn phỏng vấn. Câu hỏi là họ là ai vào ngày thứ 60.</p>\n      <p>Đây chính là khoảng trống đã tạo nên mô hình của TopLead ngay từ đầu. Không phí khi tuyển. Chỉ thanh toán sau khi ứng viên vượt qua thử việc - vì đó mới là lúc việc tuyển dụng thật sự được chứng minh. Chúng tôi gánh rủi ro cho đến khi kết quả là thật.</p>\n      <p>Phần lớn công ty tuyển dụng sẽ không đưa ra cam kết này. Không phải vì bất khả thi, mà vì nó đòi hỏi một điều không thoải mái: cùng đặt cược, rất lâu sau cái bắt tay. Trách nhiệm trong tuyển dụng không phải một chính sách. Đó là một lập trường. Nó có nghĩa là thành công của bạn gắn liền về mặt cấu trúc với thành công của khách hàng - chứ không tách rời ngay khi hợp đồng được ký.</p>\n      <p>Doanh nghiệp mất 20% nhân sự mới trong 45 ngày đầu (Reworked 2026). Con số đó sẽ không thay đổi cho đến khi những người chịu trách nhiệm tuyển họ vẫn còn chịu trách nhiệm sau khi tuyển.</p>\n      <p>Giai đoạn thử việc phơi bày mọi thứ mà buổi phỏng vấn không bao giờ làm được. Câu hỏi duy nhất là: đối tác tuyển dụng của bạn có còn dõi theo khi điều đó xảy ra hay không.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>TriNet (2026) &middot; Reworked (2026) - 20% nhân sự mới rời đi trong 45 ngày đầu.</p></div>",
    "sig.b4": "Đó không phải vấn đề tuyển dụng. Đó là vấn đề cơ chế.",
    "body.b4": "<p class=\"post-lead\">Tuyển dụng chưa bao giờ rẻ. Chi phí trung bình cho mỗi lần tuyển nay đã vượt 5.400 USD, và lấp đầy một vị trí không thuộc cấp điều hành mất trung bình 44 ngày (SHRM 2025).</p>\n      <p>Vậy mà trong nhiều mô hình tuyển dụng, một bên được thưởng ngay khoảnh khắc thư mời được ký. Bên còn lại phải nhiều tuần - hoặc nhiều tháng - sau mới biết quyết định tuyển dụng có thật sự hiệu quả hay không.</p>\n      <p>Suy cho cùng, mọi hệ thống đều tạo ra hành vi mà nó tưởng thưởng. Nếu thành công được đo bằng số lần tuyển, hãy chờ đợi nhiều lần tuyển hơn. Nếu thành công được đo bằng số lần tuyển thành công, thì mọi quyết định - từ tìm nguồn, sàng lọc đến theo dõi sau tuyển - sẽ trông hoàn toàn khác.</p>\n      <p>Những mô hình tuyển dụng tốt nhất không chỉ tìm ra ứng viên. Chúng khiến trách nhiệm kéo dài đúng bằng chính quyết định tuyển dụng.</p>",
    "sig.b5": "Chần chừ không phải là thận trọng. Trong thị trường hôm nay, đó là cách đánh mất cơ hội.",
    "body.b5": "<p class=\"post-lead\">Lý do phổ biến nhất khiến người tài bỏ lỡ cơ hội không phải là năng lực — mà là sự do dự.</p>\n      <ul>\n        <li>Chờ đợi “thời điểm hoàn hảo”.</li>\n        <li>Bản năng im lặng cho đến khi cảm thấy sẵn sàng 100%.</li>\n        <li>Quyết định lịch sự rằng sẽ “theo dõi sau”.</li>\n      </ul>\n      <p>Trong thị trường cạnh tranh ngày nay, chần chừ không chỉ là thận trọng, mà còn là đánh mất cơ hội. Người được nhận không phải lúc nào cũng giỏi nhất trên giấy. Nhưng chắc chắn, họ là người hành động trước - người ứng tuyển trước khi cảm thấy hoàn toàn sẵn sàng, người lên tiếng trong phỏng vấn thay vì chờ được hỏi, người theo đuổi đến cùng thay vì chờ được chọn.</p>\n      <p>Nhà tuyển dụng đọc được sự quyết đoán đó rất rõ - họ thấy tinh thần làm chủ, sự chủ động và động lực ở con người: chính là những phẩm chất phân biệt một ứng viên tốt với một ứng viên dễ bị lãng quên. Nếu bạn là ứng viên, lời khuyên của tôi rất đơn giản: đừng chờ thời điểm hoàn hảo vì nó không tồn tại. Hãy tiến lên, đặt câu hỏi táo bạo, và để sự chủ động lên tiếng trước cả CV của bạn.</p>\n      <p>Tại TopLead, chúng tôi không tưởng thưởng cho những hồ sơ ồn ào nhất - chúng tôi ghép nối thái độ và năng lực với đúng nhà tuyển dụng. Nhưng chúng tôi chỉ có thể mở cánh cửa khi bạn sẵn sàng bước qua.</p>",
    "sig.b6": "<div class=\"post-split-col\"><b>SME</b><span>89% không thể trả lương ngang tập đoàn (Employment Hero 2024)</span></div><div class=\"post-split-vs\">vs</div><div class=\"post-split-col\"><b>Tập đoàn</b><span>Thắng nhờ cấu trúc, không phải bản chất</span></div>",
    "body.b6": "<p class=\"post-lead\">89% doanh nghiệp SME không thể trả lương ngang tập đoàn (Employment Hero 2024), nhưng lương không phải lý do khiến họ thua.</p>\n      <p>Khoảng cách thật sự nằm ở quy trình. Thời gian trung bình từ khi đăng tin đến khi tuyển được đã lên tới 48 ngày - tăng 65% chỉ trong ba năm (BambooHR 2026). Trong khi đó, ứng viên hàng đầu rời khỏi thị trường trong vòng 10 ngày (Movement Search &amp; Delivery 2026).</p>\n      <p>Và ứng viên nhận ra điều đó: 42% rút khỏi quá trình tuyển dụng chỉ vì việc sắp lịch quá lâu (iHire 2023). 93% quản lý tuyển dụng cũng thừa nhận quy trình chậm hơn so với hai năm trước (Robert Half 2025).</p>\n      <p>Điều trớ trêu là: SME vốn đã có thứ mà ứng viên ngày nay mong muốn:</p>\n      <ul>\n        <li>71% người lao động nói rằng cơ hội phát triển quyết định sự hài lòng trong công việc (Gallup, trích trong COSE 2025).</li>\n        <li>39% xếp tiềm năng thăng tiến là yếu tố quan trọng nhất (Yoh 2025). Công ty nhỏ mang lại cả hai - thăng tiến nhanh hơn, va chạm rộng hơn, tiếp cận lãnh đạo trực tiếp hơn.</li>\n      </ul>\n      <p>Nhưng phần lớn SME không bao giờ nói rõ điều này. Họ đăng những bản mô tả công việc chung chung, vận hành quy trình chậm chạp, và mất ứng viên vào tay những công ty đơn giản là ra tay trước.</p>\n      <h2>Ba cách khắc phục cho SME</h2>\n      <ul>\n        <li><strong>Bán vị trí.</strong> Người này sẽ đảm nhận chính xác điều gì? Họ sẽ xây dựng gì? Đóng góp gì? Tất cả nên rõ ràng trong JD.</li>\n        <li><strong>Rút ngắn tiến độ.</strong> Hai vòng phỏng vấn. Một tuần. Một lời mời dứt khoát. Cho thấy lộ trình phát triển - chỉ cần một câu trả lời rõ ràng cho “12 tháng nữa vị trí này dẫn đến đâu?”.</li>\n        <li><strong>Cạnh tranh bằng cấu trúc.</strong> Tập đoàn không thắng nhờ bản chất. Họ thắng nhờ cấu trúc.</li>\n      </ul>\n      <p>Tại TopLead, chúng tôi giúp các SME Việt Nam thu hẹp khoảng cách đó - ghép đúng ứng viên vào các vị trí chuyên môn trong Sales, Marketing, Tài chính, HR và Vận hành. Chúng tôi không chỉ gửi CV. Chúng tôi đảm bảo nhân tài nhìn thấy điều khiến công ty bạn đáng để gia nhập.</p>",
    "sig.b7": "<div class=\"post-stat\"><b>24%</b><span>tỷ lệ nghỉ việc tại Việt Nam, so với mức lý tưởng ~10% (Anphabe 2023)</span></div><div class=\"post-stat\"><b>$228-355M</b><span>thất thoát mỗi năm do mất gắn kết tại một công ty S&amp;P 500 cỡ trung (McKinsey 2023)</span></div>",
    "body.b7": "<p class=\"post-lead\">Phần lớn chủ doanh nghiệp SME chỉ ghi nhận việc nghỉ việc vào thời điểm nộp đơn. Nhưng khi đó, tổn thất đã cũ.</p>\n      <p>Chi phí thật sự bắt đầu từ nhiều tháng trước, khi một nhân viên vẫn còn hiện diện, vẫn làm ở mức tối thiểu, nhưng đã mất gắn kết. Đó gọi là nghỉ việc thầm lặng, và nó không xuất hiện trên bất kỳ báo cáo nào cho đến khi quá muộn để ngăn chặn.</p>\n      <h2>Dữ liệu và theo dõi</h2>\n      <p>Tỷ lệ nghỉ việc tại Việt Nam đã lên tới 24%, so với mức “lý tưởng” khoảng 10% cho một tổ chức ổn định. Tỷ lệ nghỉ cao nhất lại rơi vào đúng những bộ phận mà SME phụ thuộc nhiều nhất: Marketing, Sales, IT và Tài chính (Anphabe 2023). Sự mất gắn kết đi trước đó thậm chí còn tốn kém hơn cả việc rời đi. McKinsey ước tính một công ty S&amp;P 500 cỡ trung mất từ 228 đến 355 triệu USD mỗi năm do mất gắn kết và nghỉ việc, với hơn một nửa lực lượng lao động điển hình mất gắn kết tại bất kỳ thời điểm nào (McKinsey &amp; Company 2023). Quy luật này đúng bất kể quy mô công ty: sự rút lui diễn ra âm thầm, năng suất hao hụt liên tục, và chi phí tích tụ từ rất lâu trước khi lá đơn xin nghỉ xuất hiện.</p>\n      <h2>Nguyên nhân gốc rễ</h2>\n      <p>Những lần ra đi này hiếm khi vì lương. Chúng bắt nguồn từ sự lệch pha ngay tại thời điểm tuyển - sai người, sai kỳ vọng, hoặc sai văn hóa. Khi một doanh nghiệp tuyển vội để lấp chỗ trống, họ không giải quyết được vấn đề. Họ khởi động lại đúng vòng lặp đó, và gánh chi phí mất gắn kết thêm một lần nữa.</p>\n      <h2>Ý nghĩa đối với SME</h2>\n      <p>Tất cả nằm ở độ chính xác của lần tuyển đầu tiên. Đó là lý do TopLead sàng lọc cả hai phía của sự phù hợp, đánh giá ứng viên cho doanh nghiệp và đánh giá doanh nghiệp cho ứng viên. Khi sự phù hợp là thật ở cả hai đầu, mức gắn kết bắt đầu cao và được duy trì, thu hẹp khoảng trống nơi nghỉ việc thầm lặng bén rễ.</p>\n      <p><strong>Ngừng tuyển lại. Bắt đầu phát triển.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Nguồn tham khảo</span><p>Anphabe (2023), qua Vietnam News / Staffing Industry Analysts - tỷ lệ nghỉ việc tại Việt Nam ở mức 24% so với 10% tối ưu; nghỉ nhiều nhất ở marketing, sales, IT, tài chính. &middot; McKinsey &amp; Company (2023), “Some employees are destroying value. Others are building it.”</p></div>",
    "about.story.title": "Câu chuyện TopLead",
    "about.story.p1": "TopLead ra đời từ một niềm tin đơn giản nhưng khó thực hiện: mỗi người xứng đáng thuộc về đúng nơi họ cần, và mỗi doanh nghiệp xứng đáng có đúng người.",
    "about.story.p2": "Trong một thị trường nơi tuyển dụng thường được đo bằng số lượng hồ sơ, chúng tôi chọn đo bằng kết quả thật sự. Đó là lý do TopLead chỉ thu phí khi ứng viên vượt qua thử việc - cùng gánh rủi ro với khách hàng, và sàng lọc hai chiều để sự phù hợp bền vững ngay từ ngày đầu.",
    "about.story.p3": "Với kinh nghiệm trải rộng nhiều ngành (IT, Tài chính, FMCG, F&B, Bất động sản, Xây dựng…), đội ngũ TopLead không chỉ lấp đầy vị trí trống. Chúng tôi kết nối con người với đúng môi trường để phát triển, và giúp doanh nghiệp giữ được người giỏi lâu hơn.",
    "about.stat1": "Năm kinh nghiệm cộng dồn của đội ngũ sáng lập",
    "about.stat2": "Ngành chuyên sâu",
    "about.stat3": "Gửi danh sách rút gọn đầu tiên",
    "about.stat4": "Tháng bảo hành thay thế",
    "partner.tag": "Đối tác của bạn",
    "partner.title": "Bạn đang có một đối tác tốt",
    "partner.subtitle": "Không phải lời hứa - mà là cách chúng tôi đặt cược cùng bạn.",
    "partner.s1": "năm kinh nghiệm cộng dồn của đội ngũ sáng lập",
    "partner.s2": "nhóm ngành chuyên sâu: IT, Tài chính, FMCG, F&B, BĐS, Xây dựng",
    "partner.s3": "để gửi hồ sơ đầu tiên đã được sàng lọc",
    "partner.s4": "phí trả trước - bạn chỉ thanh toán sau khi ứng viên vượt qua thử việc",
    "partner.v1.title": "Mạng lưới chuyên gia",
    "partner.v1.desc": "Kết nối với ứng viên chất lượng cao trên nhiều nhóm ngành khác nhau.",
    "partner.v2.title": "Tìm kiếm chủ động",
    "partner.v2.desc": "Không chờ ứng viên ứng tuyển - chúng tôi chủ động tìm và tiếp cận đúng người.",
    "cta.services": "Tìm giải pháp phù hợp cho bạn",
    "cta.pain": "Để TopLead giải quyết cho bạn",
    "services.lead": "Chúng tôi không chỉ lấp đầy vị trí trống - chúng tôi ghép đúng người với đúng doanh nghiệp.",
    "services.leadsub": "Và chỉ tính phí khi ứng viên ở lại sau thử việc. Rủi ro thuộc về chúng tôi, kết quả thuộc về bạn.",
    "pain.lead": "Hàng trăm CV, deadline gấp, và nỗi lo tuyển sai người.",
    "pain.leadsub": "TopLead giúp bạn thoát khỏi mớ hỗn độn đó - sàng lọc kỹ và gửi đúng hồ sơ trong 48 giờ.",
    "serve.tag": "Đối tượng phục vụ",
    "serve.title": "Chuyên sâu cho doanh nghiệp SME",
    "serve.desc": "TopLead đồng hành cùng các doanh nghiệp vừa và nhỏ tại Việt Nam - nơi mỗi lần tuyển đúng người tạo ra khác biệt lớn nhất.",
    "philosophy.quote": "Nhân sự không phải là chi phí - đó là động cơ của mọi thứ theo sau.",
    "cine.caption": "Mỗi lần tuyển đúng người là một chương mới cho doanh nghiệp.",
    "cine.eyebrow": "Niềm tin của chúng tôi",
    "cine.cta": "Xem cách chúng tôi làm việc",
    "phil.eyebrow": "Triết lý của chúng tôi",
    "phil.body": "Chúng tôi tuyển người phù hợp để ở lại và phát triển - không chỉ để lấp chỗ trống.",
    "phil.cta": "Tìm hiểu cách chúng tôi làm việc",
    "phil.caption": "Người thật. Doanh nghiệp thật. Kết quả ở lại.",
    "pw.label": "Được tin dùng bởi các doanh nghiệp",
    "pw.sub": "Từ SME đến các đơn vị chuyên môn - TopLead đồng hành trong bài toán tuyển dụng của họ.",
    "pw.b1": "Công nghệ thông tin, tích hợp hệ thống (SI/ICT)",
    "pw.miso": "Ẩm thực & đồ uống (F&B)",
    "pw.rmit": "Đối tác độc quyền trong tuyển chọn ứng viên",
    "pw.tan": "Gỗ & nội thất - khách hàng tuyển dụng",
    "pw.fit": "Gym, phong cách sống & tổ chức sự kiện",
    "pw.supp": "Gym & sản phẩm bảo vệ sức khỏe",
    "pw.xuanvinh": "Chuỗi cửa hàng trang sức",
    "pw.thadico": "Bất động sản & xây dựng",
    "ab.cta.title": "Sẵn sàng tìm nhân sự phù hợp?",
    "ab.cta.subtitle": "Hãy để TopLead đồng hành cùng bạn trong bài toán tuyển dụng",
    "ab.cta.button": "Liên hệ ngay",
    "svc.ind": "Ngành nghề chúng tôi phục vụ",
    "svc.why": "Tại sao chọn dịch vụ TopLead?",
    "svc.why1": "Gửi hồ sơ đầu tiên trong 48 giờ",
    "svc.why2": "Bước sàng lọc nghiêm ngặt",
    "svc.why3": "Tháng bảo hành thay thế",
    "svc.why4": "phí trả trước",
    "svc.cta.title": "Cần tư vấn dịch vụ?",
    "svc.cta.sub": "Liên hệ ngay để được tư vấn miễn phí",
    "svc.cta.btn": "Liên hệ ngay",
    "svc.indTag": "Ngành nghề",
    "ab.team.title": "Đội ngũ sáng lập",
    "ab.team.sub": "Những con người đặt nền móng cho TopLead",
    "ab.why.title": "Tại sao chọn TopLead?",
    "ab.why.sub": "Chúng tôi hiểu rằng tuyển dụng không chỉ là điền vào một vị trí trống",
    "ab.c1.t": "Chất lượng đầu tiên",
    "ab.c1.d": "Mỗi ứng viên đều trải qua quy trình sàng lọc nghiêm ngặt với 5 bước kiểm tra.",
    "ab.c2.t": "Tốc độ nhanh",
    "ab.c2.d": "Gửi hồ sơ trong vòng 48 giờ. Ứng viên sẵn sàng phỏng vấn trong tuần đầu tiên.",
    "ab.c3.t": "Bảo hành thay thế",
    "ab.c3.d": "Miễn phí thay thế trong 3 tháng nếu ứng viên không phù hợp.",
    "ab.c4.t": "Mạng lưới rộng",
    "ab.c4.d": "Kết nối với ứng viên chất lượng cao từ nhiều nhóm ngành khác nhau.",
    "ab.c5.t": "Hỗ trợ 24/7",
    "ab.c5.d": "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.",
    "ab.c6.t": "Minh bạch giá",
    "ab.c6.d": "Chi phí rõ ràng, không phí ẩn. Chỉ thanh toán khi ứng viên vượt qua thử việc.",
    "ab.cl.title": "Khách hàng & Đối tác",
    "ab.cl.sub": "Đồng hành cùng 120+ doanh nghiệp trên khắp Việt Nam",
    "tl.r1": "Checklist toàn diện để đánh giá ứng viên trong phỏng vấn",
    "tl.r2": "Báo cáo mức lương thị trường theo ngành và vị trí",
    "tl.r3": "Mẫu mô tả công việc chuẩn để thu hút ứng viên chất lượng",
    "tl.r4": "Hướng dẫn hội nhập hiệu quả cho nhân viên mới",
    "tl.r5": "Hướng dẫn xây dựng thương hiệu nhà tuyển dụng hấp dẫn",
    "tl.r6": "Chiến lược giữ chân nhân tài trong thị trường cạnh tranh",
    "ct.name": "Họ và tên *",
    "ct.emailco": "Email công ty *",
    "ct.phone": "Số điện thoại *",
    "ct.company": "Tên công ty *",
    "ct.qty": "Số lượng tuyển dụng",
    "ct.need": "Nhu cầu tuyển dụng",
    "ct.email": "Email *",
    "ct.qtysel": "Chọn số lượng...",
    "ct.q1": "1-4 người",
    "ct.q2": "5-9 người",
    "ct.q3": "10-19 người",
    "ct.q4": "20+ người",
    "ct.i.addr": "Địa chỉ",
    "ct.i.phone": "Điện thoại",
    "ct.i.hours": "Giờ làm việc",
    "ct.h1": "Thứ 2 - Thứ 6: 8:30 - 18:00",
    "ct.h2": "Thứ 7: 8:30 - 12:00",
    "ap.t1": "Đăng tin, chờ ứng viên đến",
    "ap.t1d": "Chờ ứng viên nộp CV, không chủ động tìm kiếm",
    "ap.t2": "CV lọc bằng từ khóa",
    "ap.t2d": "CV được lọc qua keyword, không đánh giá sâu",
    "ap.t3": "Kiểm tra tham chiếu hình thức",
    "ap.t3d": "Ít khi kiểm tra background thực tế",
    "ap.t4": "Không cam kết sau tuyển",
    "ap.t4d": "Không hỗ trợ nếu ứng viên nghỉ sớm",
    "ap.t5": "Lấp đầy vị trí trong 2-3 tháng",
    "ap.t5d": "Mất 2-3 tháng để fill một vị trí",
    "ap.l1": "Chủ động tiếp cận — không chờ đăng tin",
    "ap.l1d": "Proactive search, tiếp cận ứng viên tiềm năng",
    "ap.l2": "Guardian Screen - quy trình 5 lớp riêng của TopLead",
    "ap.l2d": "Năm lớp sàng lọc liên tiếp, chỉ khoảng 4% ứng viên đi hết chặng.",
    "ap.l3": "3+ cuộc gọi tham chiếu sâu trước mỗi danh sách rút gọn",
    "ap.l3d": "Kiểm tra 3+ references trước khi giới thiệu",
    "ap.l4": "Bảo hành 3 tháng - thay thế miễn phí",
    "ap.l4d": "Miễn phí thay thế trong 3 tháng",
    "ap.l5": "Danh sách rút gọn trong 48 giờ",
    "ap.l5d": "Nhận 3-5 hồ sơ đã sàng lọc trong 48 giờ đầu tiên - không phải chờ vài tuần.",
    "ap.s1": "Tìm hiểu nhu cầu tuyển dụng, văn hóa công ty, và yêu cầu chi tiết cho vị trí",
    "ap.s2": "Chủ động tiếp cận ứng viên phù hợp từ hệ thống dữ liệu, mạng lưới giới thiệu và thị trường",
    "ap.s3": "Áp dụng Guardian Screen - quy trình 5 lớp sàng lọc riêng của TopLead",
    "ap.s4": "Gửi 3-5 hồ sơ đã sàng lọc kỹ kèm ghi chú phỏng vấn",
    "ap.s5": "Hỗ trợ sắp xếp lịch phỏng vấn và thu thập phản hồi hai chiều",
    "ap.s6": "Hỗ trợ hòa nhập và theo dõi trong suốt thời gian bảo hành",
    "ap.tradTitle": "Tuyển dụng truyền thống",
    "ap.step1": "Tư vấn",
    "ap.step2": "Tìm kiếm",
    "ap.step3": "Sàng lọc",
    "ap.step4": "Trình hồ sơ",
    "ap.step5": "Phỏng vấn",
    "ap.step6": "Tuyển dụng",
    "jr.tag": "Hành trình",
    "cmp.title": "Cách thường thấy và cách của chúng tôi",
    "cmp.sub": "Cùng một vị trí cần tuyển, hai cách làm - khác biệt nằm ở từng chi tiết.",
    "cmp.trad": "Tuyển dụng truyền thống",
    "cmp.tl": "TopLead Recruitment Co. Ltd.",
    "cmp.hint": "Kéo về giữa để so sánh",
    "ap.t1.x": "Phụ thuộc vào lượng CV tự đến - chất lượng không kiểm soát được, thời gian không dự đoán được.",
    "ap.t2.x": "CV lọc bằng từ khóa tự động - bỏ sót người giỏi không dùng đúng từ khóa, giữ lại người biết viết CV cho máy đọc.",
    "ap.t3.x": "Gọi một nguồn tham chiếu cho có thủ tục - thường là người ứng viên tự chọn, không phản ánh thực tế.",
    "ap.t4.x": "Ứng viên nghỉ sau hai tuần? Đó là việc của bạn - phí đã thu xong rồi.",
    "ap.t5.x": "Từ lúc đăng tin đến lúc có người nhận lời mời làm việc thường mất 45-90 ngày. Ghế trống càng lâu, chi phí ẩn càng lớn.",
    "ap.l1.x": "Chủ động tiếp cận từ hệ thống dữ liệu, mạng lưới giới thiệu và LinkedIn.",
    "ap.l2.x": "Năm lớp sàng lọc thật: kỹ năng, phỏng vấn, văn hóa, tham chiếu, duyệt cuối. Từ 80 ứng viên chỉ còn 3.",
    "ap.l3.x": "Gọi tối thiểu 3 tham chiếu do TopLead chọn — hỏi sâu về hiệu suất, thái độ làm việc và lý do nghỉ thật sự.",
    "ap.l4.x": "90 ngày theo dõi chủ động. Không phù hợp trong 3 tháng thì thay thế miễn phí, không phát sinh chi phí.",
    "ap.l5.x": "Rút gọn danh sách 3-5 hồ sơ trong 48 giờ đầu. Phỏng vấn ngay tuần đầu. Trung bình 2-4 tuần là có người.",
    "tst.all": "Xem tất cả đánh giá trên Google",
    "cmp.cta": "Muốn biết quy trình cụ thể? Kéo xuống - hoặc",
    "cmp.ctaLink": "liên hệ ngay",
    "jr.meet": "Điểm gặp nhau",
    "ex.more": "Xem chi tiết",
    "ex.g.l1": "Lớp 1: Năng lực & kinh nghiệm",
    "ex.g.l1d": "Kỹ năng chuyên môn, số năm kinh nghiệm, mức độ phù hợp với ngành, lộ trình nghề nghiệp",
    "ex.g.l2": "Lớp 2: Phỏng vấn sàng lọc",
    "ex.g.l2d": "Kỹ năng giao tiếp, động lực làm việc, kỳ vọng lương, thời gian sẵn sàng",
    "ex.g.l3": "Lớp 3: Tương thích văn hóa",
    "ex.g.l3d": "Phong cách làm việc, sở thích quản lý, sự phù hợp với giá trị và văn hóa doanh nghiệp",
    "ex.g.l4": "Lớp 4: Xác minh tham chiếu",
    "ex.g.l4d": "3+ cuộc gọi tham chiếu - lịch sử hiệu suất, thái độ làm việc, lý do nghỉ việc thực tế",
    "ex.g.l5": "Lớp 5: Duyệt cuối & danh sách rút gọn",
    "ex.g.l5d": "Hội đồng TopLead đánh giá toàn diện hồ sơ, chọn 3 hồ sơ tốt nhất gửi khách hàng",
    "ex.g.note": "Chỉ ~4% ứng viên vượt qua toàn bộ Guardian Screen",
    "ex.t.cap": "Nói thẳng từ đầu, kể cả khi đó không phải điều khách hàng muốn nghe.",
    "ex.t.p1": "Trung thực",
    "ex.t.p1d": "Nếu JD không hợp lý — nói thẳng. Nếu thị trường không có người ở mức lương đó — nói thẳng. Không hứa để giành hợp đồng. TopLead từ chối nhận dự án nếu biết trước không thể thực hiện được.",
    "ex.t.p2": "Trách nhiệm",
    "ex.t.p2d": "Mỗi lượt tuyển có một người chịu trách nhiệm rõ ràng — không phải \"đội\". Theo dõi chủ động tại mốc 30, 60 và 90 ngày.",
    "ex.t.p3": "Đồng hành",
    "ex.t.p3d": "Không phải nhà cung cấp bán CV — mà là đối tác cùng giải bài toán nhân sự. Tư vấn JD, khung lương thị trường và quy trình hòa nhập. Vẫn hỗ trợ sau khi ứng viên đã vào việc.",
    "ex.gr.m1": "Đánh giá hiệu suất",
    "ex.gr.m1d": "Đánh giá mức độ hòa nhập ban đầu của ứng viên",
    "ex.gr.m2": "Kiểm tra giữa kỳ",
    "ex.gr.m2d": "Theo dõi tiến độ, xử lý vấn đề sớm trước khi thành lớn",
    "ex.gr.m3": "Đánh giá toàn diện",
    "ex.gr.m3d": "Đánh giá toàn diện, kết thúc thời gian bảo hành",
    "ex.gr.note": "Trong 90 ngày, nếu ứng viên không phù hợp - TopLead thay thế miễn phí, không phát sinh chi phí.",
    "jr.title": "Quy trình tuyển dụng 6 bước",
    "jr.sub": "Từ lúc nhận yêu cầu đến khi ứng viên qua thời gian bảo hành",
    "jr.youGet": "Bạn nhận được",
    "jr.time1": "Ngày 1",
    "jr.time2": "Ngày 2-5",
    "jr.time3": "Ngày 3-7",
    "jr.time4": "Ngày 5-7",
    "jr.time5": "Tuần 2",
    "jr.time6": "Tháng 1-3",
    "jr.dl1": "Bản mô tả yêu cầu - nhu cầu, ngân sách, thời hạn, văn hóa công ty",
    "jr.dl2": "Danh sách dài 15-25 ứng viên tiềm năng",
    "jr.dl3": "Kết quả Guardian Screen - chi tiết đạt/không đạt từng lớp",
    "jr.dl4": "Danh sách rút gọn 3-5 CV trong 48 giờ",
    "jr.dl5": "Điều phối phỏng vấn và báo cáo phản hồi hai chiều",
    "jr.dl6": "Hỗ trợ đàm phán offer, hòa nhập và bảo hành 3 tháng",
    "ex.g.role": "Bộ lọc đầu vào - ai được bước lên hành trình",
    "ex.g.sub": "Quy trình 5 lớp sàng lọc",
    "ex.g.summary": "Từ 80 ứng viên đầu vào, chỉ 3 hồ sơ đến tay khách hàng - khoảng 4% đi hết cả năm lớp.",
    "ex.t.role": "Sự đồng nhất - giữ hai bên đi đúng hướng",
    "ex.t.sub": "3 trụ cột cam kết",
    "ex.t.summary": "Trung thực, Trách nhiệm và Đồng hành - ba điều TopLead cam kết ngay cả khi điều đó khiến chúng tôi mất hợp đồng.",
    "ex.gr.role": "Bảo vệ - giữ kết nối bền vững sau khi đã khớp",
    "ex.gr.sub": "Bảo hành 3 tháng",
    "ex.gr.summary": "Theo dõi tại mốc 30, 60 và 90 ngày. Trong 90 ngày, nếu ứng viên không phù hợp - TopLead thay thế miễn phí.",
    "ap.w1": "Bước 1: Brief",
    "ap.w1d": "Call với khách hàng để hiểu JD, budget, timeline, văn hóa công ty",
    "ap.w2": "Bước 2: Search",
    "ap.w2d": "Database + Proactive search + Headhunting",
    "ap.w3": "Bước 3: Screen",
    "ap.w3d": "Guardian Screen - lọc 5 bước",
    "ap.w4": "Bước 4: Present",
    "ap.w4d": "Gửi CV + interview notes trong 48h",
    "ap.w5": "Bước 5: Interview",
    "ap.w5d": "Coordinate + feedback loop",
    "ap.w6": "Bước 6: Close",
    "ap.w6d": "Offer + onboarding + guarantee",
    "ap.q1": "“Mình rất hài lòng với dịch vụ tư vấn của TopLead. Đội ngũ rất chuyên nghiệp, hỗ trợ tận tâm và đưa ra những lời khuyên hữu ích cho lộ trình nghề nghiệp của mình. Rất đáng tin cậy!”",
    "ap.q2": "“Sau khi nhận việc, đội ngũ vẫn hỏi thăm và hỗ trợ trong suốt thời gian thử việc.”",
    "ap.q3": "“Em đã có việc thông qua TopLead, bạn Cường cũng vậy, bạn Quân cũng thế. Bạn Hiếu rồi cũng sẽ qua!”",
    "ap.q4": "Dịch vụ tuyển dụng nhanh, hiệu quả và tiết kiệm. Mức phí cân bằng so với mặt bằng chung của thị trường.",
    "ap.q5": "TopLead làm việc chuyên nghiệp và tận tâm. Nhân sự được bổ sung nhanh, chất lượng đúng như cam kết.",
    "ap.q6": "Ứng viên TopLead giới thiệu đều rất chất lượng. Khâu đặt lịch hẹn nhanh gọn, tiết kiệm thời gian cho cả hai bên.",
    "chip.fin": "Tài chính",
    "chip.re": "Bất động sản",
    "chip.con": "Xây dựng",
    "pain.ticker": "Bạn đang...",
    "ct.submitEmp": "Gửi yêu cầu",
    "post.readmore": "Đọc tiếp →"
  },
  en: {
    "nav.home": "Home",
    "ph.scroll": "Scroll",
    "ui.toTop": "Back to top",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.approach": "Our Approach",
    "nav.jobs": "Jobs",
    "nav.tools": "Blog",
    "nav.contact": "Contact",
    "nav.ourStory": "Our Story",
    "nav.ourTeam": "Our Team",
    "nav.whyChoose": "Why Choose TopLead",
    "nav.clients": "Clients & Partners",
    "nav.milestones": "Milestones",
    "nav.compare": "Comparison",
    "nav.guardian": "Guardian Screen",
    "nav.trustcare": "Trustcare Framework",
    "nav.guarantee": "Guarantee Framework",
    "nav.journey": "The Journey",
    "nav.exclusive": "Exclusive",
    "hero.badge": "TopLead Recruitment",
    "hero.slide1.line1": "Your Star Employee Just Quit.",
    "hero.slide1.line2": "But There's No Replacement in Sight?",
    "hero.slide1.desc": "TopLead sends pre-screened candidates within 48 hours. Already filtered for your industry.",
    "hero.slide1.cta": "Hire Now →",
    "hero.slide2.line1": "3 Carefully Screened Resumes.",
    "hero.slide2.line2": "You Just Pick the Best One.",
    "hero.slide2.desc": "No more reading dozens of CVs. We filter, you choose, you get someone working this week.",
    "hero.slide2.cta": "Send Request →",
    "hero.slide3.line1": "Short on Staff?",
    "hero.slide3.line2": "Don't Let It Drag On Until Tomorrow.",
    "hero.slide3.desc": "Every day without staff is a day of lost revenue. Contact today, get candidates tomorrow.",
    "hero.slide3.cta": "Contact Now →",
    "hero.slide4.line1": "If It Doesn't Work, We Replace.",
    "hero.slide4.line2": "No Questions Asked, No Extra Cost.",
    "hero.slide4.desc": "All TopLead candidates come with replacement warranty. Because we only recommend people we believe in.",
    "hero.slide4.cta": "Learn More →",
    "founders.tag": "Founding Team",
    "founders.title": "Our Founders",
    "founders.f1.name": "Tạ Vinh An",
    "founders.f1.role": "CEO & Founder",
    "founders.f1.quote": "“I believe everyone deserves to belong exactly where they are meant to be.”",
    "founders.f1.exp1": "7+ years in HR & executive search (IT, CS, FMCG, F&B, Hospitality, HR)",
    "founders.f1.exp2": "SHRM-CP certified (2026)",
    "founders.f2.name": "Nguyễn Trần Nhật Hưng",
    "founders.f2.role": "CFO & Co-Founder",
    "founders.f2.quote": "“HR work is like facing a problem where no single answer is ever fully right.”",
    "founders.f2.exp1": "5+ years recruiting for SMEs (Finance, Accounting, Construction, M&E)",
    "founders.f3.name": "Vũ Quang Bình",
    "founders.f3.role": "CCO & Co-Founder",
    "founders.f3.quote": "“Not everyone is born a genius - great talent needs the right environment to grow.”",
    "founders.f3.exp1": "4+ years in professional B2C/B2B sales recruitment & business development (Insurance, Real Estate, Construction)",
    "logos.label": "Trusted by leading companies",
    "value.title": "Great hires always come from people you trust",
    "value.card1.title": "Expert Network",
    "value.card1.desc": "Connect with over 10,000 quality candidates from various industries.",
    "value.card2.title": "Proactive Search",
    "value.card2.desc": "We actively search and approach suitable talent.",
    "services.tag": "Services",
    "services.title": "Comprehensive Recruitment Solutions",
    "services.subtitle": "Serving all staffing needs of businesses",
    "services.s1.title": "Executive Search",
    "services.s1.desc": "Recruit CEO, CFO, Directors and senior management with confidential process.",
    "services.s2.title": "Team Buildout",
    "services.s2.desc": "Help startups build teams from foundation stage.",
    "services.s3.title": "Tech Hiring",
    "services.s3.desc": "Specialized recruitment for Developers, Data Scientists, Product Managers.",
    "pain.tag": "Challenges",
    "pain.title": "What challenge are you facing?",
    "pain.word1": "hiring wrong person",
    "pain.word2": "wasting time",
    "pain.word3": "losing money",
    "pain.word4": "lacking talent",
    "pain.p1.title": "Need staff urgently but cannot hire anyone",
    "pain.p1.desc": "We help you reach suitable candidates in the shortest time.",
    "pain.p2.title": "Founder good at tech but does not know how to hire",
    "pain.p2.desc": "Our team supports you in building a professional team.",
    "pain.p3.title": "Old staff left, work got delayed",
    "pain.p3.desc": "Quick handover process, minimizing disruption.",
    "stats.title": "You have a good partner",
    "stats.s1.role": "Senior Positions",
    "stats.s1.company": "for TechCorp in 12 months",
    "stats.s2.role": "Positions Filled",
    "stats.s2.company": "for VietRetail this year",
    "stats.s3.role": "Staff",
    "stats.s3.company": "for BuildPro at 14 branches",
    "stats.s4.role": "Tech Positions",
    "stats.s4.company": "for LogiGroup in 6 months",
    "jobs.tag": "Jobs",
    "jobs.title": "Open Positions",
    "jobs.subtitle": "Exciting career opportunities from leading companies",
    "cta.title": "Ready to build an exceptional team?",
    "cta.subtitle": "Let TopLead help you find the perfect talent",
    "cta.start": "Get Started",
    "testimonials.tag": "Reviews",
    "testimonials.title": "What Our Clients Say",
    "tst.google": "5★ review on Google",
    "tst.clientbadge": "Client feedback",
    "tst.candidatebadge": "Candidate feedback",
    "svc.o.tag": "Services",
    "svc.o.title": "Three recruitment services",
    "svc.o.sub": "Three tiers, sorted by the level you are hiring for. Pick the right one and we handle the rest.",
    "svc.incl": "Includes",
    "svc.price": "Request a quote",
    "svc.add": "Add to consultation request",
    "svc.p1.tier": "Intern - Entry level",
    "svc.p1.name": "Headhunting",
    "svc.p1.tagline": "High-volume hiring for entry roles",
    "svc.p1.desc": "Proactively reach and hire candidates at speed for internships, entry-level roles and high-volume needs. Ideal when you need to fill many positions in a short window.",
    "svc.p1.f1": "High-volume (mass) hiring",
    "svc.p1.f2": "Internship, fresher and entry-level roles",
    "svc.p1.f3": "Fast time-to-hire",
    "svc.p2.tier": "Mid - Senior level",
    "svc.p2.name": "Executive Talent Selection",
    "svc.p2.tagline": "Selecting specialists and managers",
    "svc.p2.desc": "Careful sourcing and screening for mid to senior specialist roles. Our five-layer Guardian Screen safeguards both quality and fit.",
    "svc.p2.f1": "Mid to Senior roles (specialists, team leads, managers)",
    "svc.p2.f2": "Guardian Screen - five-layer screening",
    "svc.p2.f3": "A shortlist of 3-5 candidates within 48 hours",
    "svc.p3.tier": "C-level",
    "svc.p3.name": "Executive Search",
    "svc.p3.tagline": "Finding senior leadership",
    "svc.p3.desc": "Sourcing senior leaders (CEO, CFO, CTO, COO, VP, Director) through a discreet, confidential and professional process. We approach the market's top people directly.",
    "svc.p3.f1": "CEO, CFO, CTO, COO",
    "svc.p3.f2": "VP, Director, Head of Departments",
    "svc.p3.f3": "Fully confidential process",
    "svc.hrc.label": "Additional service",
    "svc.hrc.name": "HR Consulting",
    "svc.hrc.desc": "Advising on people strategy and building your in-house hiring process: standardised JDs, market-based salary bands and onboarding paths. For businesses that want to own recruitment long term.",
    "svc.hrc.cta": "Talk to us",
    "svc.ind.sub": "Hiring experience spread across eight industries, each with its own candidate network.",
    "svc.ind.kicker": "Sector expertise",
    "svc.ind.heroline": "A dedicated candidate network for every field",
    "svc.why.sub": "Four commitments we hold ourselves to, not slogans.",
    "jobs.detail": "View details",
    "jobs.partner": "TopLead partner",
    "jobs.showing": "Showing",
    "jobs.positions": "open positions",
    "jobs.empty": "No positions match your filters right now.",
    "jobs.empty.cta": "Send your CV and we will reach out when a new role opens",
    "jobs.error": "Could not load the positions. If you opened the file directly from disk, serve the page over a local server and try again.",
    "jobs.admin.flag": "Admin mode",
    "jobs.admin.export": "Download updated jobs.json",
    "jobs.admin.reset": "Undo",
    "jobs.admin.remove": "Remove this position",
    "jd.crumb": "Position details",
    "jd.hero": "Position details",
    "jd.location": "Location",
    "jd.level": "Level",
    "jd.type": "Type",
    "jd.salary": "Salary",
    "jd.about": "Job description",
    "jd.resp": "Responsibilities",
    "jd.req": "Requirements",
    "jd.ben": "Benefits",
    "jd.back": "Back to all positions",
    "jd.missing.title": "This position was not found",
    "jd.missing.desc": "The role you are looking for may have closed, or the link is not correct.",
    "jd.missing.cta": "See all open positions",
    "sc.tag": "TopLead 360°",
    "sc.title": "The full picture of how TopLead works with you",
    "sc.sub": "From the problem to the solution, to the right audience, to the partners who already trust us.",
    "sc.t0": "Challenges",
    "sc.t1": "Solutions",
    "sc.t2": "Who we serve",
    "sc.t3": "Partners",
    "sc.c0.h": "Which problem are you facing?",
    "sc.c0.a": "You need someone urgently but can't find the right hire.",
    "sc.c0.b": "Great at your craft, but not at recruiting.",
    "sc.c0.c": "Someone left and the work stalls.",
    "sc.c0.cta": "See the solution",
    "sc.c1.h": "Comprehensive recruitment solutions",
    "sc.c1.a": "senior talent, discreet and effective.",
    "sc.c1.b": "build a team from the earliest stage.",
    "sc.c1.c": "Developers, Data, Product for tech companies.",
    "sc.c1.cta": "Explore services",
    "sc.c2.h": "Specialised in SMEs",
    "sc.c2.p": "Where getting each hire right makes the biggest difference - TopLead partners with Vietnamese SMEs.",
    "sc.c3.h": "What partners say about TopLead",
    "testimonials.t1.text": "“Super-fast support - within 5 days we had 3 suitable candidates to interview. It saved our internal HR team a lot of time.”",
    "testimonials.t2.text": "“For real - TopLead truly understands what a business needs. No mass CV dumps, just carefully selected candidates. Highly recommend!”",
    "testimonials.t3.text": "“Good services - highly recommend for their realistic commitment.”",
    "contact.tag": "Contact",
    "contact.title": "Start Your Partnership",
    "contact.subtitle": "Leave your info and we will get back to you within 24 hours.",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.addressValue": "791/92F Tran Xuan Soan St., Tan Hung Ward, HCMC",
    "footer.tagline": "Connecting the right people with the right companies - recruitment you can hold accountable.",
    "footer.follow": "Follow Us",
    "footer.services": "Services",
    "footer.s1": "Executive Search",
    "footer.s2": "Team Buildout",
    "footer.s3": "Tech Hiring",
    "footer.s4": "Talent Assessment",
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.approach": "Our Approach",
    "footer.jobs": "Jobs",
    "footer.tools": "Blog",
    "footer.contact": "Contact",
    "footer.emailsTitle": "Contact Emails",
    "footer.officeTitle": "TopLead Office",
    "footer.addressLabel": "Address",
    "footer.address": "791/92F Tran Xuan Soan St., Tan Hung Ward, HCMC",
    "footer.phoneLabel": "Phone",
    "footer.emailLabel": "Email",
    "footer.directions": "Get Directions",
    "footer.rights": "All rights reserved.",
    "form.name": "Full Name",
    "form.email": "Email",
    "form.phone": "Phone Number",
    "form.optional": "(Optional)",
    "form.cv": "Attach CV/Resume",
    "form.drag": "Drag and drop or",
    "form.choose": "choose file",
    "form.maxSize": "max 5MB",
    "form.company": "Company Name",
    "form.position": "Position",
    "form.quantity": "Quantity",
    "form.message": "Message",
    "form.optional2": "(Optional)",
    "form.submit": "Submit",
    "form.success": "Thank you!",
    "form.successMsg": "TopLead team will contact you within 24 hours.",
    "form.namePlaceholder": "Enter your full name",
    "form.emailPlaceholder": "email@example.com",
    "form.phonePlaceholder": "+84 xxx xxx xxx",
    "form.linkedinPlaceholder": "https://linkedin.com/in/your-profile",
    "form.companyPlaceholder": "Your company name",
    "form.positionPlaceholder": "e.g. Software Engineer",
    "form.quantityPlaceholder": "e.g. 2",
    "form.messagePlaceholder": "Tell us about your needs...",
    "page.hero.title": "Contact",
    "page.hero.subtitle": "Connect with TopLead to explore opportunities or get recruitment consulting",
    "contact.tab.employer": "Employer",
    "contact.tab.candidate": "Candidate",
    "contact.form.name": "Full Name *",
    "contact.form.email": "Company Email *",
    "contact.form.phone": "Phone Number *",
    "contact.form.company": "Company Name *",
    "contact.form.companyPlaceholder": "Company name",
    "contact.form.service": "Interested Service",
    "contact.form.serviceSelect": "Select a service...",
    "contact.form.quantity": "Hiring Quantity",
    "contact.form.quantitySelect": "Select quantity...",
    "contact.form.demand": "Hiring Needs",
    "contact.form.demandPlaceholder": "Brief description of your hiring needs...",
    "contact.form.position": "Position of Interest",
    "contact.form.positionPlaceholder": "Desired position",
    "contact.form.experience": "Experience",
    "contact.form.experienceSelect": "Select experience level...",
    "contact.form.linkedin": "LinkedIn / Portfolio Link",
    "contact.form.linkedinPlaceholder": "https://linkedin.com/in/...",
    "contact.form.note": "Additional Notes",
    "contact.form.notePlaceholder": "Brief introduction about yourself...",
    "contact.form.uploadCV": "Upload CV",
    "contact.form.uploadCVLabel": "Upload CV (PDF, DOC)",
    "contact.form.submit": "Send Request",
    "contact.form.submitCandidate": "Submit Profile",
    "contact.info.address": "Address",
    "contact.info.addressValue": "Floor 8, ABC Building<br>123 Nguyen Trai, District 1<br>Ho Chi Minh City, Vietnam",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursValue": "Mon - Fri: 8:30 - 18:00<br>Saturday: 8:30 - 12:00",
    "contact.social.title": "Connect with TopLead",
    "contact.social.subtitle": "Follow us for the latest news and job opportunities",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.q1": "Does TopLead charge candidates?",
    "contact.faq.a1": "No. TopLead provides completely free services for candidates.",
    "contact.faq.q2": "How long does the recruitment process take?",
    "contact.faq.a2": "With TopLead's process, it takes an average of 14 days to fill a position.",
    "contact.faq.q3": "Is there a warranty?",
    "contact.faq.a3": "TopLead offers 3-month free replacement warranty.",
    "contact.faq.q4": "How to track progress?",
    "contact.faq.a4": "You will receive regular updates via email and phone.",
    "jobs.hero.title": "Jobs",
    "jobs.hero.subtitle": "Exciting career opportunities from leading companies",
    "jobs.filter.search": "Search",
    "jobs.filter.searchPlaceholder": "Position name, keywords...",
    "jobs.filter.industry": "Industry",
    "jobs.filter.location": "Location",
    "jobs.filter.level": "Level",
    "jobs.filter.all": "All",
    "jobs.count": "Showing 12 open positions",
    "jobs.apply": "Apply Now",
    "jobs.cta.title": "Can't find a suitable position?",
    "jobs.cta.subtitle": "Leave your CV, we will contact you when there's a matching opportunity",
    "jobs.cta.button": "Submit CV Now",
    "tools.hero.title": "Blog",
    "tools.hero.subtitle": "Useful resources for employers and candidates",
    "tools.blog.tag": "Blog",
    "tools.blog.title": "Latest Articles",
    "tools.blog.subtitle": "Recruitment trends and insights",
    "blog.all": "All",
    "blog.searchPh": "Search articles by title...",
    "blog.empty": "No matching articles found.",
    "tools.resources.tag": "Resources",
    "tools.resources.title": "Tools & Resources",
    "tools.resources.subtitle": "Download free useful documents",
    "tools.resources.download": "Download ↓",
    "tools.newsletter.title": "Subscribe to Newsletter",
    "tools.newsletter.subtitle": "Get recruitment trends and new articles from TopLead.",
    "tools.newsletter.placeholder": "Enter your email",
    "tools.newsletter.button": "Subscribe",
    "tools.cta.title": "Need HR consulting?",
    "tools.cta.subtitle": "Contact TopLead team for support",
    "tools.cta.button": "Contact Now",
    "services.option": "Select a service...",
    "services.optionExec": "Executive Search",
    "services.optionETS": "Executive Talent Selection",
    "services.optionStaff": "Staffing",
    "services.optionRPO": "RPO",
    "services.optionHead": "Headhunting",
    "services.optionConsult": "HR Consulting",
    "services.optionOther": "Other",
    "experience.none": "No experience",
    "experience.1to2": "1-2 years",
    "experience.3to5": "3-5 years",
    "experience.5to10": "5-10 years",
    "experience.10plus": "10+ years",
    "about.hero.title": "About Us",
    "about.hero.subtitle": "Accountable recruitment for Vietnamese businesses",
    "approach.hero.title": "Our Approach",
    "approach.hero.subtitle": "TopLead's unique recruitment methodology",
    "approach.compare.tag": "Comparison",
    "approach.compare.title": "Traditional Recruitment vs TopLead",
    "approach.compare.subtitle": "Clear differences in recruitment approach",
    "approach.exclusive.tag": "Exclusive",
    "approach.exclusive.title": "3 Key Features of TopLead",
    "approach.exclusive.subtitle": "Proprietary processes and commitments unique to TopLead",
    "approach.guardian.title": "Guardian Screen",
    "approach.guardian.desc": "5-step screening process ensuring candidate quality",
    "approach.trustcare.title": "Trustcare",
    "approach.trustcare.desc": "Quality commitment based on 3 transparent pillars",
    "approach.guarantee.title": "Guarantee",
    "approach.guarantee.desc": "3-month free replacement warranty",
    "approach.howitworks.tag": "Process",
    "approach.howitworks.title": "How It Works",
    "approach.howitworks.subtitle": "6-step process to find the right person for the right position",
    "approach.workflow.tag": "Workflow",
    "approach.workflow.title": "Working Process",
    "approach.workflow.subtitle": "Transparent - Clear - Effective",
    "approach.research.tag": "Research",
    "approach.research.title": "Numbers That Show The Difference",
    "approach.cta.title": "Ready to build an exceptional team?",
    "approach.cta.subtitle": "Let TopLead help you find the perfect talent",
    "approach.cta.button": "Get Started",
    "approach.testimonials.tag": "Reviews",
    "approach.testimonials.title": "What clients and candidates say about TopLead",
    "services.hero.title": "Services",
    "services.hero.subtitle": "Comprehensive recruitment solutions for businesses",
    "post.readUnit": "min read",
    "post.cta.title": "Looking for a recruitment partner that's accountable?",
    "post.cta.sub": "TopLead only charges once your hire passes probation. Let's start the conversation.",
    "post.cta.contact": "Contact TopLead",
    "post.cta.all": "← All posts",
    "b1.cat": "HR Career",
    "b1.title": "HR Pathway? Why Not?",
    "b1.teaser": "The accidental profession that turns intentional the moment you see people as leverage, not cost.",
    "b2.cat": "Sustainability",
    "b2.title": "It's Not Only a Project - It Is a Mindset",
    "b2.teaser": "Why TopLead charges nothing until a candidate passes probation - and what sustainability really costs.",
    "b3.cat": "Recruitment Model",
    "b3.title": "The Probation Period Is The Real Interview",
    "b3.teaser": "Anyone can perform for 30 minutes. The real interview starts on day 60.",
    "b4.cat": "Incentives",
    "b4.title": "Recruitment Doesn't Have a Talent Problem. It Has an Incentive Problem.",
    "b4.teaser": "Every system produces the behaviour it rewards. Recruitment's real problem isn't talent.",
    "b5.cat": "Candidates",
    "b5.title": "Hesitation Costs More Than You Think",
    "b5.teaser": "The candidates who get placed aren't the strongest on paper - they're the ones who move first.",
    "b6.cat": "SMEs",
    "b6.title": "Why SMEs Keep Losing Good Candidates to Corporations",
    "b6.teaser": "SMEs can't out-pay corporations. They lose on process - and that's fixable.",
    "b7.cat": "Retention",
    "b7.title": "Silent Turnover - The Centurial Case",
    "b7.teaser": "The most expensive turnover is the kind that never files a resignation letter.",
    "b8.cat": "Hiring Cost",
    "b8.title": "One Bad Hire Can Cost Over 100 Million VND",
    "b8.teaser": "On paper it's just a few months of salary. In reality, the hidden costs are what drain an SME's cash flow.",
    "sig.b8": "<div class=\"post-stat\"><b>50–100M ₫</b><span>lost to a single poor hiring decision (InCorp Vietnam 2025)</span></div><div class=\"post-stat\"><b>15–35M ₫</b><span>hidden cost of ads, onboarding and training — before salary</span></div>",
    "body.b8": "      <p class=\"post-lead\">One bad hire can cost your business over 100 million VND — and that's not even the scariest part.</p>\n      <p>Picture this scenario: a local SME hires a Sales Executive on a salary of 15 million VND per month. Four months in, they quit.</p>\n      <p>On paper: 60 million VND in salary. In reality, it runs far higher:</p>\n      <ul>\n        <li>5–15 million VND in job ads and recruitment fees</li>\n        <li>10–20 million VND in onboarding and training</li>\n        <li>Weeks of lost output during probation</li>\n        <li>And a brand-new hiring cycle — same role, same urgency, higher frustration</li>\n      </ul>\n      <h2>The real number</h2>\n      <p>According to InCorp Vietnam (2025), one poor hiring decision can cost upwards of 50–100 million VND — enough to fund a key marketing push, open a satellite office, or hire two interns.</p>\n      <h2>For SMEs, it isn't just a cost</h2>\n      <p>For large companies, that's an operating expense they can absorb. For SMEs, it's direct damage to cash flow and day-to-day operations.</p>\n      <p>Getting it right the first time is always cheaper than doing it twice.</p>\n      <p><strong>Stop Rehiring. Start Growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>InCorp Vietnam (2025) — one poor hiring decision estimated at 50–100 million VND for businesses in Vietnam.</p></div>",
    "b9.cat": "Market",
    "b9.title": "SECC: Four Industries Converging — and the Talent Map Behind Them",
    "b9.teaser": "Three days, 700+ booths, exhibitors from 24+ countries. But the real signal wasn't the scale — it was the direction the market is moving.",
    "b9.caption": "SECC — Electric · Energy · Agriculture · Automation · Packaging",
    "sig.b9": "<div class=\"post-stat\"><b>700+</b><span>booths across three exhibition days</span></div><div class=\"post-stat\"><b>24+</b><span>countries represented among exhibitors</span></div><div class=\"post-stat\"><b>4</b><span>industries converging into one new value chain</span></div>",
    "body.b9": "      <p class=\"post-lead\">Last week, TopLead attended a field visit at SECC covering four international exhibitions running concurrently: Vietnam ETE, Greenergy Expo, ELECS Vietnam and Vietnam PFA (15–17 July 2026).</p>\n      <p>Three days. 700+ booths. Exhibitors from 24+ countries. But the real signal wasn't the scale — it was the direction the market is moving.</p>\n      <h2>Four industries converging into a new value chain for Vietnam</h2>\n      <ul>\n        <li>Electrical technology &amp; industrial electrification</li>\n        <li>Green energy &amp; energy-saving solutions</li>\n        <li>Food &amp; agricultural processing</li>\n        <li>Engineering &amp; manufacturing automation</li>\n      </ul>\n      <h2>A map of talent demand</h2>\n      <p>For TopLead, this wasn't just an industry visit. It was a map of where mid-level talent demand is expanding fastest: electrical engineers, energy operations specialists, agri-supply chain managers, automation technicians.</p>\n      <p>SMEs across these sectors all need one thing: the right people, at the right time.</p>\n      <h2>Understand the industry before recruiting for it</h2>\n      <p>That's why TopLead was there — to understand the industry before recruiting for it.</p>\n      <p><strong>Stop Rehiring. Start Growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">Event</span><p>Vietnam ETE, Greenergy Expo, ELECS Vietnam &amp; Vietnam PFA — SECC, Ho Chi Minh City, 15–17 July 2026.</p></div>",
    "sig.b1": "The accidental profession becomes intentional the moment its people realise influence beats authority.",
    "body.b1": "      <p class=\"post-lead\">Nobody grows up wanting to work in HR.</p>\n      <p>Children say doctor, pilot, footballer. Nobody says \"the person who builds the team.\" Yet research shows most HR professionals never planned this path - they fell into it, then refused to leave (SHRM 2025).</p>\n      <p>Why? What separates those who choose this work from those who dismiss it? The ones who walk away see cost. Paperwork, policies, the conversations nobody volunteers for. They want a clean ladder and a predictable title. Fair enough - but they mistake difficulty for insignificance.</p>\n      <p>The ones who stay see leverage. They know that 40% of HR professionals enter the field driven by organisational development, not obligation, and only 7% treat it as a paycheck (BambooHR 2026). They understand a single decision - who you hire, who you develop, who you keep - compounds across an entire company. Culture is the one asset competitors cannot copy, and 97% of HR leaders now treat it as their top priority (Gartner 2025).</p>\n      <p>That is the real divide. Not soft versus hard. Not safe versus risky. It is whether you see people as a cost to manage, or the engine of everything that follows.</p>\n      <p>So decide deliberately. The team you build will remember what you chose.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>BambooHR (2026) The Definitive Guide to HR Career Growth. &middot; Gartner (2025), cited in Compono (2025) Full Research: Latest HR &amp; Talent Statistics (2025). &middot; SHRM (2025) Breaking into HR Without Official Experience.</p></div>\n    ",
    "sig.b2": "Sustainability only means something when it costs you something to keep it.",
    "body.b2": "      <p class=\"post-lead\">I used to think sustainability was something you could prove. A project. A certificate. A handshake from someone who mattered. Then I realised I had it wrong from the start.</p>\n      <p>Sustainability isn't something you win in a competition. It's something you choose - quietly, consistently - in every decision that has no audience and no scorecard. And that realisation is exactly what shaped how I built my company. No upfront fee. No charge until the candidate passes probation. Payment only when the result is real - when the person placed actually fits, actually stays, actually contributes. Most in the industry avoid this model because it's uncomfortable. You carry the risk. You absorb the uncertainty. But that discomfort is precisely the point - because sustainability only means something when it costs you something to keep it.</p>\n      <p>Winning that contest didn't teach me what sustainability looks like on a certificate. It taught me what it has to look like in practice: every hire, every client, every decision that no one grades but you. The standard doesn't live on the wall. It lives in how you operate when no one is watching.</p>\n    ",
    "sig.b3": "<div class=\"post-stat\"><b>46%</b><span>of new hires fail within their first 18 months</span></div><div class=\"post-stat\"><b>82%</b><span>of hiring managers had already seen the signs (TriNet 2026)</span></div>",
    "body.b3": "      <p class=\"post-lead\">Anyone can perform for 30 minutes across a table. The question is who they are on day 60.</p>\n      <p>This is the gap that built TopLead's model from the ground up. No fee at placement. Payment only after the candidate clears probation - because that's when the hire is actually proven. The agency carries the risk until the result is real.</p>\n      <p>Most agencies won't offer this. Not because it's impossible, but because it demands something uncomfortable: skin in the game, long after the handshake. Accountability in recruitment isn't a policy. It's a position. It means your success is structurally tied to your client's - not separated from it the moment the contract is signed.</p>\n      <p>Companies lose 20% of new hires within the first 45 days (Reworked 2026). That number doesn't move until the people responsible for placing them are still responsible after the placement.</p>\n      <p>The probation period reveals everything the interview never could. The only question is whether your recruitment partner is still watching when it does.</p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>TriNet (2026) &middot; Reworked (2026) - 20% of new hires lost within the first 45 days.</p></div>\n    ",
    "sig.b4": "That's not a hiring problem. It's an incentive problem.",
    "body.b4": "      <p class=\"post-lead\">Hiring has never been cheap. The average cost per hire now exceeds $5,400, and filling a single non-executive role takes a median of 44 days (SHRM 2025).</p>\n      <p>Yet in many recruitment models, one side is rewarded the moment an offer is signed. The other only finds out weeks - or months - later whether the hiring decision actually paid off.</p>\n      <p>At the end of the day, every system produces the behaviour it rewards. If success is measured by placements, then expect more placements. If success is measured by successful hires, then every decision - from sourcing to screening to follow-up - will start looking completely different.</p>\n      <p>The best recruitment models don't just find candidates. They make accountability last as long as the hiring decision itself.</p>\n    ",
    "sig.b5": "Delay isn't caution. In today's market, it's forfeiture.",
    "body.b5": "      <p class=\"post-lead\">The most common reason talented people miss opportunities isn't a lack of skill - it's hesitation.</p>\n      <ul>\n        <li>The wait for the \"right moment.\"</li>\n        <li>The instinct to stay silent until they feel 100% ready.</li>\n        <li>The polite decision to follow up \"later.\"</li>\n      </ul>\n      <p>In today's competitive market, delay isn't just caution, it's even forfeiture. The candidates who get placed aren't always the strongest on paper. But definitely, they're the ones making the first move - who apply before they feel fully prepared, who speak up in interviews instead of waiting to be asked, who follow through instead of waiting to be chosen.</p>\n      <p>Employers can actually read that decisiveness clearly - they can see ownership, initiative, and drive in the person: the exact qualities that separate a good hire from a forgettable one. If you're a candidate, my advice is simple: stop waiting for the perfect moment because it doesn't exist. Put yourself forward, ask the bold question, and let your proactivity speak before your CV does.</p>\n      <p>At TopLead, we don't reward the loudest applications - we match attitude and skill with the right employer. However, we can only open the door when you are willing to walk through it.</p>\n    ",
    "sig.b6": "<div class=\"post-split-col\"><b>SME</b><span>89% can't match corporate salaries (Employment Hero 2024)</span></div><div class=\"post-split-vs\">vs</div><div class=\"post-split-col\"><b>Corporation</b><span>Winning on structure, not substance</span></div>",
    "body.b6": "      <p class=\"post-lead\">89% of SMEs cannot match corporate salaries (Employment Hero 2024), but salary isn't why they lose.</p>\n      <p>The real gap is process. The average time from posting to hire has reached 48 days - a 65% increase in just three years (BambooHR 2026). Meanwhile, top candidates are off the market within 10 days (Movement Search &amp; Delivery 2026).</p>\n      <p>And candidates notice: 42% withdraw from hiring processes simply because scheduling takes too long (iHire 2023). Another 93% of hiring managers themselves admit the process is slower than two years ago (Robert Half 2025).</p>\n      <p>Here's the irony: SMEs already have what today's candidates want:</p>\n      <ul>\n        <li>71% of workers say development opportunities drive job satisfaction (Gallup, cited in COSE 2025).</li>\n        <li>39% rank growth potential as their top factor (Yoh 2025). Smaller companies deliver both - faster promotions, broader exposure, direct leadership access.</li>\n      </ul>\n      <p>But most SMEs never articulate this. They post generic JDs, run slow pipelines, and lose candidates to companies that simply moved first.</p>\n      <h2>Three fixes for SMEs</h2>\n      <ul>\n        <li><strong>Sell the role.</strong> What exactly will the hire own? What will they build? What will they contribute? All of it should be clear in the JD.</li>\n        <li><strong>Compress your timeline.</strong> Two interview rounds. One week. A decisive offer. Show the growth path - just a clear answer to \"Where does this lead in 12 months?\"</li>\n        <li><strong>Compete on structure.</strong> Corporations aren't winning on substance. They're winning on structure.</li>\n      </ul>\n      <p>At TopLead, we help Vietnamese SMEs close that gap - matching the right candidates to professional roles in Sales, Marketing, Finance, HR, and Operations. We don't just send CVs. We make sure talent sees what makes your company worth joining.</p>\n    ",
    "sig.b7": "<div class=\"post-stat\"><b>24%</b><span>employee turnover in Vietnam, vs a ~10% ideal (Anphabe 2023)</span></div><div class=\"post-stat\"><b>$228-355M</b><span>lost each year to disengagement at a median S&amp;P 500 firm (McKinsey 2023)</span></div>",
    "body.b7": "      <p class=\"post-lead\">Most SME owners register turnover only at the point of resignation. By then, the loss is already old.</p>\n      <p>The real cost begins months earlier, when an employee is still present, still delivering the minimum, but has already disengaged. It is called silent turnover, and it does not appear on any attrition report until it is too late to prevent.</p>\n      <h2>Data and tracking</h2>\n      <p>Employee turnover in Vietnam has reached 24%, against an \"ideal\" rate of roughly 10% for a stable organization. The attrition runs highest in the exact functions SMEs rely on most: Marketing, Sales, IT, and Finance (Anphabe 2023). The disengagement that precedes it is even more costly than the exit itself. McKinsey estimates that a median-size S&amp;P 500 company loses between $228 million and $355 million annually to disengagement and attrition, with more than half of a typical workforce disengaged at any given time (McKinsey &amp; Company 2023).</p>\n      <h2>The root cause</h2>\n      <p>These exits are rarely about salary. They trace back to a mismatch at the point of hire - wrong person, wrong expectations, or wrong cultural fit. When a business hires in a rush to fill a vacancy, it does not solve the problem. It restarts the same loop, absorbing the cost of disengagement a second time.</p>\n      <h2>The implication for SMEs</h2>\n      <p>It is all about hiring accuracy at the first attempt. This is why TopLead screens both sides of the match, assessing candidates for the business and assessing the business for the candidate. When alignment is genuine on both ends, engagement starts high and holds, closing the gap where silent turnover takes root.</p>\n      <p><strong>Stop rehiring. Start growing.</strong></p>\n      <div class=\"post-refs\"><span class=\"post-refs-label\">References</span><p>Anphabe (2023), via Vietnam News / Staffing Industry Analysts - Vietnam turnover at 24% vs. 10% optimal; highest attrition in marketing, sales, IT, finance. &middot; McKinsey &amp; Company (2023), \"Some employees are destroying value. Others are building it.\"</p></div>\n    ",
    "about.story.title": "The TopLead Story",
    "about.story.p1": "TopLead began with a simple but difficult conviction: everyone deserves to belong exactly where they are needed, and every company deserves the right people.",
    "about.story.p2": "In a market where recruitment is usually measured by the number of CVs, we chose to measure real outcomes instead. That is why TopLead only charges once a candidate passes probation - carrying the risk alongside our clients, and screening both ways so the fit holds from day one.",
    "about.story.p3": "With experience across many industries (IT, Finance, FMCG, F&B, Real Estate, Construction…), the TopLead team does not just fill empty seats. We connect people to the right environment to grow, and help companies keep their best people longer.",
    "about.stat1": "Combined years of experience of the founding team",
    "about.stat2": "Specialised sectors",
    "about.stat3": "To first shortlist",
    "about.stat4": "Replacement guarantee",
    "partner.tag": "Your partner",
    "partner.title": "You have a good partner",
    "partner.subtitle": "Not a promise - the way we put skin in the game with you.",
    "partner.s1": "combined years of experience across our founding team",
    "partner.s2": "specialised industries: IT, Finance, FMCG, F&B, Real Estate, Construction",
    "partner.s3": "to send the first, pre-screened shortlist",
    "partner.s4": "upfront fee - you only pay after the candidate passes probation",
    "partner.v1.title": "Expert network",
    "partner.v1.desc": "Access to high-quality candidates across many industries.",
    "partner.v2.title": "Proactive search",
    "partner.v2.desc": "We don't wait for applications - we actively find and reach the right people.",
    "cta.services": "Find the right solution for you",
    "cta.pain": "Let TopLead solve it for you",
    "services.lead": "We don't just fill open roles - we match the right person to the right company.",
    "services.leadsub": "And we only charge once the hire stays past probation. The risk is ours; the result is yours.",
    "pain.lead": "Hundreds of CVs, tight deadlines, and the fear of hiring the wrong person.",
    "pain.leadsub": "TopLead gets you out of that mess - carefully screened, the right shortlist in 48 hours.",
    "serve.tag": "Who we serve",
    "serve.title": "Specialised in SMEs",
    "serve.desc": "TopLead partners with small and mid-sized businesses across Vietnam - where getting each hire right makes the biggest difference.",
    "philosophy.quote": "People aren't a cost - they're the engine of everything that follows.",
    "cine.caption": "Every right hire is a new chapter for your business.",
    "cine.eyebrow": "Our belief",
    "cine.cta": "See how we work",
    "phil.eyebrow": "Our philosophy",
    "phil.body": "We hire people who fit, stay, and grow - not just to fill a seat.",
    "phil.cta": "See how we work",
    "phil.caption": "Real people. Real businesses. Results that stay.",
    "pw.label": "Trusted by businesses across Vietnam",
    "pw.sub": "From SMEs to specialist firms - TopLead works alongside them on their hiring.",
    "pw.b1": "IT, systems integration (SI/ICT)",
    "pw.miso": "Food & beverage (F&B)",
    "pw.rmit": "Exclusive partner for candidate sourcing",
    "pw.tan": "Timber & furniture - hiring client",
    "pw.fit": "Gym, lifestyle & event hosting",
    "pw.supp": "Gym & health supplement products",
    "pw.xuanvinh": "Jewelry store chain",
    "pw.thadico": "Real estate & construction",
    "ab.cta.title": "Ready to find the right hire?",
    "ab.cta.subtitle": "Let TopLead work alongside you on your hiring",
    "ab.cta.button": "Get in touch",
    "svc.ind": "Industries we serve",
    "svc.why": "Why choose TopLead's services?",
    "svc.why1": "First shortlist within 48 hours",
    "svc.why2": "Rigorous screening steps",
    "svc.why3": "Months of free replacement",
    "svc.why4": "upfront fee",
    "svc.cta.title": "Need help choosing a service?",
    "svc.cta.sub": "Get in touch for a free consultation",
    "svc.cta.btn": "Contact us",
    "svc.indTag": "Industries",
    "ab.team.title": "Our founding team",
    "ab.team.sub": "The people who laid TopLead's foundation",
    "ab.why.title": "Why choose TopLead?",
    "ab.why.sub": "We understand recruitment is more than filling an empty seat",
    "ab.c1.t": "Quality first",
    "ab.c1.d": "Every candidate goes through a rigorous 5-step screening process.",
    "ab.c2.t": "Fast turnaround",
    "ab.c2.d": "A shortlist within 48 hours. Candidates ready to interview in the first week.",
    "ab.c3.t": "Replacement guarantee",
    "ab.c3.d": "Free replacement within 3 months if a hire isn't the right fit.",
    "ab.c4.t": "Broad network",
    "ab.c4.d": "Access to high-quality candidates across many industries.",
    "ab.c5.t": "24/7 support",
    "ab.c5.d": "Our advisory team is always ready to support you, anytime, anywhere.",
    "ab.c6.t": "Transparent pricing",
    "ab.c6.d": "Clear costs, no hidden fees. You only pay once the hire passes probation.",
    "ab.cl.title": "Clients & Partners",
    "ab.cl.sub": "Partnering with 120+ businesses across Vietnam",
    "tl.r1": "A complete checklist to evaluate candidates in interviews",
    "tl.r2": "Market salary report by industry and role",
    "tl.r3": "A standard job-description template to attract quality candidates",
    "tl.r4": "A guide to onboarding new hires effectively",
    "tl.r5": "A guide to building an attractive employer brand",
    "tl.r6": "Strategies to retain talent in a competitive market",
    "ct.name": "Full name *",
    "ct.emailco": "Company email *",
    "ct.phone": "Phone *",
    "ct.company": "Company name *",
    "ct.qty": "Number of hires",
    "ct.need": "Hiring needs",
    "ct.email": "Email *",
    "ct.qtysel": "Select a number...",
    "ct.q1": "1-4 people",
    "ct.q2": "5-9 people",
    "ct.q3": "10-19 people",
    "ct.q4": "20+ people",
    "ct.i.addr": "Address",
    "ct.i.phone": "Phone",
    "ct.i.hours": "Working hours",
    "ct.h1": "Mon-Fri: 8:30 - 18:00",
    "ct.h2": "Sat: 8:30 - 12:00",
    "ap.t1": "Post and wait for applicants",
    "ap.t1d": "Wait for CVs to arrive; no proactive search",
    "ap.t2": "Surface-level filtering",
    "ap.t2d": "CVs filtered by keywords, with no deep assessment",
    "ap.t3": "No reference checks",
    "ap.t3d": "Rarely verifies real background",
    "ap.t4": "No guarantee",
    "ap.t4d": "No support if the hire leaves early",
    "ap.t5": "Slow",
    "ap.t5d": "Takes 2-3 months to fill a role",
    "ap.l1": "Proactive search",
    "ap.l1d": "Actively reach high-potential candidates",
    "ap.l2": "5-step screening",
    "ap.l2d": "Guardian Screen Process with 5 rounds of checks",
    "ap.l3": "Deep reference check",
    "ap.l3d": "Check 3+ references before presenting",
    "ap.l4": "Clear guarantee",
    "ap.l4d": "Free replacement within 3 months",
    "ap.l5": "Fast - 48h",
    "ap.l5d": "Shortlist in 48 hours; interviews in the first week",
    "ap.s1": "Understand your needs, culture, and detailed requirements",
    "ap.s2": "Proactively find and reach suitable candidates",
    "ap.s3": "Apply the Guardian Screen Process - 5-step screening",
    "ap.s4": "Send the top 3-5 screened profiles within 48 hours",
    "ap.s5": "Help coordinate interviews and feedback",
    "ap.s6": "Onboarding support and a 3-month guarantee",
    "ap.tradTitle": "Traditional Recruitment",
    "ap.step1": "Consultation",
    "ap.step2": "Sourcing",
    "ap.step3": "Screening",
    "ap.step4": "Presentation",
    "ap.step5": "Interview",
    "ap.step6": "Placement",
    "jr.tag": "The Journey",
    "cmp.title": "The usual way, and ours",
    "cmp.sub": "The same role to fill, two ways of working - the difference is in the details.",
    "cmp.trad": "Traditional recruitment",
    "cmp.tl": "TopLead Recruitment Co. Ltd.",
    "cmp.hint": "Drag back to the middle to compare",
    "ap.t1.x": "You get whatever applies - quality you cannot control, on a timeline you cannot predict.",
    "ap.t2.x": "Keyword filters miss strong people who word things differently, and keep people who write CVs for the parser.",
    "ap.t3.x": "One reference call for form's sake - usually a referee the candidate picked, so it tells you little.",
    "ap.t4.x": "The hire leaves after two weeks? That is your problem now. The fee was collected.",
    "ap.t5.x": "Posting to signed offer usually runs 45-90 days. The longer the seat stays empty, the higher the hidden cost.",
    "ap.l1.x": "We go to them: our database, referral network, and direct headhunting on LinkedIn.",
    "ap.l2.x": "Five real layers: skills, screening interview, culture, references, final panel. Eighty candidates become three.",
    "ap.l3.x": "At least three references, chosen by us - on performance, work ethic, and the real reason they left.",
    "ap.l4.x": "Ninety days of active follow-up. Not the right fit within three months and we replace them, at no extra cost.",
    "ap.l5.x": "A shortlist of 3-5 within the first 48 hours. Interviews in week one. Filled in two to four weeks on average.",
    "tst.all": "See all reviews on Google",
    "cmp.cta": "Want the process in detail? Keep scrolling - or",
    "cmp.ctaLink": "get in touch",
    "jr.meet": "The meeting point",
    "ex.more": "See the detail",
    "ex.g.l1": "Layer 1: Skills & experience",
    "ex.g.l1d": "Hard skills, years of experience, industry relevance, career trajectory",
    "ex.g.l2": "Layer 2: Screening interview",
    "ex.g.l2d": "Communication, motivation, salary expectation alignment, availability",
    "ex.g.l3": "Layer 3: Culture & team fit",
    "ex.g.l3d": "Working style, management preference, values aligned with the client's culture",
    "ex.g.l4": "Layer 4: Reference verification",
    "ex.g.l4d": "3+ reference calls - performance history, work ethic, reason for leaving",
    "ex.g.l5": "Layer 5: Final review & shortlist",
    "ex.g.l5d": "The TopLead panel reviews every file and picks the top 3 for the client",
    "ex.g.note": "Only about 4% of candidates clear the whole Guardian Screen",
    "ex.t.cap": "We say it straight from the start, even when it is not what the client wants to hear.",
    "ex.t.p1": "Honesty",
    "ex.t.p1d": "If the JD does not add up, we say so. If nobody exists at that salary, we say so. We do not promise to win the deal - TopLead turns work down when we know we cannot deliver.",
    "ex.t.p2": "Accountability",
    "ex.t.p2d": "Every placement has one named owner, not a \"team\". Proactive follow-ups at day 30, 60 and 90. If we get it wrong, we fix it and carry the cost.",
    "ex.t.p3": "Partnership",
    "ex.t.p3d": "Not a CV vendor - a partner working the hiring problem with you. JD advice, salary benchmarking, onboarding support, and we stay on after the placement closes.",
    "ex.gr.m1": "Performance review call",
    "ex.gr.m1d": "How well the hire has settled in so far",
    "ex.gr.m2": "Mid-point check-in",
    "ex.gr.m2d": "Track progress and catch problems while they are still small",
    "ex.gr.m3": "Full evaluation",
    "ex.gr.m3d": "A complete review, closing the guarantee period",
    "ex.gr.note": "Within 90 days, if the hire is not right, TopLead replaces them free of charge.",
    "jr.title": "Our 6-step recruitment process",
    "jr.sub": "From the first brief to the end of the guarantee period",
    "jr.youGet": "What you get",
    "jr.time1": "Day 1",
    "jr.time2": "Day 2-5",
    "jr.time3": "Day 3-7",
    "jr.time4": "Day 5-7",
    "jr.time5": "Week 2",
    "jr.time6": "Month 1-3",
    "jr.dl1": "Brief document - need, budget, timeline, culture",
    "jr.dl2": "Long list of 15-25 potential candidates",
    "jr.dl3": "Guardian Screen results - pass/fail detail at every layer",
    "jr.dl4": "A shortlist of 3-5 CVs within 48 hours",
    "jr.dl5": "Interview coordination + feedback report",
    "jr.dl6": "Offer support + onboarding + 3-month guarantee",
    "ex.g.role": "Entry filter - who gets onto the path",
    "ex.g.sub": "A five-layer screening process",
    "ex.g.summary": "Of 80 candidates sourced, 3 reach the client - roughly 4% clear all five layers.",
    "ex.t.role": "Alignment - keeping both sides pointed the same way",
    "ex.t.sub": "Three pillars of commitment",
    "ex.t.summary": "Honesty, Accountability and Partnership - three things TopLead holds to even when they cost us the deal.",
    "ex.gr.role": "Protection - keeping the match sound after it is made",
    "ex.gr.sub": "A three-month guarantee",
    "ex.gr.summary": "Check-ins at day 30, 60 and 90. Within 90 days, if the hire is not right, TopLead replaces them at no cost.",
    "ap.w1": "Step 1: Brief",
    "ap.w1d": "A call to understand the JD, budget, timeline, and company culture",
    "ap.w2": "Step 2: Search",
    "ap.w2d": "Database + proactive search + headhunting",
    "ap.w3": "Step 3: Screen",
    "ap.w3d": "Guardian Screen - 5-step filtering",
    "ap.w4": "Step 4: Present",
    "ap.w4d": "Send CVs + interview notes within 48h",
    "ap.w5": "Step 5: Interview",
    "ap.w5d": "Coordinate + feedback loop",
    "ap.w6": "Step 6: Close",
    "ap.w6d": "Offer + onboarding + guarantee",
    "ap.q1": "“I'm really happy with TopLead's advisory service. The team is professional and dedicated, with genuinely useful advice for my career path. Truly trustworthy!”",
    "ap.q2": "“Even after I started the job, the agency kept checking in and supporting me throughout probation.”",
    "ap.q3": "“I landed a job through TopLead - so did Cường and Quân. Hiếu will get there too!”",
    "ap.q4": "Fast, effective and cost-efficient recruitment. Their fees sit right in line with the market.",
    "ap.q5": "TopLead works professionally and with real care. Roles get filled quickly, at the quality they promised.",
    "ap.q6": "Every candidate TopLead sent us was strong. Scheduling was quick and tidy, saving time on both sides.",
    "chip.fin": "Finance",
    "chip.re": "Real Estate",
    "chip.con": "Construction",
    "pain.ticker": "You're...",
    "ct.submitEmp": "Send request",
    "post.readmore": "Read more →"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.remove("no-js");
  // Hero Particles Animation
  initHeroParticles();

  // Hero Slider - runs automatically (IIFE)

  // Hero Text Reveal Animation
  initHeroTextReveal();

  // Pain Point Ticker Animation
  initPainTicker();

  // Stats Counter Animation
  initStatsCounter();

  // Testimonials Parallax
  initTestimonialsParallax();

  // Magnetic Button
  initMagneticButton();
  // Language Switcher
  var langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var lang = this.getAttribute("data-lang");
      if (lang === currentLang) return;
      currentLang = lang;
      langBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      updateLanguage(lang);
      localStorage.setItem("toplead-lang", lang);
    });
  });

  var savedLang = localStorage.getItem("toplead-lang");
  if (savedLang) {
    currentLang = savedLang;
    langBtns.forEach(function(b) {
      if (b.getAttribute("data-lang") === savedLang) b.classList.add("active");
      else b.classList.remove("active");
    });
  }
  // Always apply the active language on load (default "vi"). Without this, a
  // first-time visitor with no saved preference saw the raw HTML defaults -
  // which are English on many elements - so the page read as mixed VI/EN.
  updateLanguage(currentLang);

  function updateLanguage(lang) {
    var t = translations[lang];
    // Translate text content
    var els = document.querySelectorAll("[data-i18n]");
    els.forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });
    // Translate placeholders
    var placeholderEls = document.querySelectorAll("[data-i18n-placeholder]");
    placeholderEls.forEach(function(el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });
    // Translate aria-labels (icon-only controls have no text to translate)
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    ariaEls.forEach(function(el) {
      var key = el.getAttribute("data-i18n-aria");
      if (t[key] !== undefined) {
        el.setAttribute("aria-label", t[key]);
      }
    });
    // Translate select options
    var optionEls = document.querySelectorAll("option[data-i18n]");
    optionEls.forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.title = lang === "vi"
      ? "TopLead Recruitment - Tuyển dụng uy tín hàng đầu"
      : "TopLead Recruitment - Premier Executive Search";
  }

  // Exposed for jobs.js. Job cards are built from jobs.json after this has
  // already run once, so their data-i18n spans need a second pass; the function
  // is declared inside this block and is otherwise unreachable from another file.
  window.updateLanguage = updateLanguage;

  // Navbar scroll
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // Mobile menu
  var mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  var navLinks = document.querySelector(".nav-links");
  if (mobileMenuBtn && navLinks) {
    // The open menu scrolls itself; freeze the page behind it so a swipe does
    // not drag the content around underneath.
    function sizeMenu() {
      if (!navLinks.classList.contains("active")) return;
      // Fill exactly the space under the bar, so the last item is always
      // reachable by scrolling the panel itself.
      var bar = navbar ? navbar.offsetHeight : 0;
      navLinks.style.maxHeight = (window.innerHeight - bar) + "px";
    }

    function setMenu(open) {
      navLinks.classList.toggle("active", open);
      mobileMenuBtn.classList.toggle("active", open);
      document.body.classList.toggle("nav-open", open);
      if (open) sizeMenu();
      else navLinks.style.maxHeight = "";
    }

    window.addEventListener("resize", sizeMenu);

    mobileMenuBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      setMenu(!navLinks.classList.contains("active"));
    });
    // Close on click outside the menu
    document.addEventListener("click", function(e) {
      if (navLinks.classList.contains("active") &&
          !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        setMenu(false);
      }
    });
    // Close on Escape
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        setMenu(false);
      }
    });
    // Close after picking a destination - same-page anchors would otherwise
    // scroll away with the menu still covering the screen. A dropdown trigger
    // is not a destination on its first tap: it opens its own list, so closing
    // the panel here would shut the menu the moment it expanded.
    navLinks.addEventListener("click", function(e) {
      var a = e.target.closest("a");
      if (!a || a.classList.contains("nav-dropdown-trigger")) return;
      setMenu(false);
    });
    // Leaving the mobile breakpoint must not strand the page with scroll locked.
    window.matchMedia("(min-width: 1200px)").addEventListener("change", function(ev) {
      if (ev.matches) setMenu(false);
    });
  }

  // Autoplaying footage is the one thing reduced-motion most clearly rules out.
  // Hold the poster frame instead of the loop.
  (function respectReducedMotionVideo() {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("video[autoplay]").forEach(function (v) {
      v.removeAttribute("autoplay");
      v.removeAttribute("loop");
      try { v.pause(); } catch (e) { /* nothing playing yet */ }
    });
  })();

  // Nav dropdowns open on click, not on hover.
  // The trigger is also a real link to its own page, so: the first click opens
  // the list, and a second click on an already-open trigger follows the link.
  (function initNavDropdowns() {
    var dropdowns = Array.prototype.slice.call(document.querySelectorAll(".nav-dropdown"));
    if (!dropdowns.length) return;

    function closeAll(except) {
      dropdowns.forEach(function (dd) {
        if (dd === except) return;
        dd.classList.remove("is-open");
        var t = dd.querySelector(".nav-dropdown-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      });
    }

    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector(".nav-dropdown-trigger");
      if (!trigger) return;
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");

      trigger.addEventListener("click", function (e) {
        if (dd.classList.contains("is-open")) return;   // let the link through
        e.preventDefault();
        closeAll(dd);
        dd.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-dropdown")) closeAll();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAll();
    });
  })();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
      var href = this.getAttribute("href");
      // Only prevent default for same-page anchors
      if (href && href.startsWith("#")) {
        e.preventDefault();
        // Bare "#" links (e.g. dropdown triggers) have no target - just stop the jump
        if (href.length === 1) return;
        var target = document.querySelector(href);
        if (target) {
          // getBoundingClientRect, not offsetTop. offsetTop is measured from the
          // nearest positioned ancestor, so any target inside a position:relative
          // wrapper reported a near-zero offset and the page never moved - which
          // is what killed the hero scroll cue on the approach page, where the
          // sections sit inside .cv-band.
          var y = target.getBoundingClientRect().top + window.pageYOffset - 80;
          // Honour the reader's motion setting: a long smooth scroll is exactly
          // the kind of movement prefers-reduced-motion is meant to suppress.
          var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: Math.max(0, y), behavior: reduce ? "auto" : "smooth" });
          navLinks.classList.remove("active");
          if (mobileMenuBtn) mobileMenuBtn.classList.remove("active");
        }
      }
    });
  });

  // Handle anchor links from other pages (e.g., about.html#story)
  if (window.location.hash) {
    setTimeout(function() {
      var target = document.querySelector(window.location.hash);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
      }
    }, 100);
  }

  // Scroll animations
  var scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Elements to animate với stagger classes
  var animateSelectors = [
    { selector: '.section-header', stagger: 0 },
    { selector: '.value-card', stagger: true },
    { selector: '.service-card', stagger: true },
    { selector: '.job-card', stagger: true },
    { selector: '.founder-card', stagger: true },
    { selector: '.stats-card', stagger: true },
    { selector: '.pain-card', stagger: true }
    // .logo-item is deliberately absent. It lives inside an infinite marquee, so
    // an entrance reveal fights the loop: the strip is clipped by overflow,
    // items outside it never intersect, and any that never fire stay at
    // opacity 0 forever. A marquee should simply be visible.
  ];

  animateSelectors.forEach(function(item) {
    var elements = document.querySelectorAll(item.selector);
    elements.forEach(function(el, index) {
      el.classList.add('animate-on-scroll');
      if (item.stagger && index < 4) {
        el.classList.add('stagger-' + (index + 1));
      }
      scrollObserver.observe(el);
    });
  });

  // NOTE: The previous whole-<section> opacity:0 → reveal observer was removed.
  // It double-animated with the `.animate-on-scroll` system below, set inline
  // transforms on every section (creating stacking/containing-block side effects),
  // and risked leaving content hidden if the observer failed. Section children
  // already reveal via `.animate-on-scroll`.

  console.log("TopLead Website loaded với animations");

  // Form tabs
  var tabBtns = document.querySelectorAll(".tab-btn");
  var employerFields = document.querySelector(".employer-fields");
  var candidateFields = document.querySelector(".candidate-fields");

  tabBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      tabBtns.forEach(function(b) { b.classList.remove("active"); });
      this.classList.add("active");
      var tab = this.getAttribute("data-tab");
      if (tab === "employer") {
        if (employerFields) employerFields.style.display = "block";
        if (candidateFields) candidateFields.style.display = "none";
      } else {
        if (employerFields) employerFields.style.display = "none";
        if (candidateFields) candidateFields.style.display = "block";
      }
    });
  });

  // File upload
  var cvUpload = document.getElementById("cvUpload");
  var cvFileInput = document.getElementById("cvFile");
  var cvPreview = document.getElementById("cvPreview");
  var cvFileNameEl = document.getElementById("cvFileName");
  var removeCvBtn = document.getElementById("removeCv");

  if (cvUpload && cvFileInput) {
    cvUpload.addEventListener("click", function() { cvFileInput.click(); });
    cvFileInput.addEventListener("change", function() { handleFile(this.files); });

    cvUpload.addEventListener("dragover", function(e) { e.preventDefault(); this.classList.add("dragover"); });
    cvUpload.addEventListener("dragleave", function(e) { e.preventDefault(); this.classList.remove("dragover"); });
    cvUpload.addEventListener("drop", function(e) {
      e.preventDefault();
      this.classList.remove("dragover");
      handleFile(e.dataTransfer.files);
    });

    if (removeCvBtn) {
      removeCvBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        cvFileInput.value = "";
        cvPreview.style.display = "none";
        cvUpload.style.display = "block";
      });
    }
  }

  function handleFile(files) {
    if (files.length > 0) {
      var file = files[0];
      var allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (allowedTypes.indexOf(file.type) === -1) {
        alert(currentLang === "vi" ? "Vui lòng chọn file PDF, DOC, hoặc DOCX" : "Please select PDF, DOC, or DOCX file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(currentLang === "vi" ? "File quá lớn. Tối đa 5MB" : "File too large. Max 5MB");
        return;
      }
      cvFileNameEl.textContent = file.name;
      cvPreview.style.display = "flex";
      cvUpload.style.display = "none";
    }
  }

  // Contact form
  var contactForm = document.getElementById("contactForm");
  var formSuccess = document.getElementById("formSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var data = {};
      new FormData(this).forEach(function(v, k) { data[k] = v; });
      var activeTab = document.querySelector(".tab-btn.active");
      data.type = activeTab ? activeTab.getAttribute("data-tab") : "candidate";

      if (!validateForm(data)) return;

      var submitBtn = this.querySelector(".btn-submit");
      var origText = submitBtn.innerHTML;
      submitBtn.innerHTML = "<span>" + (currentLang === "vi" ? "Đang gửi..." : "Submitting...") + "</span>";
      submitBtn.disabled = true;

      setTimeout(function() {
        contactForm.style.display = "none";
        formSuccess.style.display = "block";
        contactForm.reset();
        if (cvPreview) cvPreview.style.display = "none";
        if (cvUpload) cvUpload.style.display = "block";
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
        setTimeout(function() {
          formSuccess.style.display = "none";
          contactForm.style.display = "block";
        }, 5000);
      }, 1500);
    });
  }

  function validateForm(data) {
    if (!data.name || data.name.trim().length < 2) {
      showError("name", currentLang === "vi" ? "Nhập họ tên (ít nhất 2 ký tự)" : "Enter name (at least 2 chars)");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showError("email", currentLang === "vi" ? "Email không hợp lệ" : "Invalid email");
      return false;
    }
    if (!data.phone || data.phone.trim().length < 10) {
      showError("phone", currentLang === "vi" ? "Nhập số điện thoại" : "Enter phone number");
      return false;
    }
    if (data.type === "employer") {
      if (!data.company || !data.company.trim()) {
        showError("company", currentLang === "vi" ? "Nhập tên công ty" : "Enter company name");
        return false;
      }
      if (!data.position || !data.position.trim()) {
        showError("position", currentLang === "vi" ? "Nhập vị trí cần tuyển" : "Enter position to hire");
        return false;
      }
      if (!data.quantity || data.quantity < 1) {
        showError("quantity", currentLang === "vi" ? "Nhập số lượng" : "Enter quantity");
        return false;
      }
    }
    return true;
  }

  function showError(fieldId, msg) {
    var field = document.getElementById(fieldId);
    if (!field) return;
    field.classList.add("error");
    var parent = field.parentNode;
    var err = parent.querySelector(".error-msg");
    if (!err) {
      err = document.createElement("div");
      err.className = "error-msg";
      err.style.cssText = "color:#ff6b6b;font-size:0.8rem;margin-top:4px;";
      parent.appendChild(err);
    }
    err.textContent = msg;
    field.addEventListener("input", function handler() {
      field.classList.remove("error");
      if (err.parentNode) err.remove();
      field.removeEventListener("input", handler);
    });
    field.focus();
  }

  // Carousel dots (only run if such a carousel exists on the page)
  var dots = document.querySelectorAll(".carousel-dots .dot");
  if (dots.length) {
    var slide = 0;
    setInterval(function() {
      slide = (slide + 1) % dots.length;
      dots.forEach(function(d, i) {
        if (i === slide) d.classList.add("active");
        else d.classList.remove("active");
      });
    }, 5000);
  }

  // Stat counters: numbers roll up the first time they scroll into view.
  // The text is parsed in place ("120+" -> prefix "", value 120, suffix "+"),
  // so the markup and the translations stay the only source of the numbers.
  (function initCounters() {
    var stats = document.querySelectorAll(".stat-number");
    if (!stats.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)) return;

    function run(el) {
      var raw = el.textContent.trim();
      var m = raw.match(/^(\D*?)([\d.,]+)(.*)$/);
      if (!m) return;
      var target = parseFloat(m[2].replace(/,/g, ""));
      if (isNaN(target)) return;
      var decimals = (m[2].split(".")[1] || "").length;
      var pre = m[1], post = m[3];
      var started = null, DURATION = 1400;

      function frame(now) {
        if (started === null) started = now;
        var t = Math.min((now - started) / DURATION, 1);
        var eased = 1 - Math.pow(1 - t, 3);   // ease-out: fast, then settles
        el.textContent = pre + (target * eased).toFixed(decimals) + post;
        if (t < 1) requestAnimationFrame(frame);
        else el.textContent = raw;            // land exactly on the original
      }
      requestAnimationFrame(frame);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);              // count once, not on every pass
        run(en.target);
      });
    }, { threshold: 0.6 });

    stats.forEach(function (el) { io.observe(el); });
  })();

  // Comparison divider. The rows carry the full comparison as plain text, so
  // this only shifts emphasis between the two sides - nothing is hidden by it.
  (function initCompare() {
    var stage = document.getElementById("cmpStage");
    var divider = document.getElementById("cmpDivider");
    if (!stage || !divider) return;

    var SNAP = [25, 50, 75], TOL = 4;
    var pct = 50, dragging = false;

    function apply(v, snap) {
      if (snap) {
        for (var i = 0; i < SNAP.length; i++) {
          if (Math.abs(v - SNAP[i]) <= TOL) { v = SNAP[i]; break; }
        }
      }
      pct = Math.min(100, Math.max(0, v));
      stage.style.setProperty("--split", pct + "%");
      divider.setAttribute("aria-valuenow", Math.round(pct));
      divider.setAttribute("aria-valuetext", Math.round(pct) + "%");

      // Past 60% one way or 40% the other, that side earns its detail. This is
      // what makes dragging worth doing rather than a decorative wipe.
      var reveal = pct > 60 ? "tl" : (pct < 40 ? "trad" : "");
      if (reveal) stage.setAttribute("data-reveal", reveal);
      else stage.removeAttribute("data-reveal");
      if (pct > 85 || pct < 15) stage.setAttribute("data-edge", "1");
      else stage.removeAttribute("data-edge");
    }

    function fromEvent(e) {
      var r = stage.getBoundingClientRect();
      return r.width ? ((e.clientX - r.left) / r.width) * 100 : pct;
    }

    divider.addEventListener("pointerdown", function (e) {
      dragging = true;
      divider.setPointerCapture(e.pointerId);
      divider.style.willChange = "left";
      e.preventDefault();
    });
    divider.addEventListener("pointermove", function (e) {
      if (dragging) apply(fromEvent(e), false);
    });
    function end(e) {
      if (!dragging) return;
      dragging = false;
      try { divider.releasePointerCapture(e.pointerId); } catch (err) {}
      divider.style.willChange = "";
      apply(pct, true);
    }
    divider.addEventListener("pointerup", end);
    divider.addEventListener("pointercancel", end);

    divider.addEventListener("keydown", function (e) {
      var step = e.shiftKey ? 10 : 5;
      if (e.key === "ArrowLeft") { apply(pct - step, false); e.preventDefault(); }
      else if (e.key === "ArrowRight") { apply(pct + step, false); e.preventDefault(); }
      else if (e.key === "Home") { apply(0, false); e.preventDefault(); }
      else if (e.key === "End") { apply(100, false); e.preventDefault(); }
    });

    apply(50, false);
  })();

  // The three safeguards. One card open at a time; the panel is a real
  // [hidden] region so nothing collapsed is reachable by tab or read out.
  (function initVaults() {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".ex-card"));
    if (!cards.length) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // `hidden` is what keeps a collapsed panel out of the tab order and off the
    // screen reader, but it cannot be transitioned - so height is animated and
    // `hidden` is applied only once the collapse has finished.
    function close(card) {
      var panel = card.querySelector(".ex-panel");
      var toggle = card.querySelector(".ex-toggle");
      if (!panel || !toggle || panel.hidden) return;
      card.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      clearTimeout(panel._settle);
      if (reduce) { panel.hidden = true; panel.style.height = ""; return; }
      panel.style.height = panel.scrollHeight + "px";
      panel.offsetHeight;                       // commit that height first
      panel.style.height = "0px";
      // A timer rather than transitionend. If transitions are off - a user
      // stylesheet, a browser setting - or the height does not actually
      // change, transitionend never fires and the panel stays stuck open.
      panel._settle = setTimeout(function () {
        panel.hidden = true;
        panel.style.height = "";
      }, 460);
    }

    function open(card) {
      cards.forEach(function (c) { if (c !== card) close(c); });
      var panel = card.querySelector(".ex-panel");
      var toggle = card.querySelector(".ex-toggle");
      if (!panel || !toggle) return;
      card.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      clearTimeout(panel._settle);
      if (reduce) return;
      panel.style.height = "0px";
      panel.offsetHeight;
      panel.style.height = panel.scrollHeight + "px";
      panel._settle = setTimeout(function () {
        panel.style.height = "auto";            // let it grow if content reflows
      }, 460);
      // INT-05: move the reader into what they just opened
      var cb = panel.querySelector('.ex-close');
      if (cb) cb.focus({ preventScroll: true });
    }

    cards.forEach(function (card) {
      var toggle = card.querySelector(".ex-toggle");
      var closeBtn = card.querySelector(".ex-close");
      if (toggle) {
        toggle.addEventListener("click", function () {
          if (card.classList.contains("is-open")) close(card);
          else open(card);
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          close(card);
          if (toggle) toggle.focus();   // never strand focus inside a hidden region
        });
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var openCard = cards.filter(function (c) { return c.classList.contains("is-open"); })[0];
      if (!openCard) return;
      close(openCard);
      var t = openCard.querySelector(".ex-toggle");
      if (t) t.focus();
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest(".ex-card")) return;
      cards.forEach(close);
    });
  })();

  // Entrance reveals, scroll progress and back-to-top. All three are additive:
  // with scripting off the CSS already leaves everything visible.
  (function initApproachChrome() {
    if (!document.querySelector(".cv")) return;

    // VIS-11: sections arrive as the reader reaches them
    var targets = document.querySelectorAll(".cv .section-header, .cmp-row, .ex-card, .jr-step");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.classList.add("in-view");
          io.unobserve(en.target);          // reveal once, then stop watching
        });
      }, { threshold: 0.15 });
      targets.forEach(function (t) { io.observe(t); });
    } else {
      targets.forEach(function (t) { t.classList.add("in-view"); });
    }

    // FEAT-02: a thin read-position bar, so a long page still has a horizon
    var bar = document.createElement("div");
    bar.className = "read-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        var p = max > 0 ? window.scrollY / max : 0;
        bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();

  // Back to top, on every page. Built in script rather than written into all
  // fourteen HTML files, so there is one copy to change and no page can drift
  // out of sync. Hidden until the reader is a screenful down, so it never sits
  // over the hero.
  (function initBackToTop() {
    if (document.querySelector(".to-top")) return;   // never stack two

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("data-i18n-aria", "ui.toTop");
    var dict = translations[document.documentElement.lang] || translations[currentLang] || translations.vi;
    btn.setAttribute("aria-label", (dict && dict["ui.toTop"]) || "Lên đầu trang");
    // Two identical arrows stacked in a clipped window. On hover the stack
    // slides up exactly one step, so the first arrow flies out of the top while
    // the second arrives from below - one arrow chasing the next, endlessly.
    var arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    btn.innerHTML = '<span class="tt-arrows" aria-hidden="true"><span class="tt-stack">' + arrow + arrow + '</span></span>';
    btn.addEventListener("click", function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
    document.body.appendChild(btn);

    // Toggled straight from the scroll handler rather than inside a
    // requestAnimationFrame. It is one class change, so the rAF batching bought
    // nothing, and when rAF is throttled - background tab, battery saver - the
    // deferred callback never runs and the button stays invisible for good.
    function onScroll() {
      btn.classList.toggle("is-on", window.scrollY > window.innerHeight * 0.9);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();

  // Philosophy panel: four photos cross-fading in slow rotation, so the
  // section reads as a slice of real consultations rather than one staged
  // shot. Autoplays, pauses on hover/focus and while off screen.
  (function initPhilCarousel() {
    var root = document.querySelector(".phil-carousel");
    if (!root) return;
    var slides = Array.prototype.slice.call(root.querySelectorAll(".phil-slide"));
    var dotsBox = root.querySelector(".phil-dots");
    var n = slides.length;
    if (n < 2) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var index = 0, timer = null, paused = false;
    var AUTOPLAY = parseInt(root.getAttribute("data-autoplay"), 10) || 4600;

    var dots = slides.map(function (_, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "phil-dot";
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Ảnh " + (i + 1) + " / " + n);
      d.addEventListener("click", function () { go(i); restart(); });
      dotsBox.appendChild(d);
      return d;
    });

    function go(i) {
      index = ((i % n) + n) % n;
      slides.forEach(function (s, j) { s.classList.toggle("is-active", j === index); });
      dots.forEach(function (d, j) { d.classList.toggle("is-active", j === index); });
    }
    function next() { go(index + 1); }

    function restart() {
      if (timer) clearInterval(timer);
      if (reduce) return;
      timer = setInterval(function () { if (!paused) next(); }, AUTOPLAY);
    }

    root.addEventListener("pointerenter", function () { paused = true; });
    root.addEventListener("pointerleave", function () { paused = false; });
    root.addEventListener("focusin", function () { paused = true; });
    root.addEventListener("focusout", function () { paused = false; });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        paused = !entries[0].isIntersecting;
      }, { threshold: 0.2 }).observe(root);
    }

    go(0);
    restart();
  })();

  // Why Choose TopLead: a circular carousel. The active card sits centred and
  // full size; the others step outwards, shrinking and fading, and the ends
  // wrap around so there is no first or last.
  (function initWhyCarousel() {
    var root = document.querySelector(".why-carousel");
    if (!root) return;
    var stage = root.querySelector(".why-stage");
    var cards = Array.prototype.slice.call(root.querySelectorAll(".why-card"));
    var dotsBox = root.querySelector(".why-dots");
    var n = cards.length;
    if (n < 2) return;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var index = 0, timer = null, paused = false;
    var AUTOPLAY = parseInt(root.getAttribute("data-autoplay"), 10) || 4200;

    var dots = cards.map(function (_, i) {
      var d = document.createElement("button");
      d.type = "button";
      d.className = "why-dot";
      d.setAttribute("role", "tab");
      d.setAttribute("aria-label", "Mục " + (i + 1) + " / " + n);
      d.addEventListener("click", function () { go(i); restart(); });
      dotsBox.appendChild(d);
      return d;
    });

    // Shortest way round the loop: for 6 cards, offset stays within -3..+3 so
    // a card near the end travels left rather than all the way back.
    function offsetOf(i) {
      var d = i - index;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      return d;
    }

    function layout() {
      var w = cards[0].offsetWidth || 320;
      var step = Math.min(w * 0.58, stage.offsetWidth * 0.34);
      cards.forEach(function (card, i) {
        var o = offsetOf(i);
        var far = Math.abs(o);
        var scale = Math.max(1 - far * 0.16, 0.62);
        var opacity = far === 0 ? 1 : Math.max(0.55 - (far - 1) * 0.18, 0.12);
        card.style.transform =
          "translate(-50%, -50%) translateX(" + (o * step) + "px) scale(" + scale + ")";
        card.style.opacity = opacity;
        card.style.zIndex = String(n - far);
        card.classList.toggle("is-active", far === 0);
        card.setAttribute("aria-hidden", far === 0 ? "false" : "true");
        dots[i].classList.toggle("is-active", far === 0);
      });
    }

    function go(i) {
      index = ((i % n) + n) % n;
      layout();
    }
    function next() { go(index + 1); }
    function prev() { go(index - 1); }

    function restart() {
      if (timer) clearInterval(timer);
      if (reduce) return;
      timer = setInterval(function () { if (!paused) next(); }, AUTOPLAY);
    }

    root.querySelector(".why-next").addEventListener("click", function () { next(); restart(); });
    root.querySelector(".why-prev").addEventListener("click", function () { prev(); restart(); });

    // Autoplay would otherwise slide the card away mid-sentence.
    root.addEventListener("pointerenter", function () { paused = true; });
    root.addEventListener("pointerleave", function () { paused = false; });
    root.addEventListener("focusin", function () { paused = true; });
    root.addEventListener("focusout", function () { paused = false; });

    // Drag / swipe.
    var startX = null, dragged = false;
    stage.addEventListener("pointerdown", function (e) {
      startX = e.clientX; dragged = false; paused = true;
    });
    stage.addEventListener("pointermove", function (e) {
      if (startX === null || dragged) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 45) {
        dx < 0 ? next() : prev();
        dragged = true;
        restart();
      }
    });
    function endDrag() { startX = null; paused = false; }
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);
    stage.addEventListener("pointerleave", endDrag);

    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { next(); restart(); }
      else if (e.key === "ArrowLeft") { prev(); restart(); }
    });

    // Only spend frames on it while it is on screen.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        paused = !entries[0].isIntersecting;
      }, { threshold: 0.2 }).observe(root);
    }

    window.addEventListener("resize", layout);
    layout();
    restart();
  })();

  console.log("TopLead Website loaded");
});

// ========================================
// Hero Particles Animation
// ========================================
function initHeroParticles() {
  var canvas = document.getElementById("heroParticles");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var particles = [];
  var mouse = { x: null, y: null };
  var maxDistance = 150;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener("mouseout", function() {
    mouse.x = null;
    mouse.y = null;
  });

  var particleCount = 50;
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p, i) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200, 168, 75, " + p.alpha + ")";
      ctx.fill();

      // Draw connections
      particles.forEach(function(p2, j) {
        if (i >= j) return;
        var dx = p.x - p2.x;
        var dy = p.y - p2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = "rgba(200, 168, 75, " + (0.15 * (1 - distance / maxDistance)) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Mouse connection
      if (mouse.x && mouse.y) {
        var mdx = p.x - mouse.x;
        var mdy = p.y - mouse.y;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(200, 168, 75, " + (0.25 * (1 - mDist / maxDistance)) + ")";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// ========================================
// Stats Counter with Suffix
// ========================================
function initStatsCounter() {
  var statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  var statsObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stats-card").forEach(function(card) {
          var numEl = card.querySelector(".stats-number");
          if (!numEl) return;

          var text = numEl.textContent.trim();
          var match = text.match(/^(\d+)(.*)$/);
          if (match) {
            var target = parseInt(match[1]);
            var suffix = match[2] || "";
            var current = 0;
            var increment = target / 80;

            function update() {
              current += increment;
              if (current < target) {
                numEl.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(update);
              } else {
                numEl.textContent = target + suffix;
              }
            }
            update();
          }
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsObs.observe(statsSection);
}

// ========================================
// HERO SLIDER - CINEMATIC FADE + BLUR TRANSITION
// ========================================
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  // Guard: the hero slider only exists on the homepage. Bail out early on every
  // other page so `slides[0]` / `heroSection.addEventListener` don't throw.
  if (!slides.length) return;
  const DURATION  = 3500;   // 3.5 giây mỗi slide
  const FADE_TIME = 800;    // 0.8 giây transition

  let current   = 0;
  let timer     = null;
  let isAnimating = false;

  // --- CSS inject (không cần chỉnh styles.css) ---
  const style = document.createElement('style');
  style.textContent = `
    .hero-slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 1.5rem;
      box-sizing: border-box;

      opacity: 0;
      transform: translateY(30px);
      filter: blur(6px);
      pointer-events: none;
      transition:
        opacity   ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1),
        transform ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1),
        filter    ${FADE_TIME}ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: opacity, transform, filter;
    }

    .hero-slide.active {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
      pointer-events: auto;
    }

    .hero-slide.leaving {
      opacity: 0;
      transform: translateY(-20px);
      filter: blur(4px);
    }

    /* Headline styles */
    .hero-headline {
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .headline-line {
      display: block;
    }

    .hero-slide .hero-subtitle {
      font-size: 1.1rem;
      color: rgba(255,255,255,0.75);
      margin-bottom: 24px;
      max-width: 500px;
      opacity: 0;
      transform: translateY(16px);
      transition:
        opacity   0.6s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-slide .cta-buttons {
      opacity: 0;
      transform: translateY(12px);
      transition:
        opacity   0.5s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-slide.active .hero-subtitle {
      opacity: 1; transform: translateY(0);
      transition-delay: 0.3s;
    }
    .hero-slide.active .cta-buttons {
      opacity: 1; transform: translateY(0);
      transition-delay: 0.45s;
    }

    /* Dot indicator */
    .hero-dots {
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 12px;
      z-index: 10;
    }

    .hero-dot {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
      border: none;
      cursor: pointer;
      padding: 0;
      transition: background 0.3s, transform 0.3s;
    }

    .hero-dot:hover {
      background: rgba(255,255,255,0.6);
      transform: scale(1.2);
    }

    .hero-dot.active {
      background: #D9885F;
      transform: scale(1.25);
    }

    .hero-slider {
      position: relative;
      width: 100%;
      height: 60vh;
      min-height: 400px;
      max-height: 500px;
    }
  `;
  document.head.appendChild(style);

  // --- Hàm chuyển slide ---
  function goTo(next) {
    if (isAnimating || next === current) return;
    isAnimating = true;

    const outSlide = slides[current];
    const inSlide  = slides[next];

    // Slide cũ: thêm class leaving để bay lên + blur ra
    outSlide.classList.add('leaving');
    outSlide.classList.remove('active');

    // Sau khi transition xong, dọn class leaving
    setTimeout(() => {
      outSlide.classList.remove('leaving');
    }, FADE_TIME);

    // Slide mới: active ngay để trigger transition vào
    inSlide.classList.add('active');

    // Cập nhật dots
    dots[current].classList.remove('active');
    dots[next].classList.add('active');

    // Reset CSS animation trên dot (để vòng tròn restart)
    dots[next].style.animation = 'none';
    dots[next].offsetHeight;   // reflow trick
    dots[next].style.animation = '';

    current = next;

    setTimeout(() => {
      isAnimating = false;
    }, FADE_TIME);
  }

  // --- Auto play ---
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, DURATION);
  }

  // --- Dot click ---
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i === current) return;
      clearInterval(timer);
      goTo(i);
      startTimer();
    });
  });

  // --- Pause khi hover vào hero ---
  const heroSection = document.querySelector('.hero');
  heroSection.addEventListener('mouseenter', () => clearInterval(timer));
  heroSection.addEventListener('mouseleave', () => startTimer());

  // --- Init ---
  slides[0].classList.add('active');
  dots[0].classList.add('active');
  startTimer();
})();

// ========================================
// Hero Text Reveal Animation
// ========================================
function initHeroTextReveal() {
  // Kept for fallback if needed
}

// ========================================
// Pain Point Ticker Animation
// ========================================
function initPainTicker() {
  var words = document.querySelectorAll(".pain-ticker-word");
  if (words.length === 0) return;

  var currentIndex = 0;

  setInterval(function() {
    words[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add("active");
  }, 2500);
}

// ========================================
// Testimonials Parallax Effect
// ========================================
function initTestimonialsParallax() {
  // Disabled - testimonials now fixed in place
}

// ========================================
// Magnetic Button Effect
// ========================================
function initMagneticButton() {
  var btn = document.querySelector(".btn-magnetic");
  if (!btn) return;

  btn.addEventListener("mousemove", function(e) {
    var rect = btn.getBoundingClientRect();
    var x = e.clientX - rect.left - rect.width / 2;
    var y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = "translate(" + (x * 0.3) + "px, " + (y * 0.3) + "px) scale(1.05)";
  });

  btn.addEventListener("mouseleave", function() {
    btn.style.transform = "translate(0px, 0px) scale(1)";
  });

  btn.addEventListener("click", function() {
    var contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({ top: contactSection.offsetTop - 80, behavior: "smooth" });
    }
  });
}

// Reading progress bar (blog post pages)
(function() {
  var bar = document.querySelector(".post-progress span");
  if (!bar) return;
  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();


// Count-up animation (Good Partner section)
(function() {
  var counts = document.querySelectorAll(".count");
  if (!counts.length || !("IntersectionObserver" in window)) {
    counts.forEach(function(el){ el.textContent = (el.getAttribute("data-target")||"0") + (el.getAttribute("data-suffix")||""); });
    return;
  }
  function animate(el) {
    var target = parseFloat(el.getAttribute("data-target")) || 0;
    var start = el.getAttribute("data-start"); start = start === null ? 0 : parseFloat(start);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1700, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * ease) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  counts.forEach(function(c) { io.observe(c); });
})();


// Contact-page forms - visible submit feedback (connect a backend/action later)
(function() {
  ["employer-form", "candidate-form"].forEach(function(id) {
    var f = document.getElementById(id);
    if (!f) return;
    f.addEventListener("submit", function(e) {
      e.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var btn = f.querySelector('button[type="submit"]');
      if (!btn) return;
      var old = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = (typeof currentLang !== "undefined" && currentLang === "en") ? "Sent ✓" : "Đã gửi ✓";
      f.reset();
      setTimeout(function() { btn.disabled = false; btn.innerHTML = old; }, 3500);
    });
  });
})();


// TopLead 360 - interactive 3D showcase
(function() {
  var stage = document.getElementById("scStage");
  if (!stage) return;
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".sc-tab"));
  var panels = Array.prototype.slice.call(stage.querySelectorAll(".sc-panel"));
  var cur = 0, timer, desktop = window.matchMedia("(min-width:821px)").matches;
  function show(i) {
    i = (i + panels.length) % panels.length;
    panels.forEach(function(p) { p.style.transform = ""; });
    tabs.forEach(function(t, k) { t.classList.toggle("active", k === i); });
    panels.forEach(function(p, k) {
      p.classList.toggle("active", k === i);
      var v = p.querySelector("video");
      if (v) { if (k === i) { v.play().catch(function(){}); } else { v.pause(); } }
    });
    cur = i;
  }
  function restart() { clearInterval(timer); timer = setInterval(function() { show(cur + 1); }, 7000); }
  tabs.forEach(function(t) { t.addEventListener("click", function() { show(+t.getAttribute("data-i")); restart(); }); });
  stage.querySelectorAll("[data-goto]").forEach(function(b) { b.addEventListener("click", function() { show(+b.getAttribute("data-goto")); restart(); }); });
  if (desktop && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stage.addEventListener("mousemove", function(e) {
      var a = stage.querySelector(".sc-panel.active"); if (!a) return;
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      a.style.transform = "rotateY(" + (x * 6).toFixed(2) + "deg) rotateX(" + (-y * 5).toFixed(2) + "deg)";
    });
    stage.addEventListener("mouseleave", function() { var a = stage.querySelector(".sc-panel.active"); if (a) a.style.transform = ""; });
  }
  show(0); restart();
})();

// Industry film-strip: duplicate the card set once so the CSS marquee (which
// translates the track by -50%) loops seamlessly. Runs only on the services
// page; degrades gracefully (cards still render) if this never executes.
(function initIndustryReel() {
  var track = document.querySelector(".ind-track");
  if (!track) return;
  var originals = Array.prototype.slice.call(track.children);
  originals.forEach(function (card) {
    var clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });
  // make the film-strip trackpad/drag-scrollable (measured after cloning)
  if (typeof initScrollRail === "function") initScrollRail(track.parentElement, 0.5);
})();

// Blog: live search by title + topic-chip filter. Category matching uses the
// stable data-cat slug, so it keeps working after a language switch; the search
// reads the title text live, so it matches whichever language is showing.
(function initBlogFilter() {
  var section = document.querySelector(".blog-section");
  if (!section) return;
  var search = document.getElementById("blogSearch");
  var chips = Array.prototype.slice.call(document.querySelectorAll("#blogCats .blog-chip"));
  var cards = Array.prototype.slice.call(document.querySelectorAll(".post-cards .post-card"));
  var empty = document.getElementById("blogEmpty");
  var activeCat = "all";

  function apply() {
    var q = (search && search.value ? search.value : "").trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (card) {
      var titleEl = card.querySelector(".post-card-title");
      var title = titleEl ? titleEl.textContent.toLowerCase() : "";
      var okCat = activeCat === "all" || card.getAttribute("data-cat") === activeCat;
      var okQ = !q || title.indexOf(q) !== -1;
      var show = okCat && okQ;
      card.style.display = show ? "" : "none";
      if (show) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }

  if (search) search.addEventListener("input", apply);
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.classList.remove("is-active");
        c.setAttribute("aria-pressed", "false");
      });
      chip.classList.add("is-active");
      chip.setAttribute("aria-pressed", "true");
      activeCat = chip.getAttribute("data-cat");
      apply();
    });
  });
  apply();
})();

// Turn a horizontal strip into a native-scrollable, auto-running rail. Native
// overflow-x scroll gives Mac trackpad (two-finger) + click-drag + touch; a rAF
// loop nudges scrollLeft when the user isn't interacting; hovering pauses it.
// Content is duplicated, so the loop wraps at the half-way point seamlessly.
function initScrollRail(vp, speed) {
  if (!vp) return;
  speed = speed || 0.5;
  vp.classList.add("tl-scroll");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var half = 0;
  function measure() { half = vp.scrollWidth / 2; }
  measure();
  window.addEventListener("load", measure);
  window.addEventListener("resize", function () { setTimeout(measure, 80); });

  var hovering = false, userUntil = 0;
  vp.addEventListener("pointerenter", function () { hovering = true; });
  vp.addEventListener("pointerleave", function () { hovering = false; });
  function bump() { userUntil = Date.now() + 1400; }        // pause auto ~1.4s after a swipe
  vp.addEventListener("wheel", bump, { passive: true });
  vp.addEventListener("pointerdown", bump);
  vp.addEventListener("touchstart", bump, { passive: true });
  vp.addEventListener("touchmove", bump, { passive: true });

  vp.scrollLeft = 1;
  (function frame() {
    if (!reduce && !hovering && Date.now() >= userUntil) {
      vp.scrollLeft += speed;
      if (half && vp.scrollLeft >= half) vp.scrollLeft -= half;   // seamless wrap
    }
    requestAnimationFrame(frame);
  })();
}

// Wire the remaining rails (the industry film-strip is wired in initIndustryReel
// after its cards are cloned). Each querySelector is null on pages without it.
(function initSiteRails() {
  initScrollRail(document.querySelector(".logos-marquee"), 0.55);
  initScrollRail(document.querySelector(".partner-wall"), 0.5);
  initScrollRail(document.querySelector(".tst-rail"), 0.5);
})();


// ===== Consultation popup: auto after ~9s (once/session) + any [data-consult] /
// "tư vấn" CTA. Additive channel; the page contact box is untouched. =====
(function initConsultPopup(){
  if (document.getElementById("cpxOverlay")) return;
  var overlay = document.createElement("div");
  overlay.className = "cpx-overlay"; overlay.id = "cpxOverlay"; overlay.hidden = true;
  overlay.innerHTML =
    '<div class="cpx-modal" role="dialog" aria-modal="true" aria-labelledby="cpxTitle">' +
      '<div class="cpx-head">' +
        '<img class="cpx-logo" src="assets/images/logo-mark.png" alt="TopLead">' +
        '<span class="cpx-brand">TopLead <b>Recruitment</b></span>' +
        '<button type="button" class="cpx-close" id="cpxClose" aria-label="Đóng">✕</button>' +
      '</div>' +
      '<form class="cpx-form" id="cpxForm" novalidate>' +
        '<h3 class="cpx-title" id="cpxTitle">Nhận tư vấn tuyển dụng miễn phí</h3>' +
        '<label class="cpx-label" for="cpxName">Họ và tên *</label>' +
        '<input class="cpx-input" id="cpxName" name="name" type="text" placeholder="Nhập họ và tên" required>' +
        '<label class="cpx-label" for="cpxPhone">Số điện thoại *</label>' +
        '<input class="cpx-input" id="cpxPhone" name="phone" type="tel" placeholder="VD: 0901 234 567" required>' +
        '<label class="cpx-label" for="cpxEmail">Email</label>' +
        '<input class="cpx-input" id="cpxEmail" name="email" type="email" placeholder="email@congty.com (không bắt buộc)">' +
        '<label class="cpx-label" for="cpxNeed">Nhu cầu tư vấn *</label>' +
        '<select class="cpx-input cpx-select" id="cpxNeed" name="need" required>' +
          '<option value="">— Vui lòng chọn —</option>' +
          '<option>Tuyển dụng Sales</option>' +
          '<option>Tuyển dụng Marketing</option>' +
          '<option>Tuyển dụng Finance / Kế toán</option>' +
          '<option>Tuyển dụng HR / Nhân sự</option>' +
          '<option>Tuyển dụng Operations / Vận hành</option>' +
          '<option>Tư vấn giải pháp nhân sự tổng thể</option>' +
          '<option>Khác</option>' +
        '</select>' +
        '<p class="cpx-error" id="cpxError" hidden></p>' +
        '<button type="submit" class="cpx-submit">Nhận tư vấn miễn phí</button>' +
        '<p class="cpx-note">Để lại thông tin, đội ngũ TopLead sẽ liên hệ lại trong 24 giờ làm việc.</p>' +
      '</form>' +
      '<div class="cpx-success" id="cpxSuccess" hidden>' +
        '<div class="cpx-success-ico">✓</div><h4>Cảm ơn bạn!</h4>' +
        '<p>Đội ngũ TopLead sẽ liên hệ trong 24 giờ làm việc.</p>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);
  var form = overlay.querySelector("#cpxForm"),
      succ = overlay.querySelector("#cpxSuccess"),
      err  = overlay.querySelector("#cpxError");
  function open(){ overlay.hidden=false; requestAnimationFrame(function(){ overlay.classList.add("is-open"); });
    document.body.style.overflow="hidden"; setTimeout(function(){ var n=overlay.querySelector("#cpxName"); if(n) n.focus(); },80); }
  function close(){ overlay.classList.remove("is-open"); document.body.style.overflow="";
    setTimeout(function(){ overlay.hidden=true; },320); }
  window.openConsult = open;
  overlay.querySelector("#cpxClose").addEventListener("click", close);
  overlay.addEventListener("click", function(e){ if(e.target===overlay) close(); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape" && !overlay.hidden) close(); });
  form.addEventListener("submit", function(e){
    e.preventDefault(); err.hidden=true;
    var name=overlay.querySelector("#cpxName"), phone=overlay.querySelector("#cpxPhone"), need=overlay.querySelector("#cpxNeed");
    [name,phone,need].forEach(function(f){ f.classList.remove("cpx-invalid"); });
    var digits=(phone.value||"").replace(/\D/g,"");
    function fail(f,m){ f.classList.add("cpx-invalid"); err.textContent=m; err.hidden=false; f.focus(); }
    if(name.value.trim().length<2) return fail(name,"Vui lòng nhập họ và tên.");
    if(!/^0[35789]\d{8}$/.test(digits)) return fail(phone,"Số điện thoại không hợp lệ (VD: 0901 234 567).");
    if(!need.value) return fail(need,"Vui lòng chọn nhu cầu tư vấn.");
    form.hidden=true; succ.hidden=false; setTimeout(close, 2400);
  });
  document.addEventListener("click", function(e){
    var el=e.target.closest("[data-consult], a, button"); if(!el) return;
    var hit=el.hasAttribute("data-consult");
    if(!hit){
      var t=(el.textContent||"").trim().toLowerCase();
      if(t.indexOf("tư vấn")!==-1 && !el.closest(".prod-buy") && /btn|cta|magnetic/.test(el.className||"")) hit=true;
    }
    if(hit){ e.preventDefault(); open(); }
  });
  if(!sessionStorage.getItem("tl-consult-shown")){
    setTimeout(function(){ if(overlay.hidden){ open(); sessionStorage.setItem("tl-consult-shown","1"); } }, 9000);
  }
})();
