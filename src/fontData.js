const Font = require('fonteditor-core').Font;
const woff2 = require('fonteditor-core').woff2;

export const fontData = [
    { "xMin": 0, "yMin": -76, "xMax": 944, "yMax": 837, "contours": 7, "unicode": "真" },
{ "xMin": 0, "yMin": -74, "xMax": 954, "yMax": 764, "contours": 2, "unicode": "不" },
{ "xMin": 0, "yMin": -71, "xMax": 960, "yMax": 832, "contours": 1, "unicode": "人" },
{ "xMin": 0, "yMin": -74, "xMax": 914, "yMax": 794, "contours": 4, "unicode": "回" },
{ "xMin": 0, "yMin": -59, "xMax": 923, "yMax": 840, "contours": 5, "unicode": "的" },
{ "xMin": 0, "yMin": -73, "xMax": 934, "yMax": 833, "contours": 4, "unicode": "种" },
{ "xMin": 0, "yMin": -74, "xMax": 897, "yMax": 836, "contours": 3, "unicode": "中" },
{ "xMin": 0, "yMin": -81, "xMax": 882, "yMax": 764, "contours": 5, "unicode": "用" },
{ "xMin": 0, "yMin": -77, "xMax": 968, "yMax": 818, "contours": 4, "unicode": "还" },
{ "xMin": 0, "yMin": -64, "xMax": 826, "yMax": 766, "contours": 3, "unicode": "日" },
{ "xMin": 0, "yMin": -77, "xMax": 950, "yMax": 832, "contours": 7, "unicode": "得" },
{ "xMin": 0, "yMin": -54, "xMax": 945, "yMax": 791, "contours": 9, "unicode": "思" },
{ "xMin": 0, "yMin": -75, "xMax": 958, "yMax": 836, "contours": 6, "unicode": "能" },
{ "xMin": 0, "yMin": -72, "xMax": 934, "yMax": 768, "contours": 4, "unicode": "西" },
{ "xMin": 0, "yMin": -75, "xMax": 920, "yMax": 835, "contours": 7, "unicode": "神" },
{ "xMin": 0, "yMin": -42, "xMax": 945, "yMax": 831, "contours": 1, "unicode": "主" },
{ "xMin": 0, "yMin": -50, "xMax": 959, "yMax": 833, "contours": 4, "unicode": "过" },
{ "xMin": 0, "yMin": -72, "xMax": 949, "yMax": 834, "contours": 1, "unicode": "手" },
{ "xMin": 0, "yMin": -75, "xMax": 946, "yMax": 834, "contours": 5, "unicode": "将" },
{ "xMin": 0, "yMin": -76, "xMax": 887, "yMax": 759, "contours": 1, "unicode": "了" },
{ "xMin": 0, "yMin": -55, "xMax": 948, "yMax": 834, "contours": 1, "unicode": "也" },
{ "xMin": 0, "yMin": -62, "xMax": 966, "yMax": 835, "contours": 2, "unicode": "此" },
{ "xMin": 0, "yMin": -66, "xMax": 958, "yMax": 841, "contours": 3, "unicode": "这" },
{ "xMin": 0, "yMin": -74, "xMax": 957, "yMax": 834, "contours": 2, "unicode": "会" },
{ "xMin": 0, "yMin": -43, "xMax": 945, "yMax": 829, "contours": 5, "unicode": "重" },
{ "xMin": 0, "yMin": -75, "xMax": 845, "yMax": 838, "contours": 2, "unicode": "名" },
{ "xMin": 0, "yMin": -77, "xMax": 942, "yMax": 791, "contours": 6, "unicode": "要" },
{ "xMin": 0, "yMin": -77, "xMax": 910, "yMax": 789, "contours": 4, "unicode": "国" },
{ "xMin": 0, "yMin": -74, "xMax": 948, "yMax": 835, "contours": 4, "unicode": "少" },
{ "xMin": 0, "yMin": -72, "xMax": 944, "yMax": 841, "contours": 6, "unicode": "前" },
{ "xMin": 0, "yMin": -79, "xMax": 950, "yMax": 836, "contours": 4, "unicode": "行" },
{ "xMin": 0, "yMin": -77, "xMax": 906, "yMax": 821, "contours": 6, "unicode": "间" },
{ "xMin": 0, "yMin": -72, "xMax": 935, "yMax": 835, "contours": 2, "unicode": "在" },
{ "xMin": 0, "yMin": -77, "xMax": 953, "yMax": 823, "contours": 3, "unicode": "所" },
{ "xMin": 0, "yMin": -83, "xMax": 965, "yMax": 835, "contours": 2, "unicode": "起" },
{ "xMin": 0, "yMin": -76, "xMax": 959, "yMax": 803, "contours": 9, "unicode": "最" },
{ "xMin": 0, "yMin": -75, "xMax": 948, "yMax": 834, "contours": 1, "unicode": "十" },
{ "xMin": 0, "yMin": -31, "xMax": 946, "yMax": 760, "contours": 1, "unicode": "正" },
{ "xMin": 0, "yMin": -72, "xMax": 923, "yMax": 836, "contours": 5, "unicode": "相" },
{ "xMin": 0, "yMin": -67, "xMax": 956, "yMax": 830, "contours": 5, "unicode": "时" },
{ "xMin": 0, "yMin": -82, "xMax": 960, "yMax": 797, "contours": 3, "unicode": "以" },
{ "xMin": 0, "yMin": -73, "xMax": 945, "yMax": 834, "contours": 6, "unicode": "其" },
{ "xMin": 0, "yMin": -75, "xMax": 953, "yMax": 834, "contours": 1, "unicode": "大" },
{ "xMin": 0, "yMin": 0, "xMax": 928, "yMax": 738, "contours": 3, "unicode": "三" },
{ "xMin": 0, "yMin": -78, "xMax": 966, "yMax": 834, "contours": 1, "unicode": "太" },
{ "xMin": 0, "yMin": -76, "xMax": 961, "yMax": 834, "contours": 1, "unicode": "本" },
{ "xMin": 0, "yMin": -74, "xMax": 935, "yMax": 835, "contours": 4, "unicode": "法" },
{ "xMin": 0, "yMin": -56, "xMax": 957, "yMax": 839, "contours": 2, "unicode": "之" },
{ "xMin": 0, "yMin": -76, "xMax": 952, "yMax": 836, "contours": 3, "unicode": "特" },
{ "xMin": 0, "yMin": -71, "xMax": 943, "yMax": 763, "contours": 1, "unicode": "于" },
{ "xMin": 0, "yMin": -62, "xMax": 934, "yMax": 836, "contours": 1, "unicode": "才" },
{ "xMin": 0, "yMin": -47, "xMax": 944, "yMax": 795, "contours": 5, "unicode": "里" },
{ "xMin": 0, "yMin": -77, "xMax": 929, "yMax": 840, "contours": 4, "unicode": "着" },
{ "xMin": 0, "yMin": -79, "xMax": 959, "yMax": 839, "contours": 3, "unicode": "发" },
{ "xMin": 0, "yMin": -51, "xMax": 906, "yMax": 842, "contours": 2, "unicode": "它" },
{ "xMin": 0, "yMin": -74, "xMax": 958, "yMax": 834, "contours": 2, "unicode": "他" },
{ "xMin": 0, "yMin": -74, "xMax": 901, "yMax": 837, "contours": 3, "unicode": "向" },
{ "xMin": 0, "yMin": -77, "xMax": 876, "yMax": 836, "contours": 3, "unicode": "当" },
{ "xMin": 0, "yMin": -81, "xMax": 951, "yMax": 835, "contours": 1, "unicode": "先" },
{ "xMin": 0, "yMin": -75, "xMax": 913, "yMax": 836, "contours": 2, "unicode": "却" },
{ "xMin": 0, "yMin": -75, "xMax": 942, "yMax": 838, "contours": 3, "unicode": "样" },
{ "xMin": 0, "yMin": -76, "xMax": 852, "yMax": 839, "contours": 3, "unicode": "白" },
{ "xMin": 0, "yMin": -77, "xMax": 955, "yMax": 843, "contours": 7, "unicode": "然" },
{ "xMin": 0, "yMin": -71, "xMax": 954, "yMax": 839, "contours": 6, "unicode": "新" },
{ "xMin": 0, "yMin": -78, "xMax": 958, "yMax": 773, "contours": 5, "unicode": "再" },
{ "xMin": 0, "yMin": -79, "xMax": 908, "yMax": 816, "contours": 5, "unicode": "別" },
{ "xMin": 0, "yMin": -75, "xMax": 958, "yMax": 834, "contours": 4, "unicode": "何" },
{ "xMin": 0, "yMin": -76, "xMax": 954, "yMax": 828, "contours": 4, "unicode": "话" },
{ "xMin": 0, "yMin": -75, "xMax": 957, "yMax": 832, "contours": 2, "unicode": "作" },
{ "xMin": 0, "yMin": -73, "xMax": 961, "yMax": 840, "contours": 3, "unicode": "文" },
{ "xMin": 0, "yMin": -75, "xMax": 954, "yMax": 831, "contours": 2, "unicode": "关" },
{ "xMin": 0, "yMin": -65, "xMax": 941, "yMax": 823, "contours": 2, "unicode": "么" },
{ "xMin": 0, "yMin": -50, "xMax": 951, "yMax": 834, "contours": 4, "unicode": "些" },
{ "xMin": 0, "yMin": -76, "xMax": 940, "yMax": 767, "contours": 6, "unicode": "面" },
{ "xMin": 0, "yMin": -82, "xMax": 945, "yMax": 838, "contours": 3, "unicode": "并" },
{ "xMin": 0, "yMin": -42, "xMax": 963, "yMax": 789, "contours": 6, "unicode": "理" },
{ "xMin": 0, "yMin": -79, "xMax": 950, "yMax": 833, "contours": 6, "unicode": "给" },
{ "xMin": 0, "yMin": -78, "xMax": 930, "yMax": 840, "contours": 2, "unicode": "方" },
{ "xMin": 0, "yMin": -76, "xMax": 950, "yMax": 838, "contours": 2, "unicode": "年" },
{ "xMin": 0, "yMin": -76, "xMax": 957, "yMax": 794, "contours": 2, "unicode": "儿" },
{ "xMin": 0, "yMin": -77, "xMax": 901, "yMax": 821, "contours": 5, "unicode": "问" },
{ "xMin": 0, "yMin": -42, "xMax": 905, "yMax": 748, "contours": 2, "unicode": "四" },
{ "xMin": 0, "yMin": -79, "xMax": 956, "yMax": 816, "contours": 3, "unicode": "分" },
{ "xMin": 0, "yMin": -50, "xMax": 871, "yMax": 730, "contours": 2, "unicode": "口" },
{ "xMin": 0, "yMin": -76, "xMax": 939, "yMax": 837, "contours": 2, "unicode": "多" },
{ "xMin": 0, "yMin": -77, "xMax": 953, "yMax": 832, "contours": 4, "unicode": "你" },
{ "xMin": 0, "yMin": -78, "xMax": 949, "yMax": 826, "contours": 3, "unicode": "后" },
{ "xMin": 0, "yMin": -53, "xMax": 906, "yMax": 818, "contours": 4, "unicode": "到" },
{ "xMin": 0, "yMin": -76, "xMax": 907, "yMax": 836, "contours": 3, "unicode": "门" },
{ "xMin": 0, "yMin": -77, "xMax": 954, "yMax": 835, "contours": 5, "unicode": "说" },
{ "xMin": 0, "yMin": -75, "xMax": 934, "yMax": 838, "contours": 6, "unicode": "高" },
{ "xMin": 0, "yMin": -75, "xMax": 953, "yMax": 812, "contours": 2, "unicode": "从" },
{ "xMin": 0, "yMin": -81, "xMax": 927, "yMax": 838, "contours": 4, "unicode": "声" },
{ "xMin": 0, "yMin": -75, "xMax": 943, "yMax": 785, "contours": 4, "unicode": "那" },
{ "xMin": 0, "yMin": -72, "xMax": 954, "yMax": 839, "contours": 1, "unicode": "美" },
{ "xMin": 0, "yMin": -53, "xMax": 971, "yMax": 837, "contours": 4, "unicode": "论" },
{ "xMin": 0, "yMin": -77, "xMax": 955, "yMax": 767, "contours": 1, "unicode": "无" },
{ "xMin": 0, "yMin": -79, "xMax": 956, "yMax": 841, "contours": 2, "unicode": "定" },
{ "xMin": 0, "yMin": -47, "xMax": 947, "yMax": 772, "contours": 1, "unicode": "已" },
{ "xMin": 0, "yMin": -76, "xMax": 945, "yMax": 836, "contours": 2, "unicode": "物" },
{ "xMin": 0, "yMin": -75, "xMax": 946, "yMax": 831, "contours": 3, "unicode": "书" },
{ "xMin": 0, "yMin": -47, "xMax": 961, "yMax": 835, "contours": 4, "unicode": "经" },
{ "xMin": 0, "yMin": -79, "xMax": 940, "yMax": 760, "contours": 4, "unicode": "只" },
{ "xMin": 0, "yMin": -74, "xMax": 961, "yMax": 841, "contours": 2, "unicode": "家" },
{ "xMin": 0, "yMin": -75, "xMax": 941, "yMax": 847, "contours": 2, "unicode": "女" },
{ "xMin": 0, "yMin": -67, "xMax": 960, "yMax": 812, "contours": 3, "unicode": "公" },
{ "xMin": 0, "yMin": -76, "xMax": 958, "yMax": 791, "contours": 7, "unicode": "眼" },
{ "xMin": 0, "yMin": -74, "xMax": 953, "yMax": 835, "contours": 7, "unicode": "情" },
{ "xMin": 0, "yMin": -74, "xMax": 947, "yMax": 830, "contours": 3, "unicode": "听" },
{ "xMin": 0, "yMin": -77, "xMax": 919, "yMax": 835, "contours": 4, "unicode": "如" },
{ "xMin": 0, "yMin": -61, "xMax": 957, "yMax": 839, "contours": 6, "unicode": "道" },
{ "xMin": 0, "yMin": -81, "xMax": 915, "yMax": 792, "contours": 6, "unicode": "明" },
{ "xMin": 0, "yMin": -79, "xMax": 945, "yMax": 769, "contours": 2, "unicode": "开" },
{ "xMin": 0, "yMin": -66, "xMax": 884, "yMax": 813, "contours": 2, "unicode": "与" },
{ "xMin": 0, "yMin": -8, "xMax": 947, "yMax": 831, "contours": 2, "unicode": "世" },
{ "xMin": 0, "yMin": -52, "xMax": 959, "yMax": 836, "contours": 2, "unicode": "地" },
{ "xMin": 0, "yMin": -53, "xMax": 952, "yMax": 776, "contours": 1, "unicode": "己" },
{ "xMin": 0, "yMin": -75, "xMax": 942, "yMax": 839, "contours": 6, "unicode": "部" },
{ "xMin": 0, "yMin": -67, "xMax": 963, "yMax": 765, "contours": 2, "unicode": "又" },
{ "xMin": 0, "yMin": -73, "xMax": 898, "yMax": 826, "contours": 3, "unicode": "和" },
{ "xMin": 0, "yMin": -75, "xMax": 942, "yMax": 843, "contours": 2, "unicode": "学" },
{ "xMin": 0, "yMin": -75, "xMax": 936, "yMax": 835, "contours": 3, "unicode": "有" },
{ "xMin": 0, "yMin": -72, "xMax": 942, "yMax": 762, "contours": 1, "unicode": "下" },
{ "xMin": 0, "yMin": -76, "xMax": 947, "yMax": 780, "contours": 1, "unicode": "而" },
{ "xMin": 0, "yMin": -79, "xMax": 964, "yMax": 836, "contours": 2, "unicode": "教" },
{ "xMin": 0, "yMin": -75, "xMax": 961, "yMax": 756, "contours": 1, "unicode": "天" },
{ "xMin": 0, "yMin": -78, "xMax": 946, "yMax": 840, "contours": 3, "unicode": "笑" },
{ "xMin": 0, "yMin": -59, "xMax": 959, "yMax": 816, "contours": 4, "unicode": "进" },
{ "xMin": 0, "yMin": -75, "xMax": 942, "yMax": 835, "contours": 4, "unicode": "者" },
{ "xMin": 0, "yMin": -79, "xMax": 960, "yMax": 827, "contours": 2, "unicode": "我" },
{ "xMin": 0, "yMin": -80, "xMax": 967, "yMax": 837, "contours": 4, "unicode": "使" },
{ "xMin": 0, "yMin": 0, "xMax": 953, "yMax": 425, "contours": 1, "unicode": "一" },
{ "xMin": 0, "yMin": -75, "xMax": 964, "yMax": 835, "contours": 2, "unicode": "个" },
{ "xMin": 0, "yMin": -78, "xMax": 938, "yMax": 827, "contours": 4, "unicode": "看" },
{ "xMin": 0, "yMin": -65, "xMax": 918, "yMax": 780, "contours": 3, "unicode": "写" },
{ "xMin": 0, "yMin": -80, "xMax": 954, "yMax": 783, "contours": 3, "unicode": "民" },
{ "xMin": 0, "yMin": -75, "xMax": 963, "yMax": 835, "contours": 3, "unicode": "来" },
{ "xMin": 0, "yMin": -76, "xMax": 941, "yMax": 778, "contours": 3, "unicode": "见" },
{ "xMin": 0, "yMin": -78, "xMax": 949, "yMax": 786, "contours": 3, "unicode": "现" },
{ "xMin": 0, "yMin": -70, "xMax": 957, "yMax": 835, "contours": 2, "unicode": "打" },
{ "xMin": 0, "yMin": -74, "xMax": 963, "yMax": 832, "contours": 5, "unicode": "但" },
{ "xMin": 0, "yMin": -76, "xMax": 918, "yMax": 834, "contours": 4, "unicode": "们" },
{ "xMin": 0, "yMin": -82, "xMax": 954, "yMax": 834, "contours": 2, "unicode": "成" },
{ "xMin": 0, "yMin": -75, "xMax": 962, "yMax": 835, "contours": 5, "unicode": "被" },
{ "xMin": 0, "yMin": -58, "xMax": 960, "yMax": 797, "contours": 4, "unicode": "心" },
{ "xMin": 0, "yMin": -71, "xMax": 963, "yMax": 830, "contours": 2, "unicode": "长" },
{ "xMin": 0, "yMin": -77, "xMax": 972, "yMax": 825, "contours": 3, "unicode": "代" },
{ "xMin": 0, "yMin": -75, "xMax": 959, "yMax": 836, "contours": 2, "unicode": "外" },
{ "xMin": 0, "yMin": -76, "xMax": 949, "yMax": 770, "contours": 1, "unicode": "子" },
{ "xMin": 0, "yMin": -75, "xMax": 956, "yMax": 839, "contours": 3, "unicode": "社" },
{ "xMin": 0, "yMin": -75, "xMax": 958, "yMax": 838, "contours": 3, "unicode": "气" },
{ "xMin": 0, "yMin": -74, "xMax": 967, "yMax": 833, "contours": 2, "unicode": "体" },
{ "xMin": 0, "yMin": -78, "xMax": 959, "yMax": 834, "contours": 1, "unicode": "走" },
{ "xMin": 0, "yMin": -28, "xMax": 943, "yMax": 819, "contours": 1, "unicode": "上" },
{ "xMin": 0, "yMin": -54, "xMax": 946, "yMax": 833, "contours": 9, "unicode": "想" },
{ "xMin": 0, "yMin": -76, "xMax": 965, "yMax": 836, "contours": 8, "unicode": "就" },
{ "xMin": 0, "yMin": -72, "xMax": 932, "yMax": 841, "contours": 5, "unicode": "实" },
{ "xMin": 0, "yMin": -77, "xMax": 957, "yMax": 793, "contours": 4, "unicode": "是" },
{ "xMin": 0, "yMin": -75, "xMax": 882, "yMax": 835, "contours": 5, "unicode": "由" },
{ "xMin": 0, "yMin": -75, "xMax": 957, "yMax": 839, "contours": 2, "unicode": "义" },
{ "xMin": 0, "yMin": -67, "xMax": 951, "yMax": 837, "contours": 8, "unicode": "感" },
{ "xMin": 0, "yMin": -84, "xMax": 934, "yMax": 838, "contours": 4, "unicode": "身" },
{ "xMin": 0, "yMin": -77, "xMax": 957, "yMax": 835, "contours": 3, "unicode": "她" },
{ "xMin": 0, "yMin": -75, "xMax": 941, "yMax": 819, "contours": 3, "unicode": "动" },
{ "xMin": 0, "yMin": -77, "xMax": 938, "yMax": 765, "contours": 2, "unicode": "两" },
{ "xMin": 0, "yMin": -77, "xMax": 955, "yMax": 835, "contours": 3, "unicode": "好" },
{ "xMin": 0, "yMin": -78, "xMax": 910, "yMax": 783, "contours": 4, "unicode": "同" },
{ "xMin": 0, "yMin": -76, "xMax": 951, "yMax": 832, "contours": 2, "unicode": "什" },
{ "xMin": 0, "yMin": -65, "xMax": 947, "yMax": 836, "contours": 1, "unicode": "去" },
{ "xMin": 0, "yMin": -78, "xMax": 964, "yMax": 832, "contours": 6, "unicode": "便" },
{ "xMin": 0, "yMin": -74, "xMax": 944, "yMax": 764, "contours": 3, "unicode": "可" },
{ "xMin": 0, "yMin": -61, "xMax": 945, "yMax": 836, "contours": 2, "unicode": "老" },
{ "xMin": 0, "yMin": -76, "xMax": 966, "yMax": 835, "contours": 4, "unicode": "把" },
{ "xMin": 0, "yMin": -76, "xMax": 946, "yMax": 836, "contours": 6, "unicode": "点" },
{ "xMin": 0, "yMin": -76, "xMax": 958, "yMax": 827, "contours": 5, "unicode": "都" },
{ "xMin": 0, "yMin": -68, "xMax": 896, "yMax": 834, "contours": 3, "unicode": "为" },
{ "xMin": 0, "yMin": -76, "xMax": 959, "yMax": 832, "contours": 5, "unicode": "很" },
{ "xMin": 0, "yMin": -67, "xMax": 930, "yMax": 843, "contours": 8, "unicode": "意" },
{ "xMin": 0, "yMin": -76, "xMax": 960, "yMax": 822, "contours": 6, "unicode": "没" },
{ "xMin": 0, "yMin": -80, "xMax": 903, "yMax": 834, "contours": 1, "unicode": "力" },
{ "xMin": 0, "yMin": -76, "xMax": 957, "yMax": 835, "contours": 2, "unicode": "化" },
{ "xMin": 0, "yMin": -78, "xMax": 960, "yMax": 775, "contours": 1, "unicode": "几" },
{ "xMin": 0, "yMin": -75, "xMax": 958, "yMax": 832, "contours": 3, "unicode": "史" },
{ "xMin": 0, "yMin": -74, "xMax": 915, "yMax": 794, "contours": 3, "unicode": "因" },
{ "xMin": 0, "yMin": -74, "xMax": 943, "yMax": 836, "contours": 4, "unicode": "性" },
{ "xMin": 0, "yMin": 0, "xMax": 941, "yMax": 692, "contours": 2, "unicode": "二" },
{ "xMin": 0, "yMin": -44, "xMax": 945, "yMax": 835, "contours": 1, "unicode": "生" },
{ "xMin": 0, "yMin": -73, "xMax": 903, "yMax": 836, "contours": 3, "unicode": "知" },
{ "xMin": 0, "yMin": -76, "xMax": 967, "yMax": 820, "contours": 3, "unicode": "小" },
{ "xMin": 0, "yMin": -74, "xMax": 955, "yMax": 833, "contours": 3, "unicode": "对" },
{ "xMin": 0, "yMin": -74, "xMax": 890, "yMax": 835, "contours": 1, "unicode": "出" },
{ "xMin": 0, "yMin": -79, "xMax": 950, "yMax": 835, "contours": 5, "unicode": "事" },
{ "xMin": 0, "yMin": -75, "xMax": 960, "yMax": 787, "contours": 5, "unicode": "果" },
{ "xMin": 0, "yMin": -78, "xMax": 942, "yMax": 840, "contours": 5, "unicode": "第" },
{ "xMin": 0, "yMin": -77, "xMax": 847, "yMax": 837, "contours": 4, "unicode": "自" },
{ "xMin": 0, "yMin": -47, "xMax": 972, "yMax": 846, "contours": 2, "unicode": "全" },
{ "xMin": 0, "yMin": -72, "xMax": 942, "yMax": 824, "contours": 4, "unicode": "头" },
{ "xMin": 0, "yMin": -75, "xMax": 952, "yMax": 840, "contours": 3, "unicode": "等" },
{ "xMin": 0, "yMin": -77, "xMax": 964, "yMax": 781, "contours": 5, "unicode": "更" },
{ "xMin": 0, "yMin": -60, "xMax": 957, "yMax": 772, "contours": 1, "unicode": "死" }];

