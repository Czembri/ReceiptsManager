using API.Entities;
using API.Services;

namespace API.Interfaces
{
    public interface ITokenService
    {
        TokenStruct CreateToken(AppUser user);
    }
}