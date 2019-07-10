using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebApp.Models
{
    public class CompanyDevelopersInitializer : DropCreateDatabaseAlways<CompanyDevelopersContext>
    {
        protected override void Seed(CompanyDevelopersContext db)
        {   
            
            Employee emp1 = new Employee { id = 1, fio = "Макаров Александр Петрович", price = 30000, id_company = 1 };
            Employee emp2 = new Employee { id = 2, fio = "Петров Константин Евгеньевич", price = 60000, id_company = 2 };
            Employee emp3 = new Employee { id = 3, fio = "Кинзов Максим Павлович", price = 80000, id_company = 3 };
            Employee emp4 = new Employee { id = 4, fio = "Муртазин Олег Константинович", price = 130000, id_company = 4 };
            db.Employees.Add(emp1);
            db.Employees.Add(emp2);
            db.Employees.Add(emp3);
            db.Employees.Add(emp4);

            Product p1 = new Product { id = 1, name = "Siam", version = 1, type_license = "Free", license_period = 712, id_company = 1 };
            Product p2 = new Product { id = 2, name = "PGVP", version = 1.2, type_license = "Shareware", license_period = 1024, id_company = 2 };
            Product p3 = new Product { id = 3, name = "KMPS", version = 1.8, type_license = "Shareware", license_period = 712, id_company = 3 };
            Product p4 = new Product { id = 4, name = "ALUV", version = 3.2, type_license = "Free", license_period = 365, id_company = 4 };
            db.Products.Add(p1);
            db.Products.Add(p2);
            db.Products.Add(p3);
            db.Products.Add(p4);

            db.Companies.Add(new Company { id = 1, name = "EPAM", main_address = "Россия, Самара, ул.Мичурина, 21", main_number = "+7 (846) 200-09-70", count_employee = 150, Employees = new List<Employee>() {emp1}, Products = new List<Product>() {p1} });
            db.Companies.Add(new Company { id = 2, name = "Netcracker", main_address = "Московское ш., 4А, стр. 2, Самара ", main_number = "+7 (846) 270-78-00", count_employee = 200, Employees = new List<Employee>() { emp2 }, Products = new List<Product>() { p2 } });
            db.Companies.Add(new Company { id = 3, name = "Softlink", main_address = "Революционная ул., 70, стр. 3,", main_number = "+7 (846) 302‑64-88", count_employee = 50, Employees = new List<Employee>() { emp3 }, Products = new List<Product>() { p3 } });
            db.Companies.Add(new Company { id = 4, name = "Haulmont", main_address = "ул. Гастелло, 43А, Самара", main_number = "+7 (846) 273-94-87", count_employee = 130, Employees = new List<Employee>() { emp4 }, Products = new List<Product>() { p4 } });


            db.Users.Add(new User { id = 1, login = "Admin", password = "0000" });
            db.Users.Add(new User { id = 2, login = "Boss", password = "1111" });
            db.Users.Add(new User { id = 3, login = "Man", password = "2222" });

            base.Seed(db);
        }
    }
}