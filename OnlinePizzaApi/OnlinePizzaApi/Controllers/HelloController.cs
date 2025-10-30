using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OnlinePizzaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        //Exposing Country Details XD
        //Exposing trains :)
        //movie deatails X-X
        //       |
        //       ^

        [HttpGet]
        [Route("Countries")]
        public string[] Countries()
        {
            string[] countries = {"india","usa", "uk", "canada", "australia"};

            return countries;
        }

        [HttpGet]
        [Route("Students")]
        public string[] Students()
        {
            string[] stu = { "Raj", "viki", "jay", "ajau" };
            return stu;
        }


        [HttpGet]
        [Route("StudentsById/{id}")]
        public string[] Students(string id)
        {
            string[] stu = { "Ajith", "viki", "jay", "Ajau" };

            return stu.Where(c=>c.StartsWith(id)).ToArray();
        }
    }
}
