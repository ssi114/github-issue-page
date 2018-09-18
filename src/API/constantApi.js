export const BaseUrl = "https://api.github.com/";

export const EndPoint = {
    list: {
        method: "GET",
        getUrl: (user, repositorie) => `repos/${user}/${repositorie}/issues`
    }
}