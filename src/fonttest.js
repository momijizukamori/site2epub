const Font = require('fonteditor-core').Font;
const fs = require('fs');
const woff2 = require('fonteditor-core').woff2;
const fontData = [
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

const replacements = ['', 'x', '特', '天', '要', '走', '文', '主', '前', '中', '与', '得', '感', '法', '实', '国', '子', '已', '部', '在', '就', '人', '个', '点', '笑', '去', '问', '和', '西', '意', '些', '事', '小', '白', '能', '当', '己', '门', '气', '年', '女', '思', '自', '死', '那', '史', '体', '种', '外', '身', '新', '写', '将', '老', '不', '二', '里', '过', '成', '打', '把', '下', '只', '情', '长', '三', '等', '別', '很', '只', '到', '被', '眼', '高', '口', '好', '动', '日', '代', '分', '还', '关', '民', '为', '作', '又', '美', '你', '而', '一', '起', '出', '定', '公', '无', '并', '同', '名', '看', '太', '再', '真', '着', '力', '学', '义', '发', '可', '四', '然', '物', '话', '书', '我', '重', '的', '果', '神', '有', '了', '正', '少', '两', '大', '手', '家', '没', '经', '更', '是', '方', '们', '便', '多', '进', '给', '上', '生', '因', '最', '行', '教', '听', '所', '于', '从', '样', '十', '开', '么', '性', '头', '者', '此', '面', '说', '它', '用', '时', '都', '论', '这', '地', '也', '才', '明', '来', '化', '几', '却', '间', '现', '知', '使', '想', '何', '向', '他', '回', '对', '儿', '由', '其', '世', '全', '但', '道', '后', '她', '会', '第', '心', '社', '什', '理', '相', '以', '先', '如', '见', '本', '声'];

var test = ` 长庚的话音低而含混, 哪怕贴着耳朵，顾昀\uef3c‌没听清，疑惑地偏头转向长庚, 问道：“说\uebba‌么？”　长庚的目光从他那被琉璃镜遮住\ue937‌一边的眼睛上刮过, 周身力已竭, 而血还在沸腾翻滚, 热得口干舌燥，一瞬间很想当众搂过他来亲热个够，可是视线一扫, 远远地看见\ue937‌然大师那一张四大皆空的脸, 顿时失\ue51c‌着察觉自己忘形, 默默地反省\ue937‌片刻，放开顾昀的腰, 拉起他的手，随着那虽然虚弱、但已经稳定下来的脉搏一点一点地平静着自己：“没\uebba‌么——我刚才看见信使往北去\ue937‌，是送往京城的折子？”</p><p>　　“是, ”顾昀点点头, “这一次让朝廷出面主动派人和洋人接触，我\ue492‌之前一直被动，这回应该有底气\ue937‌。”</p><p>　　长庚：“\ue530‌和谈？”</p><p>　　“不和, ”顾昀淡淡地说道，“卧榻之侧岂容他人酣睡，\uee80‌况血债未偿, 江南沃土给这群畜生占着, 做梦都觉得恶心。”</p><p>　　长庚立刻反应过来：“你是打算拖着他\ue492‌, 一点一点蚕食鲸吞。”</p><p>　　一\ue887‌面放出和谈信号，让已经力有不逮的敌人心存侥幸, 给他\ue492‌留出内部消耗的余地，一\ue887‌面时而提出过分\ue530‌求，时而制造小范围内的区域争端，慢慢逼退敌军战线，顺便在战中练兵，等到时机\uede7‌熟、北边彻底准备\ue21d‌、年轻的江北水军\uede7‌熟时，再一举南下。</p><p>　　顾昀“嗯”\ue937‌一声，任他拖着自己的手腕进\ue937‌帅帐，伸手在长庚脸上抹\ue937‌一把，\ue51c‌道：“殿下，脸都花\ue937‌。”</p><p>　　长庚被他突如其来的温存酥没\ue937‌半边的骨头，然而随即又警醒过来，总觉得他态度这么温柔准没\ue21d‌事。</p><p>　　果然，顾昀坐在一边，反握住长庚的手，捏在掌中，有一下没一下地摩挲\ue937‌一会后说道：“还有个事。”</p><p>　　长庚高高地将一侧的眉梢挑\ue937‌起来，面无表情地低头看着他。</p><p>　　顾昀一只手托着长庚的手掌，另一只手盖在他的手背上，低头在那裂\ue937‌小口的指尖上亲\ue937‌一下：“我打算拖着他\ue492‌，先去收拾\ue937‌北\ue887‌。”</p><p>　　长庚：“你\ue530‌赶回北疆？”</p><p>　　顾昀点点头。</p><p>　　长庚：“\uebba‌么时候？”</p><p>　　顾昀：“……很快。”</p><p>　　顾昀说“很快”的意\ue3ac‌，基本是指根据西洋敌军的动向和江北水军的损伤情况，随时动身，\ue530‌是他今天\ue869‌觉江北驻地的状态还行，就当天晚上走，还有需\ue530‌他调整调动的，就连夜发令，第二天一早走。</p><p>　　长庚：“然后怎么办，两头跑吗？”</p><p>　　顾昀没吭声，算是默认\ue937‌。</p><p>　　他心里忽然觉得很对不起长庚，那年在去西域的半路上，顾昀信誓旦旦地跟陈轻絮说过，哪怕长庚将来疯\ue937‌，他\uef3c‌会管到底，可是近\ue0f5‌来，他心里隐隐担心自己将来\uef3c‌会力有不逮。顾昀不怕生老病死，钟老将军的灵堂在侧，如今算来，他身边无论善意还是恶意的长辈、那些曾经教过他害过他的人，差不多都走光\ue937‌，就知道再盖世的英雄\uef3c‌逃不过那么一遭，人没必\ue530‌跟自己较那种劲，他只是怕自己不能一直庇护这个小疯子，反而给他添乱添累赘。</p><p>　　顾昀含蓄深沉的歉意让长庚一时有些不知所措，刚开始没反应过来，\ue21d‌半晌才察觉到心里被人开\ue937‌一条口子，心血漫无目的地四处横流，就是汇不到一个地\ue887‌。</p><p>　　他心疼难抑，只\ue21d‌强作欢\ue51c‌。</p><p>　　“\ue21d‌，”长庚用一种轻快又不过分的口吻说道，“你放心去，看见我夹在你衣服里的图纸\ue937‌吗？很快——等你收拾完蛮人，说不定我这边的蒸汽铁轨车都修\ue21d‌\ue937‌，信不信？”</p><p>　　很快他就能推起那样一个四海宾服的大梁，\uef3c‌许那时候，玄铁三营只需\ue530‌守在古丝路入口维护贸易秩序，或者干脆集体在边境开荒，他的大将军愿意在边境喝葡萄美酒\uef3c‌\ue21d‌，愿意回京城跟鸟吵架\uef3c‌罢，全都可\ueda4‌从容，不必再奔波赶路，\uef3c‌不必再有那么多迫不得已。</p><p>　　顾昀无奈道：“怎么刚打\ue937‌一场小战役就喘起来\ue937‌，你还是先想想怎么回军机处吧。”</p><p>　　长庚弯下腰：“我\ue530‌是办\uede7‌\ue937‌，你怎么奖励我？”</p><p>　　顾昀大\ue887‌道：“你想\ue530‌\uebba‌么。”</p><p>　　长庚想\ue937‌想，靠近顾昀耳边低低地说\ue937‌句\uebba‌么。</p><p>　　不知雁王殿下偷偷摸摸地掉\ue937‌\uebba‌么廉耻，顾昀作为一个半聋都听不下去\ue937‌，\ue51c‌骂\ue937‌一声：“滚。”</p><p>　　一嗓子正\ue21d‌糊在前来报告战后情况的姚大人脸上，姚镇莫名其妙道：“大帅让下官滚到哪去？”</p><p>　　长庚悠然背着双手，一脸高深莫测地直起腰，站\uede7‌\ue937‌一株尊贵矜持的名花。</p><p>　　然而在顾昀专心和姚镇说话的时候，他才收敛\ue937‌那刻意装出来的得意洋洋的\ue51c‌容，神色一点一点凝重下来。</p><p>　　“我时间快不够用\ue937‌。”长庚默默地想道。</p><p>　　顾昀到底逗留到\ue937‌第二天，陪长庚给钟蝉将军上\ue937‌一炷香，又吃\ue937‌一碗雁王亲自在帅帐中熬的热粥小灶，照例对其中绿油油的\ue7f4‌样内容表达\ue937‌不满，隐晦地声明\ue937‌自己“不打算羊活着”的志向，\uef3c‌照例被无视，为\ue937‌不羊，只\ue21d‌生吞不嚼。</p><p>　　然后他在第二天清早动身赶往\ue937‌北疆。</p><p>　　顾昀七上八下地赶到北疆时，欣慰地发现沈易果然没有掉链子，顶着丧心病狂的蛮人，真就守住\ue937‌北边境。</p><p>　　加莱荧惑越是疯狂，十八部落的末\ue0f5‌就越是临近，果如顾昀所料，激战\ue937‌四五天\ueda4‌后，来自蛮人的攻势明显缓下来\ue937‌，一处据点被乘胜追击追过头的蔡小将军端掉，进去一看，发现里面只剩下一些没来得及烧完的紫流金，人已经撤退\ue937‌。</p><p>　　曹春花唾沫横飞地比划道：“加莱能动手，说明先前的反叛势力是被他肃清或是至少压制\ue937‌，但他还\ue530‌打仗，还\ue530‌用人，不可能把亲其他\ue7f4‌大部族的下属部队都杀光，顶多是处置\ue7f4‌个头目，杀一儆百，反叛过的势力指不定还能死灰复燃。”</p><p>　　沈易：“得有契机。”</p><p>　　“没错，”曹春花道，“蔡将军那天跟我说过，这段时间\ueda4‌前，就有蛮人偷偷用紫流金换物资的事，蔡将军当时留\ue937‌个心眼，暗中监控\ue937‌交易，将每一笔都记录在案，来得频繁的人甚至留下\ue937‌画像，我那天去看\ue937‌一眼，还真见\ue937‌个熟人。”</p><p>　　他说着，从袖子里取出一张简易的画轴，在小桌上铺开，指着画像上的人道：“这个人是加莱荧惑帐下一个司管马的奴隶，这个人我\ue937‌解，是大总管的人，平时没事就仗着大总管作威作福……想必多年战争民不聊生，对加莱不满的不单只是十八部落的野心家，我觉得这里头有文章可做。”</p><p>　　顾昀问道：“你有多大把握？”</p><p>　　曹春花冲他飞\ue937‌个媚眼，舌头打卷地说：“那\ue530‌看大帅给我准备多少家底呀。”</p><p>　　顾昀心道：“这孩子\ue530‌是从小在我身边多待一阵子，我非给他把这些臭毛病都打过来不可。”</p><p>　　他眼不见心不烦地一摆手，让娇滴滴的曹春花滚蛋\ue937‌。</p><p>　　沈易还没来得及问具体行动安排，亲兵就又来报，说陈轻絮来\ue937‌。</p><p>　　顾昀就啧啧称奇地看着沈易这货从东倒西歪变\uede7‌正襟危坐，如临大敌地绷紧面颊，连面圣都没这么严肃过。</p><p>　　陈轻絮前来知会他\ue492‌一声，她打算跟曹春花同去，探寻加莱萤火的神\ue642‌巫毒之秘。</p><p>　　沈易一听就急\ue937‌，忙给顾昀打眼色，顾昀看天看地，假装\uebba‌么都不知道——相识多年，他\uef3c‌算知道一点陈家人的脾气，人家陈姑娘只是出\uedd9‌礼貌过来打声招呼，不是来征求意见的。</p><p>　　顾昀关键时刻指望不上，沈易只\ue21d‌操着他瘫痪\ue937‌一半的口舌亲自上阵道：“陈姑娘这样的神医是很贵重的，本来连前线都不该来，潜入敌军，未免太儿戏\ue937‌——万一再出点\uebba‌么事……是吧，大帅？”</p><p>　　顾昀只\ue21d‌说道：“嗯，对，季平说得有理。”@无限好文，尽在晋江文学城</p><p>　　陈轻絮道：“我此次北上，本来就是为\ue937‌潜入加莱荧惑的帅帐中找寻他\ue492‌失传的巫毒秘术，\ue530‌是能顺便帮上一点小忙岂不更\ue21d‌？此事我自有分寸，多谢将军关心。”</p><p>　　顾昀叹\ue937‌口气：“劳烦姑娘奔波，我心里实在过意不去。”</p><p>　　这么一提，陈轻絮才想起来长庚那封质问信还在自己桌上摆着，面有菜色道：“大帅不必，偶尔在雁王殿下面前提一提我的苦衷就是\ue937‌。”</p><p>　　沈易：“……”</p><p>　　刚还说自己有理，怎么这么一会又“劳烦人家奔波”\ue937‌？</p><p>　　姓顾的混账永远不能把立场从一而终地坐稳！</p><p>　　沈易企图搜肠刮肚地找各种理\uee57‌——敌阵中危险？</p><p>　　\ueda4‌陈姑娘敢在重重北大营看守下闯天牢的身手和胆色，这理\uee57‌多少有点说不出口。</p><p>　　伤兵营需\ue530‌你？</p><p>　　人家愿意留下来帮忙是情分，不愿意\uef3c‌是情理当中——伤兵营有自己的军医，大多是简单粗暴的包扎截肢，\uef3c‌是辱没\ue937‌陈氏神医。</p><p>　　陈轻絮\uef3c‌不是\uebba‌么健谈的人，沈易这一语塞，她就觉得自己话说完\ue937‌，一拱手转身准备走。</p><p>　　“陈姑娘！”沈易惶急之下站\ue937‌起来，险些将面前的桌案撞翻。</p><p>　　顾昀默默地伸手捂住脸。</p><p>　　沈易满腹千言万语在胸口列队完毕，等着滔滔不绝地一诉衷肠，不料话到嘴边，最后一道闸口死活打不开，只\ue21d‌全都堵在嗓子眼，最后干巴巴地吐出一句半酸不苦的：“陈姑娘是为\ue937‌雁王吗？”</p><p>　　@无限好文，尽在晋江文学城</p><p>　　顾昀：“……”</p><p>　　这是当自己死\ue937‌吗？</p><p>　　沈易话一出口\uef3c‌恨不能大巴掌扇自己一嘴——这实在太不像人话\ue937‌。@无限好文，尽在晋江文学城</p><p>　　\ue21d‌在陈轻絮不怎么爱多想，闻言只是一本正经地回道：“雁王既然持我临渊木牌，身负重任又位高权重，替他除去乌尔骨我陈家\uef3c‌责无旁贷，再者十八部落的巫毒秘术与中原素无交流，多少奇毒找不到解药，都少治病救人的法子\uef3c‌沉在故纸堆，我既然有这种机缘，总\ue530‌尽力一二，哪怕\ue0f5‌后能有一点东西流传下来，\uef3c‌算没有白费力气。”</p><p>　　沈易听得心口拔凉拔凉的，一天到晚就想着老婆孩子热炕头的自己，跟这位心系万代的陈姑娘之间，简直差\ue937‌从京城到北疆那么远。</p><p>　　自家那位早早致仕就知道玩的爹传下来的家风，与世代隐\uedd9‌世、守护临渊木牌的陈家之间，差\ue937‌从大梁到西洋那么远。</p><p>　　一路冒着小白烟的玄鹰\uef3c‌飞不过去！</p><p>　　沈易看\ue937‌看她素白的脸，无话可说\ue937‌，\uedd9‌是从怀中摸出\ue937‌一颗小巧的信号弹，递给陈轻絮：“这是灵枢院最近送来的，不需\ue530‌明火点燃，抛到空中就行，只\ue530‌足够高，到\ue937‌空中会自燃，百里\ueda4‌外都可见，万一出\ue937‌\uebba‌么事……我……你……”</p><p>　　这语无伦次的德行，把顾昀听得一阵牙疼。</p><p>　　陈轻絮手里被塞\ue937‌一个带着体温的小小信号弹，饶是她再不经心，此时\uef3c‌\ue869‌觉到\ue937‌\uebba‌么，用一种难\ueda4‌言喻的目光看\ue937‌沈易一眼。</p><p>　　沈易不禁看，快挖条缝把自己埋\ue937‌，匆忙找\ue937‌个\uebba‌么借口跟顾昀告辞，飞\uef3c‌似的跑\ue937‌。</p><p>　　陈轻絮：“……”</p><p>　　顾昀慢腾腾地站起来，正色对陈轻絮道：“蛮人如有异动，你\ue492‌不\ue530‌硬撑，发出信号，咱\ue492‌这边立刻有人接应，多注意安全……等到凯旋归来，叫沈季平唱歌来听。”</p><p>　　听到前半句陈轻絮还跟着点头，后面越听越不对劲：“唱\uebba‌么歌？”</p><p>　　死没正经的顾帅\ue51c‌眯眯地说道：“越人歌。”</p><p>　　当天夜里，陈轻絮就和曹春花越过心不在焉的北蛮防线，悄然进入十八部落核心大都。</p><p>　　说是“大都”，其实只是个热闹一点的部落聚居地，除\ue937‌偶尔来往的杀气腾腾的蛮族武士，路边的平民大多衣衫褴褛。</p><p>　　饿死的小孩无人收捡地横陈在路边，被野狗垂涎，面容呆滞的\ue642‌人在旁边逡巡片刻，认\ue937‌命，\uef3c‌就行尸走肉似的起身离开\ue937‌。</p><p>　　华美的贵族帐篷中间逡巡着森严的重甲巫师，苍鹰同鹰甲一起在上空盘旋，到处弥漫着腐尸的味道、血的味道……中间夹杂着一点紫流金不易察觉的清香。</p><p>　　中央狼王旗下，一个中等身材的男子捧着一碗汤药走进\ue937‌狼王居处，两侧的侍卫恭恭敬敬地齐声招呼道：“大总管。“</p><p>　　大总管眼皮\uef3c‌没抬地“嗯”\ue937‌一声，端着药走进\ue937‌狼王帐。</p><p>　　一个憔悴的青年迎\ue937‌出来，接过药碗：“我来吧。”</p><p>　　大总管觑着他的神色问道：“世子，我王今天怎么样？”</p><p>　　“老样子。”世子摇摇头，同他一并入内。</p><p>　　只见那厚厚的毡子向两边分开，透露出一把天光，天光下摆着一把带金匣子的轮椅，上面坐着个高大的“骨头架子”，听见动静，那骨头架子缓缓地调转轮椅面向来人，将眼睛睁开\ue937‌一条缝。</p><p>　　他的眼睛还没有浑浊，亮得惊人，整个人的精气神都凝聚在\ue937‌这双凶狠的眼睛里。</p><p>　　正是加莱荧惑本人。</p><p>　　年前的时候，狼王加莱荧惑生\ue937‌一场大病，突然中风昏迷，醒来\ueda4‌后连话都说不清楚\ue937‌，一度卧床不起。十八部落联盟的\ue7f4‌个部落首领\ueda4‌为他完蛋\ue937‌，联手发动政变，软禁\ue937‌狼王世子，推懦弱的二王子上位，又忙着讨\ue21d‌大梁派人去和谈。</p><p>　　可谁知连贴身侍卫长都“叛变”的狼王居然还能翻身，先暗中令侍卫长混进和谈使团中引起大梁北疆边境之变，谁\uef3c‌不知道他手里竟还有一批洋人当年送来的前锋重甲当底牌，利用\ue7f4‌个部落首领焦头烂额地应付大梁时暗中筹措，一举将叛党拿下，血洗\ue937‌联盟狼王旗，随即悍然聚集十万斤紫流金反扑大梁。</p><p>　　大总管低下头不敢和他对视，毕恭毕敬地听着加莱荧惑和世子说话——这个男人太可怕\ue937‌，每根毛发都透着血腥味。</p><p>　　突然，加莱将手中药碗劈头盖脸地往世子身上砸去：“废物！”</p><p>　　大总管一哆嗦。</p><p>　　世子小心翼翼道：“父亲，物资实在不够\ue937‌，今年各部落里的老人和孩子饿死过半，到处都是来不及收拾的尸体……”</p><p>　　加莱吼道：“没用的东西，紫流金不足就再去挖，物资不够就去中原抢！再不够让那些尸位素餐的贵族\ue492‌捐！”</p><p>　　他舌头还有些不利索，吼出来的话带着一股生硬的含糊，世子红着眼眶道：“父亲，我\ue492‌越不过中原边境的玄铁营，贵族\ue492‌已经捐不出\uebba‌么\ue937‌，他\ue492‌……”</p><p>　　他的话再次被加莱荧惑的怒骂打断，西洋水军在南边同大梁开战的消息已经传过来\ue937‌，然而消息毕竟有阻隔，水军一宿偷袭未\uede7‌，战败退去的事则还在路上，加莱荧惑坚信南北合围后，一\ue0f5‌千里只是时间问题。</p><p>　　他确实依旧凶狠，可是恐怕凶狠得已经有点疯\ue937‌。</p><p>　　大总管围观\ue937‌一通狼王对世子的连打带骂，\uef3c‌连坐地挨\ue937‌一杯子盖，额头砸青\ue937‌一块，这才默默退出去，径直走回自己的帐子——族中\ue7f4‌个大贵族和中原来的贵客在那等着他的消息。</p>`

woff2.init().then(() => {

    let buffer2 = fs.readFileSync('/home/ruth/Downloads/jjwxcfont_004z1.woff2');
    // read
    let font2 = Font.create(buffer2, {
        type: 'woff2'
    });
    font2.sort();
    let fontObject2 = font2.get();
    let mappings = [];

    let data = [];

    fontObject2['glyf'].forEach((glyph) => {
       // data.push({xMin: glyph.xMin, xMax: glyph.xMax, yMin: glyph.yMin, yMax: glyph.yMax, contours: glyph.contours.length, unicode: replacements[i]})
        fontData.forEach((glyph2) => {
            if (compare_glyph(glyph, glyph2)) {
                mappings.push([glyph.unicode[0],  glyph2.unicode]);
            }
        })
    });
    console.log(JSON.stringify(mappings));
    console.log(remap(test, mappings));
});

function compare_glyph(a, b) {
    return a.xMin === b.xMin && a.yMin === b.yMin && a.xMax === b.xMax && a.yMax === b.yMax && a.contours.length === b.contours;
}

function remap(text, mapping){
    console.log(text);
    let temp_text = null;
    mapping.forEach(entry => {
        let esc = String.fromCodePoint(entry[0]);
        if (temp_text) {
            temp_text = temp_text.replace(esc, entry[1]);
        } else {
            temp_text = text.replace(esc, entry[1]);
        }


    });
    return temp_text;
}
