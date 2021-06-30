const Font = require('fonteditor-core').Font;
const woff2 = require('fonteditor-core').woff2;

export const fontData = [
    { "xMin": 0, "xMax": 2018, "yMin": -265, "yMax": 1703, "contours": 4, "unicode": "特" },
    { "xMin": 0, "xMax": 2022, "yMin": -265, "yMax": 1569, "contours": 1, "unicode": "天" },
    { "xMin": 0, "xMax": 2016, "yMin": -279, "yMax": 1627, "contours": 7, "unicode": "要" },
    { "xMin": 0, "xMax": 2006, "yMin": -261, "yMax": 1695, "contours": 2, "unicode": "走" },
    { "xMin": 0, "xMax": 1998, "yMin": -247, "yMax": 1709, "contours": 2, "unicode": "文" },
    { "xMin": 0, "xMax": 2000, "yMin": -145, "yMax": 1711, "contours": 2, "unicode": "主" },
    { "xMin": 0, "xMax": 2004, "yMin": -269, "yMax": 1715, "contours": 6, "unicode": "前" },
    { "xMin": 0, "xMax": 1888, "yMin": -277, "yMax": 1707, "contours": 3, "unicode": "中" },
    { "xMin": 0, "xMax": 2006, "yMin": -225, "yMax": 1705, "contours": 2, "unicode": "与" },
    { "xMin": 0, "xMax": 2020, "yMin": -267, "yMax": 1707, "contours": 7, "unicode": "得" },
    { "xMin": 0, "xMax": 2022, "yMin": -221, "yMax": 1713, "contours": 9, "unicode": "感" },
    { "xMin": 0, "xMax": 2012, "yMin": -269, "yMax": 1703, "contours": 4, "unicode": "法" },
    { "xMin": 0, "xMax": 1992, "yMin": -285, "yMax": 1707, "contours": 4, "unicode": "实" },
    { "xMin": 0, "xMax": 1900, "yMin": -269, "yMax": 1599, "contours": 4, "unicode": "国" },
    { "xMin": 0, "xMax": 2016, "yMin": -249, "yMax": 1587, "contours": 1, "unicode": "子" },
    { "xMin": 0, "xMax": 2002, "yMin": -177, "yMax": 1567, "contours": 1, "unicode": "已" },
    { "xMin": 0, "xMax": 2012, "yMin": -265, "yMax": 1715, "contours": 6, "unicode": "部" },
    { "xMin": 0, "xMax": 2008, "yMin": -253, "yMax": 1705, "contours": 2, "unicode": "在" },
    { "xMin": 0, "xMax": 2022, "yMin": -279, "yMax": 1717, "contours": 7, "unicode": "就" },
    { "xMin": 0, "xMax": 2020, "yMin": -249, "yMax": 1671, "contours": 1, "unicode": "人" },
    { "xMin": 0, "xMax": 2022, "yMin": -269, "yMax": 1657, "contours": 2, "unicode": "个" },
    { "xMin": 0, "xMax": 1992, "yMin": -253, "yMax": 1709, "contours": 6, "unicode": "点" },
    { "xMin": 0, "xMax": 2008, "yMin": -273, "yMax": 1713, "contours": 5, "unicode": "笑" },
    { "xMin": 0, "xMax": 2010, "yMin": -277, "yMax": 1713, "contours": 1, "unicode": "去" },
    { "xMin": 0, "xMax": 1908, "yMin": -261, "yMax": 1703, "contours": 5, "unicode": "问" },
    { "xMin": 0, "xMax": 1928, "yMin": -279, "yMax": 1641, "contours": 3, "unicode": "和" },
    { "xMin": 0, "xMax": 2000, "yMin": -271, "yMax": 1573, "contours": 4, "unicode": "西" },
    { "xMin": 0, "xMax": 2024, "yMin": -227, "yMax": 1727, "contours": 8, "unicode": "意" },
    { "xMin": 0, "xMax": 2008, "yMin": -161, "yMax": 1691, "contours": 4, "unicode": "些" },
    { "xMin": 0, "xMax": 2014, "yMin": -245, "yMax": 1703, "contours": 5, "unicode": "事" },
    { "xMin": 0, "xMax": 2022, "yMin": -239, "yMax": 1679, "contours": 3, "unicode": "小" },
    { "xMin": 0, "xMax": 1836, "yMin": -241, "yMax": 1721, "contours": 3, "unicode": "白" },
    { "xMin": 0, "xMax": 2000, "yMin": -243, "yMax": 1727, "contours": 6, "unicode": "能" },
    { "xMin": 0, "xMax": 1860, "yMin": -275, "yMax": 1695, "contours": 3, "unicode": "当" },
    { "xMin": 0, "xMax": 2020, "yMin": -191, "yMax": 1573, "contours": 1, "unicode": "己" },
    { "xMin": 0, "xMax": 1872, "yMin": -255, "yMax": 1711, "contours": 3, "unicode": "门" },
    { "xMin": 0, "xMax": 2022, "yMin": -265, "yMax": 1713, "contours": 3, "unicode": "气" },
    { "xMin": 0, "xMax": 2022, "yMin": -275, "yMax": 1719, "contours": 2, "unicode": "年" },
    { "xMin": 0, "xMax": 1990, "yMin": -273, "yMax": 1705, "contours": 2, "unicode": "女" },
    { "xMin": 0, "xMax": 2022, "yMin": -205, "yMax": 1615, "contours": 9, "unicode": "思" },
    { "xMin": 0, "xMax": 1800, "yMin": -263, "yMax": 1705, "contours": 4, "unicode": "自" },
    { "xMin": 0, "xMax": 2032, "yMin": -265, "yMax": 1551, "contours": 1, "unicode": "死" },
    { "xMin": 0, "xMax": 1996, "yMin": -275, "yMax": 1579, "contours": 4, "unicode": "那" },
    { "xMin": 0, "xMax": 2020, "yMin": -279, "yMax": 1693, "contours": 3, "unicode": "史" },
    { "xMin": 0, "xMax": 2032, "yMin": -263, "yMax": 1701, "contours": 2, "unicode": "体" },
    { "xMin": 0, "xMax": 1922, "yMin": -269, "yMax": 1701, "contours": 4, "unicode": "种" },
    { "xMin": 0, "xMax": 2034, "yMin": -275, "yMax": 1701, "contours": 2, "unicode": "外" },
    { "xMin": 0, "xMax": 2022, "yMin": -265, "yMax": 1709, "contours": 4, "unicode": "身" },
    { "xMin": 0, "xMax": 2022, "yMin": -261, "yMax": 1713, "contours": 6, "unicode": "新" },
    { "xMin": 0, "xMax": 1932, "yMin": -233, "yMax": 1587, "contours": 3, "unicode": "写" },
    { "xMin": 0, "xMax": 2022, "yMin": -281, "yMax": 1711, "contours": 5, "unicode": "将" },
    { "xMin": 0, "xMax": 1988, "yMin": -189, "yMax": 1701, "contours": 1, "unicode": "老" },
    { "xMin": 0, "xMax": 2024, "yMin": -277, "yMax": 1527, "contours": 2, "unicode": "不" },
    { "xMin": 0, "xMax": 1982, "yMin": -33, "yMax": 1445, "contours": 2, "unicode": "二" },
    { "xMin": 0, "xMax": 2022, "yMin": -167, "yMax": 1595, "contours": 5, "unicode": "里" },
    { "xMin": 0, "xMax": 2020, "yMin": -215, "yMax": 1697, "contours": 4, "unicode": "过" },
    { "xMin": 0, "xMax": 2036, "yMin": -277, "yMax": 1699, "contours": 2, "unicode": "成" },
    { "xMin": 0, "xMax": 2020, "yMin": -241, "yMax": 1681, "contours": 2, "unicode": "打" },
    { "xMin": 0, "xMax": 2022, "yMin": -241, "yMax": 1691, "contours": 4, "unicode": "把" },
    { "xMin": 0, "xMax": 1996, "yMin": -255, "yMax": 1537, "contours": 1, "unicode": "下" },
    { "xMin": 0, "xMax": 2012, "yMin": -269, "yMax": 1571, "contours": 4, "unicode": "只" },
    { "xMin": 0, "xMax": 2022, "yMin": -261, "yMax": 1711, "contours": 6, "unicode": "情" },
    { "xMin": 0, "xMax": 2024, "yMin": -267, "yMax": 1701, "contours": 2, "unicode": "长" },
    { "xMin": 0, "xMax": 1992, "yMin": -115, "yMax": 1501, "contours": 3, "unicode": "三" },
    { "xMin": 0, "xMax": 2012, "yMin": -245, "yMax": 1711, "contours": 7, "unicode": "等" },
    { "xMin": 0, "xMax": 1902, "yMin": -275, "yMax": 1689, "contours": 5, "unicode": "別" },
    { "xMin": 0, "xMax": 2022, "yMin": -279, "yMax": 1701, "contours": 5, "unicode": "很" },
    { "xMin": 0, "xMax": 2020, "yMin": -199, "yMax": 1709, "contours": 2, "unicode": "只" },
    { "xMin": 0, "xMax": 1932, "yMin": -239, "yMax": 1703, "contours": 4, "unicode": "到" },
    { "xMin": 0, "xMax": 2020, "yMin": -267, "yMax": 1713, "contours": 5, "unicode": "被" },
    { "xMin": 0, "xMax": 2026, "yMin": -285, "yMax": 1605, "contours": 7, "unicode": "眼" },
    { "xMin": 0, "xMax": 2008, "yMin": -251, "yMax": 1729, "contours": 6, "unicode": "高" },
    { "xMin": 0, "xMax": 1816, "yMin": -185, "yMax": 1499, "contours": 2, "unicode": "口" },
    { "xMin": 0, "xMax": 2020, "yMin": -237, "yMax": 1703, "contours": 3, "unicode": "好" },
    { "xMin": 0, "xMax": 1950, "yMin": -279, "yMax": 1699, "contours": 3, "unicode": "动" },
    { "xMin": 0, "xMax": 1738, "yMin": -245, "yMax": 1571, "contours": 3, "unicode": "日" },
    { "xMin": 0, "xMax": 2020, "yMin": -269, "yMax": 1703, "contours": 3, "unicode": "代" },
    { "xMin": 0, "xMax": 2032, "yMin": -281, "yMax": 1713, "contours": 3, "unicode": "分" },
    { "xMin": 0, "xMax": 2016, "yMin": -247, "yMax": 1657, "contours": 3, "unicode": "还" },
    { "xMin": 0, "xMax": 2010, "yMin": -271, "yMax": 1703, "contours": 1, "unicode": "关" },
    { "xMin": 0, "xMax": 2000, "yMin": -277, "yMax": 1619, "contours": 3, "unicode": "民" },
    { "xMin": 0, "xMax": 1888, "yMin": -289, "yMax": 1709, "contours": 3, "unicode": "为" },
    { "xMin": 0, "xMax": 2014, "yMin": -263, "yMax": 1703, "contours": 2, "unicode": "作" },
    { "xMin": 0, "xMax": 2016, "yMin": -257, "yMax": 1551, "contours": 2, "unicode": "又" },
    { "xMin": 0, "xMax": 2020, "yMin": -279, "yMax": 1727, "contours": 2, "unicode": "美" },
    { "xMin": 0, "xMax": 2024, "yMin": -261, "yMax": 1707, "contours": 5, "unicode": "你" },
    { "xMin": 0, "xMax": 1984, "yMin": -261, "yMax": 1583, "contours": 1, "unicode": "而" },
    { "xMin": 0, "xMax": 2020, "yMin": 0, "yMax": 865, "contours": 1, "unicode": "一" },
    { "xMin": 0, "xMax": 2020, "yMin": -273, "yMax": 1699, "contours": 2, "unicode": "起" },
    { "xMin": 0, "xMax": 1860, "yMin": -239, "yMax": 1671, "contours": 1, "unicode": "出" },
    { "xMin": 0, "xMax": 2018, "yMin": -279, "yMax": 1711, "contours": 2, "unicode": "定" },
    { "xMin": 0, "xMax": 2024, "yMin": -271, "yMax": 1643, "contours": 3, "unicode": "公" },
    { "xMin": 0, "xMax": 2016, "yMin": -283, "yMax": 1541, "contours": 2, "unicode": "无" },
    { "xMin": 0, "xMax": 2008, "yMin": -279, "yMax": 1711, "contours": 2, "unicode": "并" },
    { "xMin": 0, "xMax": 1874, "yMin": -247, "yMax": 1587, "contours": 4, "unicode": "同" },
    { "xMin": 0, "xMax": 1814, "yMin": -277, "yMax": 1705, "contours": 2, "unicode": "名" },
    { "xMin": 0, "xMax": 2008, "yMin": -261, "yMax": 1649, "contours": 4, "unicode": "看" },
    { "xMin": 0, "xMax": 2018, "yMin": -261, "yMax": 1693, "contours": 2, "unicode": "太" },
    { "xMin": 0, "xMax": 2016, "yMin": -257, "yMax": 1585, "contours": 5, "unicode": "再" },
    { "xMin": 0, "xMax": 2004, "yMin": -285, "yMax": 1705, "contours": 7, "unicode": "真" },
    { "xMin": 0, "xMax": 1980, "yMin": -263, "yMax": 1717, "contours": 4, "unicode": "着" },
    { "xMin": 0, "xMax": 1866, "yMin": -257, "yMax": 1701, "contours": 1, "unicode": "力" },
    { "xMin": 0, "xMax": 2004, "yMin": -249, "yMax": 1713, "contours": 5, "unicode": "学" },
    { "xMin": 0, "xMax": 2024, "yMin": -261, "yMax": 1711, "contours": 2, "unicode": "义" },
    { "xMin": 0, "xMax": 2014, "yMin": -275, "yMax": 1707, "contours": 3, "unicode": "发" },
    { "xMin": 0, "xMax": 2014, "yMin": -239, "yMax": 1539, "contours": 3, "unicode": "可" },
    { "xMin": 0, "xMax": 1908, "yMin": -257, "yMax": 1555, "contours": 2, "unicode": "四" },
    { "xMin": 0, "xMax": 2034, "yMin": -261, "yMax": 1709, "contours": 7, "unicode": "然" },
    { "xMin": 0, "xMax": 1944, "yMin": -267, "yMax": 1709, "contours": 2, "unicode": "物" },
    { "xMin": 0, "xMax": 2004, "yMin": -269, "yMax": 1671, "contours": 4, "unicode": "话" },
    { "xMin": 0, "xMax": 1922, "yMin": -259, "yMax": 1691, "contours": 3, "unicode": "书" },
    { "xMin": 0, "xMax": 2022, "yMin": -259, "yMax": 1693, "contours": 2, "unicode": "我" },
    { "xMin": 0, "xMax": 2004, "yMin": -189, "yMax": 1645, "contours": 5, "unicode": "重" },
    { "xMin": 0, "xMax": 1940, "yMin": -235, "yMax": 1703, "contours": 5, "unicode": "的" },
    { "xMin": 0, "xMax": 2028, "yMin": -269, "yMax": 1605, "contours": 5, "unicode": "果" },
    { "xMin": 0, "xMax": 1920, "yMin": -263, "yMax": 1715, "contours": 8, "unicode": "神" },
    { "xMin": 0, "xMax": 2004, "yMin": -261, "yMax": 1715, "contours": 3, "unicode": "有" },
    { "xMin": 0, "xMax": 1884, "yMin": -217, "yMax": 1553, "contours": 1, "unicode": "了" },
    { "xMin": 0, "xMax": 2020, "yMin": -135, "yMax": 1535, "contours": 1, "unicode": "正" },
    { "xMin": 0, "xMax": 2026, "yMin": -275, "yMax": 1691, "contours": 4, "unicode": "少" },
    { "xMin": 0, "xMax": 1996, "yMin": -239, "yMax": 1597, "contours": 2, "unicode": "两" },
    { "xMin": 0, "xMax": 2028, "yMin": -263, "yMax": 1691, "contours": 1, "unicode": "大" },
    { "xMin": 0, "xMax": 2012, "yMin": -231, "yMax": 1629, "contours": 1, "unicode": "手" },
    { "xMin": 0, "xMax": 2026, "yMin": -247, "yMax": 1729, "contours": 2, "unicode": "家" },
    { "xMin": 0, "xMax": 2022, "yMin": -279, "yMax": 1671, "contours": 6, "unicode": "没" },
    { "xMin": 0, "xMax": 2022, "yMin": -171, "yMax": 1711, "contours": 4, "unicode": "经" },
    { "xMin": 0, "xMax": 2024, "yMin": -277, "yMax": 1605, "contours": 6, "unicode": "更" },
    { "xMin": 0, "xMax": 2030, "yMin": -285, "yMax": 1625, "contours": 4, "unicode": "是" },
    { "xMin": 0, "xMax": 1990, "yMin": -279, "yMax": 1711, "contours": 1, "unicode": "方" },
    { "xMin": 0, "xMax": 1912, "yMin": -259, "yMax": 1693, "contours": 4, "unicode": "们" },
    { "xMin": 0, "xMax": 2016, "yMin": -269, "yMax": 1703, "contours": 6, "unicode": "便" },
    { "xMin": 0, "xMax": 1926, "yMin": -285, "yMax": 1701, "contours": 2, "unicode": "多" },
    { "xMin": 0, "xMax": 2016, "yMin": -239, "yMax": 1693, "contours": 4, "unicode": "进" },
    { "xMin": 0, "xMax": 2032, "yMin": -275, "yMax": 1689, "contours": 6, "unicode": "给" },
    { "xMin": 0, "xMax": 1998, "yMin": -145, "yMax": 1667, "contours": 1, "unicode": "上" },
    { "xMin": 0, "xMax": 2012, "yMin": -145, "yMax": 1709, "contours": 1, "unicode": "生" },
    { "xMin": 0, "xMax": 1878, "yMin": -267, "yMax": 1579, "contours": 3, "unicode": "因" },
    { "xMin": 0, "xMax": 2018, "yMin": -275, "yMax": 1617, "contours": 9, "unicode": "最" },
    { "xMin": 0, "xMax": 2022, "yMin": -259, "yMax": 1711, "contours": 4, "unicode": "行" },
    { "xMin": 0, "xMax": 2022, "yMin": -283, "yMax": 1669, "contours": 3, "unicode": "教" },
    { "xMin": 0, "xMax": 2008, "yMin": -257, "yMax": 1635, "contours": 3, "unicode": "听" },
    { "xMin": 0, "xMax": 2022, "yMin": -281, "yMax": 1635, "contours": 3, "unicode": "所" },
    { "xMin": 0, "xMax": 2008, "yMin": -231, "yMax": 1557, "contours": 1, "unicode": "于" },
    { "xMin": 0, "xMax": 2024, "yMin": -263, "yMax": 1681, "contours": 2, "unicode": "从" },
    { "xMin": 0, "xMax": 2008, "yMin": -279, "yMax": 1703, "contours": 3, "unicode": "样" },
    { "xMin": 0, "xMax": 2000, "yMin": -265, "yMax": 1691, "contours": 1, "unicode": "十" },
    { "xMin": 0, "xMax": 2008, "yMin": -279, "yMax": 1557, "contours": 2, "unicode": "开" },
    { "xMin": 0, "xMax": 2004, "yMin": -241, "yMax": 1703, "contours": 2, "unicode": "么" },
    { "xMin": 0, "xMax": 2022, "yMin": -279, "yMax": 1693, "contours": 3, "unicode": "性" },
    { "xMin": 0, "xMax": 1998, "yMin": -283, "yMax": 1687, "contours": 3, "unicode": "头" },
    { "xMin": 0, "xMax": 2002, "yMin": -263, "yMax": 1699, "contours": 3, "unicode": "者" },
    { "xMin": 0, "xMax": 2014, "yMin": -175, "yMax": 1703, "contours": 2, "unicode": "此" },
    { "xMin": 0, "xMax": 1984, "yMin": -261, "yMax": 1583, "contours": 6, "unicode": "面" },
    { "xMin": 0, "xMax": 2016, "yMin": -267, "yMax": 1707, "contours": 5, "unicode": "说" },
    { "xMin": 0, "xMax": 1942, "yMin": -195, "yMax": 1721, "contours": 2, "unicode": "它" },
    { "xMin": 0, "xMax": 1896, "yMin": -289, "yMax": 1583, "contours": 5, "unicode": "用" },
    { "xMin": 0, "xMax": 2020, "yMin": -231, "yMax": 1703, "contours": 5, "unicode": "时" },
    { "xMin": 0, "xMax": 2004, "yMin": -265, "yMax": 1695, "contours": 4, "unicode": "都" },
    { "xMin": 0, "xMax": 2030, "yMin": -239, "yMax": 1681, "contours": 4, "unicode": "论" },
    { "xMin": 0, "xMax": 2016, "yMin": -239, "yMax": 1715, "contours": 5, "unicode": "这" },
    { "xMin": 0, "xMax": 2040, "yMin": -195, "yMax": 1697, "contours": 2, "unicode": "地" },
    { "xMin": 0, "xMax": 2020, "yMin": -187, "yMax": 1697, "contours": 1, "unicode": "也" },
    { "xMin": 0, "xMax": 1994, "yMin": -217, "yMax": 1695, "contours": 1, "unicode": "才" },
    { "xMin": 0, "xMax": 1898, "yMin": -279, "yMax": 1605, "contours": 6, "unicode": "明" },
    { "xMin": 0, "xMax": 2024, "yMin": -269, "yMax": 1709, "contours": 3, "unicode": "来" },
    { "xMin": 0, "xMax": 2020, "yMin": -255, "yMax": 1693, "contours": 2, "unicode": "化" },
    { "xMin": 0, "xMax": 2024, "yMin": -235, "yMax": 1587, "contours": 1, "unicode": "几" },
    { "xMin": 0, "xMax": 1904, "yMin": -267, "yMax": 1697, "contours": 2, "unicode": "却" },
    { "xMin": 0, "xMax": 1924, "yMin": -261, "yMax": 1703, "contours": 6, "unicode": "间" },
    { "xMin": 0, "xMax": 2020, "yMin": -267, "yMax": 1611, "contours": 3, "unicode": "现" },
    { "xMin": 0, "xMax": 1932, "yMin": -267, "yMax": 1709, "contours": 3, "unicode": "知" },
    { "xMin": 0, "xMax": 2024, "yMin": -277, "yMax": 1701, "contours": 4, "unicode": "使" },
    { "xMin": 0, "xMax": 2022, "yMin": -229, "yMax": 1683, "contours": 9, "unicode": "想" },
    { "xMin": 0, "xMax": 2018, "yMin": -269, "yMax": 1697, "contours": 4, "unicode": "何" },
    { "xMin": 0, "xMax": 1868, "yMin": -247, "yMax": 1705, "contours": 3, "unicode": "向" },
    { "xMin": 0, "xMax": 2036, "yMin": -261, "yMax": 1703, "contours": 2, "unicode": "他" },
    { "xMin": 0, "xMax": 1900, "yMin": -249, "yMax": 1583, "contours": 4, "unicode": "回" },
    { "xMin": 0, "xMax": 2024, "yMin": -229, "yMax": 1689, "contours": 3, "unicode": "对" },
    { "xMin": 0, "xMax": 2020, "yMin": -251, "yMax": 1665, "contours": 2, "unicode": "儿" },
    { "xMin": 0, "xMax": 1852, "yMin": -235, "yMax": 1705, "contours": 5, "unicode": "由" },
    { "xMin": 0, "xMax": 2018, "yMin": -279, "yMax": 1691, "contours": 6, "unicode": "其" },
    { "xMin": 0, "xMax": 1992, "yMin": -181, "yMax": 1677, "contours": 2, "unicode": "世" },
    { "xMin": 0, "xMax": 2022, "yMin": -181, "yMax": 1675, "contours": 2, "unicode": "全" },
    { "xMin": 0, "xMax": 2022, "yMin": -259, "yMax": 1691, "contours": 5, "unicode": "但" },
    { "xMin": 0, "xMax": 2022, "yMin": -241, "yMax": 1717, "contours": 6, "unicode": "道" },
    { "xMin": 0, "xMax": 2004, "yMin": -271, "yMax": 1645, "contours": 3, "unicode": "后" },
    { "xMin": 0, "xMax": 2038, "yMin": -277, "yMax": 1701, "contours": 3, "unicode": "她" },
    { "xMin": 0, "xMax": 2036, "yMin": -289, "yMax": 1681, "contours": 3, "unicode": "会" },
    { "xMin": 0, "xMax": 1992, "yMin": -273, "yMax": 1711, "contours": 3, "unicode": "第" },
    { "xMin": 0, "xMax": 2028, "yMin": -193, "yMax": 1719, "contours": 4, "unicode": "心" },
    { "xMin": 0, "xMax": 1996, "yMin": -255, "yMax": 1697, "contours": 4, "unicode": "社" },
    { "xMin": 0, "xMax": 2018, "yMin": -257, "yMax": 1685, "contours": 2, "unicode": "什" },
    { "xMin": 0, "xMax": 2022, "yMin": -193, "yMax": 1597, "contours": 6, "unicode": "理" },
    { "xMin": 0, "xMax": 1928, "yMin": -263, "yMax": 1691, "contours": 5, "unicode": "相" },
    { "xMin": 0, "xMax": 2032, "yMin": -279, "yMax": 1701, "contours": 3, "unicode": "以" },
    { "xMin": 0, "xMax": 2030, "yMin": -271, "yMax": 1699, "contours": 1, "unicode": "先" },
    { "xMin": 0, "xMax": 1892, "yMin": -265, "yMax": 1699, "contours": 4, "unicode": "如" },
    { "xMin": 0, "xMax": 2016, "yMin": -277, "yMax": 1623, "contours": 2, "unicode": "见" },
    { "xMin": 0, "xMax": 2010, "yMin": -269, "yMax": 1709, "contours": 1, "unicode": "本" },
    { "xMin": 0, "xMax": 2014, "yMin": -273, "yMax": 1701, "contours": 4, "unicode": "声" }];

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
    return temp_text;
}

export function fontRemap(fontbuff, text) {
    let fontarray = new Uint8Array(fontbuff);
    return woff2.init('addon/woff2.wasm').then(() => {
        let font = Font.create(fontarray, {
            type: 'woff2'
        });
        font.sort();
        let fontObject = font.get();
        let mappings = [];

        let data = [];

        fontObject['glyf'].forEach((glyph) => {
            fontData.forEach((glyph2) => {
                if (compare_glyph(glyph, glyph2)) {
                    mappings.push([glyph.unicode[0],  glyph2.unicode]);
                }
            })
        });
        return remap(text, mappings);
    });
}
