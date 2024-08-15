using Microsoft.AspNetCore.Mvc;

namespace testing_pwa.Controllers;

[Route("[controller]")]
[ApiController]
public class PwaTestingController : ControllerBase
{

    [HttpPost]
    public async Task<ActionResult> SaveImage(IFormFile image)
    {
        Console.WriteLine("Funcionou");

        if (image is null || image.Length == 0)
            return BadRequest("An image is required");

        var filePath = Path.Combine("wwwroot/images", image.FileName);

        var fileStream = new FileStream(filePath, FileMode.Create);
        await image.CopyToAsync(fileStream);

        return Ok(new { filePath });
    }

    [HttpGet]
    public ActionResult<string> GetNetWorkInformation(string networkInformation)
    {
        if (string.IsNullOrEmpty(networkInformation))
            return BadRequest("Network information is empty ma dude");

        Console.WriteLine(networkInformation);

        return Ok("Network information read, check application console for more");
    }


}