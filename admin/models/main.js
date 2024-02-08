module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"main",
		{
			img_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				comment: "이미지 고유번호",
			},
            carousel_id: {
                type: DataTypes.STRING(2),
                allowNull: false,
                comment:"0:outer, 1:inner, 2:food"
            },
            img_path: {
                type: DataTypes.STRING(200),
                allowNull: false,
                comment: "이미지 경로",
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
			comment: "메인 이미지 테이블",
			indexes: [
				{
					name: "PRIMARY",
					unique: true,
					using: "BTREE",
					fields: [{ name: "img_id" }],
				},
			],
		}
	);
};