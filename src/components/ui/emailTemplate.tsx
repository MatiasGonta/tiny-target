import { TINY_TARGET_URL } from "@/constants";

export function EmailTemplate({ forgetURL }: { forgetURL: string }) {
    return (
        <table cellSpacing="0" border={0} cellPadding="0" width="100%" style={{ backgroundColor: '#f2f3f8', fontFamily: 'Open Sans, sans-serif', borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td>
                        <table style={{ backgroundColor: '#f2f3f8', maxWidth: '670px', margin: '0 auto' }} width="100%" border={0} align="center" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td style={{ height: '80px' }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <a href={TINY_TARGET_URL} title="tiny target logo" target="_blank" style={{ textDecoration: 'none' }}>
                                            <h2 style={{ color: '#8e7054', fontWeight: 700, margin: '0 auto', fontSize: '40px', textDecoration: 'none', fontFamily: 'Rubik, sans-serif' }}>Tiny Target URLs</h2>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ height: '20px' }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="95%" border={0} align="center" cellPadding="0" cellSpacing="0" style={{ maxWidth: '670px', background: '#fff', borderRadius: '3px', textAlign: 'center', boxShadow: '0 6px 18px 0 rgba(0,0,0,.06)' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ height: '40px' }}>&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '0 35px' }}>
                                                        <h1 style={{ color: '#1e1e2d', fontWeight: 500, margin: 0, fontSize: '32px', fontFamily: 'Rubik, sans-serif' }}>
                                                            Ha solicitado restablecer su contraseña
                                                        </h1>
                                                        <span style={{ display: 'inline-block', verticalAlign: 'middle', margin: '29px 0 26px', borderBottom: '1px solid #cecece', width: '100px' }}></span>
                                                        <p style={{ color: '#455056', fontSize: '15px', lineHeight: '24px', margin: 0 }}>
                                                            No podemos simplemente enviarle su antigua contraseña. Se ha generado para usted un enlace único para restablecer su contraseña. Para restablecer su contraseña, haga clic en el siguiente enlace y siga las instrucciones.
                                                        </p>
                                                        <a href={forgetURL} style={{ background: '#8e7054', textDecoration: 'none !important', fontWeight: 500, marginTop: '35px', color: '#fff', textTransform: 'uppercase', fontSize: '14px', padding: '10px 24px', display: 'inline-block', borderRadius: '50px' }}>
                                                            Restablecer contraseña
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ height: '40px' }}>&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ height: '20px' }}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: '14px', color: '#202020', lineHeight: '18px', margin: '0 0 0' }}>
                                            &copy; <strong style={{ color: '#202020' }}>{TINY_TARGET_URL}</strong>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ height: '80px' }}>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}  