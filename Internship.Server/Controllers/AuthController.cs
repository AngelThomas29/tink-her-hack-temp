using Microsoft.AspNetCore.Mvc;
using Internship.Server.Data;
using Internship.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Internship.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(User loginUser)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginUser.Email
                                       && u.Password == loginUser.Password);

            if (user == null)
                return Unauthorized();

            return Ok(user);
        }
    }
}

