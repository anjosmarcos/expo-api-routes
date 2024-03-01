import { ExpoRequest, ExpoResponse } from 'expo-router/server'

export async function POST(resquest: ExpoRequest): Promise<ExpoResponse> {
    const {email, password} = await resquest.json()
    
    if(email === "marcos@teste.com" && password === "123") {
        return ExpoResponse.json({
            email, 
            name: "Marcos Alexandre",
         })
    }

    return new ExpoResponse("Usuaro ou senha invalidos", {
        status: 404,
        headers: {
            'Content-Type': 'text/plain',
        },
    })
    
}