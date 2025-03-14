function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto text-center">
                    <p>{new Date().getFullYear()} &copy; Mercado. Todos os Direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;