function compare_glyph(a, b) {
    return a.xMin === b.xMin && a.yMin === b.yMin && a.xMax === b.xMax && a.yMax === b.yMax && a.contours.length === b.contours;
}

function remap(text, mapping){
    let temp_text = null;
    mapping.forEach(entry => {
        let esc = String.fromCodePoint(entry[0]);
        if (temp_text) {
            temp_text = temp_text.replaceAll(esc, entry[1]);
        } else {
            temp_text = text.replaceAll(esc, entry[1]);
        }


    });

    console.debug(temp_text);
    return temp_text;
}

export function fontRemap(fontbuff, text) {
    // console.debug(text);
    let fontarray = new Uint8Array(fontbuff);
    return woff2.init('addon/woff2.wasm').then(() => {
        console.debug("inited");
        let font = Font.create(fontarray, {
            type: 'woff2'
        });
        font.sort();
        let fontObject = font.get();
        let mappings = [];

        let data = [];

        fontObject['glyf'].forEach((glyph) => {
            // console.debug(glyph);
            fontData.forEach((glyph2) => {
                if (compare_glyph(glyph, glyph2)) {
                    mappings.push([glyph.unicode[0],  glyph2.unicode]);
                }
            })
        });
        // console.debug(mappings);
        return remap(text, mappings);
    });
}
