module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"menu",
		{
			menu_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				comment: "메뉴 고유번호",
			},
			category: {
				type: DataTypes.STRING(100),
				allowNull: false,
				comment: "메뉴 카테고리",
			},
			item_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
				comment: "메뉴 이름",
			},
			price: {
				type: DataTypes.STRING(100),
				allowNull: false,
				comment: "메뉴 가격",
			},
			detail: {
				type: DataTypes.STRING(500),
				allowNull: false,
				comment: "메뉴 설명",
			},
			pin: {
				type: DataTypes.TINYINT,
				allowNull: false,
				comment: "상단 고정 여부 1:고정 0:고정안함",
			},
			reg_date: {
				type: DataTypes.DATE,
				allowNull: false,
				comment: "등록일시",
			},
		},
		{
			sequelize,
			timestamps: false,
			comment: "메뉴 테이블",
			indexes: [
				{
					name: "PRIMARY",
					unique: true,
					using: "BTREE",
					fields: [{ name: "menu_id" }],
				},
			],
		}
	);
};
