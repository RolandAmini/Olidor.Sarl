import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    const validUsername = process.env.ADMIN_USERNAME
    const validPasswordHash = process.env.ADMIN_PASSWORD_HASH
    const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET)

    // --- AJOUTS TEMPORAIRES POUR DEBUG ---
    console.log("Utilisateur reçu:", username, "| Attendu:", validUsername)
    console.log("Mot de passe reçu:", password)
    console.log("Hash en base:", validPasswordHash)
    // ------------------------------------

    if (username !== validUsername) {
      return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, validPasswordHash || '')
    console.log("Le mot de passe est-il valide ?", isPasswordValid) // Debug

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Identifiants invalides' }, { status: 401 })
    }

    const token = await new SignJWT({ role: 'admin', user: username })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('2h')
      .sign(jwtSecret)

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7200,
    })

    return response
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}