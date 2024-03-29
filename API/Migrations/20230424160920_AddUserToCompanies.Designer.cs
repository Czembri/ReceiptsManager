﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20230424160920_AddUserToCompanies")]
    partial class AddUserToCompanies
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("bytea");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("bytea");

                    b.Property<string>("UserName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entities.Browser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ColumnDefinitions")
                        .HasColumnType("text");

                    b.Property<string>("GridOptions")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Browser");
                });

            modelBuilder.Entity("API.Entities.CompanyInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<int?>("AppUserId")
                        .HasColumnType("integer");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("CompanyName")
                        .HasColumnType("text");

                    b.Property<int>("CompanyType")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Nip")
                        .HasColumnType("text");

                    b.Property<string>("PostalCode")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AppUserId");

                    b.ToTable("CompanyInfo");
                });

            modelBuilder.Entity("API.Entities.PaymentInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("PaymentType")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("PaymentInfo");
                });

            modelBuilder.Entity("API.Entities.Receipt", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int?>("AppUserId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Created")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int?>("PaymentInfoId")
                        .HasColumnType("integer");

                    b.Property<string>("ReceiptNumber")
                        .HasColumnType("text");

                    b.Property<int?>("ShopId")
                        .HasColumnType("integer");

                    b.Property<string>("Total")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AppUserId");

                    b.HasIndex("PaymentInfoId");

                    b.HasIndex("ShopId");

                    b.ToTable("Receipt");
                });

            modelBuilder.Entity("API.Entities.ReceiptPosition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Amount")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<int?>("ReceiptId")
                        .HasColumnType("integer");

                    b.Property<int?>("VatRateId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ReceiptId");

                    b.HasIndex("VatRateId");

                    b.ToTable("ReceiptPosition");
                });

            modelBuilder.Entity("API.Entities.UserInfo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<int?>("AppUserId")
                        .HasColumnType("integer");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("PostalCode")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AppUserId");

                    b.ToTable("UserInfo");
                });

            modelBuilder.Entity("API.Entities.VatRate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Percent")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("VatRate");
                });

            modelBuilder.Entity("API.Entities.CompanyInfo", b =>
                {
                    b.HasOne("API.Entities.AppUser", "AppUser")
                        .WithMany()
                        .HasForeignKey("AppUserId");

                    b.Navigation("AppUser");
                });

            modelBuilder.Entity("API.Entities.Receipt", b =>
                {
                    b.HasOne("API.Entities.AppUser", "AppUser")
                        .WithMany()
                        .HasForeignKey("AppUserId");

                    b.HasOne("API.Entities.PaymentInfo", "PaymentInfo")
                        .WithMany()
                        .HasForeignKey("PaymentInfoId");

                    b.HasOne("API.Entities.CompanyInfo", "Shop")
                        .WithMany()
                        .HasForeignKey("ShopId");

                    b.Navigation("AppUser");

                    b.Navigation("PaymentInfo");

                    b.Navigation("Shop");
                });

            modelBuilder.Entity("API.Entities.ReceiptPosition", b =>
                {
                    b.HasOne("API.Entities.Receipt", "Receipt")
                        .WithMany("ReceiptPositions")
                        .HasForeignKey("ReceiptId");

                    b.HasOne("API.Entities.VatRate", "VatRate")
                        .WithMany()
                        .HasForeignKey("VatRateId");

                    b.Navigation("Receipt");

                    b.Navigation("VatRate");
                });

            modelBuilder.Entity("API.Entities.UserInfo", b =>
                {
                    b.HasOne("API.Entities.AppUser", "AppUser")
                        .WithMany("UserInfos")
                        .HasForeignKey("AppUserId");

                    b.Navigation("AppUser");
                });

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.Navigation("UserInfos");
                });

            modelBuilder.Entity("API.Entities.Receipt", b =>
                {
                    b.Navigation("ReceiptPositions");
                });
#pragma warning restore 612, 618
        }
    }
}
