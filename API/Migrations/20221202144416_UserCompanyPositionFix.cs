using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class UserCompanyPositionFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "CompanyInfo");

            migrationBuilder.AddColumn<int>(
                name: "Position",
                table: "UserCompany",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "UserCompany");

            migrationBuilder.AddColumn<int>(
                name: "Position",
                table: "CompanyInfo",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
