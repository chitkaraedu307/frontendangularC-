using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using OnlinePizzaApi.Models;
using System.Linq.Dynamic.Core;
namespace OnlinePizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyPizaaController : ControllerBase
    {
        //curd Operations

        pizzadbContext db = new pizzadbContext();
        //[Produces("application/xml")]
        [HttpGet]
        [Route("showAll")]
        [EnableQuery]
        public List<Pizza> Show()
        {
            return db.Pizzas.ToList();
        }

        [HttpGet]
        [Route("showbyname")]

        public IActionResult ShowByName(string pizzaname)
        {
            var res = db.Pizzas.Where(c => c.Pizzaname == pizzaname).FirstOrDefault();
            if (res == null) //404
            {
                return NotFound();
            }
            else //204
            {
                return Ok(res);
            }
        }


        //[HttpPost]
        //[Route("Addpizza")]
        //public IActionResult AddPizza(Pizza obj)
        //{
        //    db.Pizzas.Add(obj);
        //    var res= db.SaveChanges();

        //    return (res > 0) ? Ok(res) : BadRequest();
        //}


        [HttpPost]
        [Route("Adduser")]
        public IActionResult AddUser(Register obj)
        {

            db.Registers.Add(obj);
            var res = db.SaveChanges();
            if (res > 0)
            {
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }

        }
        [HttpPost]
        [Route("login")]
        public IActionResult Login(Register obj)
        {

            var res = db.Registers.Where(c => c.Uname == obj.Uname && c.Password == obj.Password);

            if (res.Count() > 0)
            {
                return Ok(1);
            }
            else
            {
                return Ok(0);
            }

        }
        [HttpPost]
        [Route("Buy")]
        public IActionResult Buy(Userorder obj)
        {

            db.Userorders.Add(obj);
            var res = db.SaveChanges();
            if (res > 0)
            {
                return Ok(res);
            }
            else
            {
                return BadRequest();
            }


        }

        [HttpPut]
        [Route("Updatepizza")]
        public IActionResult UpdatePizza(Pizza obj, string id)
        {

            //var find = db.Pizzas.Where(c => c.Pizzaid == id).FirstOrDefault();

            //if (find == null)
            //{
            //    return NotFound();
            //}

            //find.Pizzaname = obj.Pizzaid;
            //find.Pizzaname = obj.Pizzaname;
            //find.Price = obj.Price;
            //find.Description=obj.


            //db.Pizzas.Update(find);
            //var res = db.SaveChanges();

            db.Update(obj);
            var res = db.SaveChanges();

            return (res > 0) ? Ok(res) : BadRequest();
        }

        [HttpDelete]
        [Route("Deletepizza")]
        public IActionResult DeletePizza(string id)
        {
            db.Pizzas.Remove(db.Pizzas.Find(id));
            var res = db.SaveChanges();

            return (res > 0) ? Ok("Total Records Deleted is " + res) : BadRequest();
        }

        [HttpGet]
        [Route("sortbyname")]
        public List<Pizza> sortbyname(string Name)
        {
            var res = db.Pizzas.AsQueryable().OrderBy($"Pizzaname == \"{Name}\"");
            return res.ToList();

        }

        [HttpGet]
        [Route("pagging")]
        public List<Pizza> DisplayPage(string pagenumber, string pagesize)
        {

            return db.Pizzas.Skip((Convert.ToInt32(pagenumber) - 1) * Convert.ToInt32(pagesize)).Take(Convert.ToInt32(pagesize)).ToList();

        }

        [HttpGet]
        [Route("filter")]
        public List<Pizza> Filter(string Name)
        {
            var res = db.Pizzas.AsQueryable().Where(c=>c.Pizzaname==Name);
            return res.ToList();

        }
    }
}
