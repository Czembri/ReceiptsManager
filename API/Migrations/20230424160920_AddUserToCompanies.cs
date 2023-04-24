using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddUserToCompanies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AppUserId",
                table: "CompanyInfo",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CompanyInfo_AppUserId",
                table: "CompanyInfo",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompanyInfo_Users_AppUserId",
                table: "CompanyInfo",
                column: "AppUserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompanyInfo_Users_AppUserId",
                table: "CompanyInfo");

            migrationBuilder.DropIndex(
                name: "IX_CompanyInfo_AppUserId",
                table: "CompanyInfo");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "CompanyInfo");
        }
    }
}
