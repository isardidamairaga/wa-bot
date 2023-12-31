const qrcode = require('qrcode-terminal');
const { Client,LocalAuth } = require('whatsapp-web.js');
const client = new Client({authStrategy: new LocalAuth()});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    if (message.body === 'Hai') {
        const jenisSuratMessage = `Halo! Selamat datang di Layanan Bot Surat Desa Karanganom. Silakan pilih nomor untuk jenis surat yang Anda butuhkan:\n\n1. Surat Keterangan Domisili\n2. Surat Keterangan Kelahiran\n3. Surat Keterangan Nikah\n4. Surat Keterangan Kematian\n5. Surat Keterangan Tidak Mampu\n6. Surat Keterangan Usaha\n7. Surat Keterangan Bebas Pajak`;
        await message.reply(jenisSuratMessage);
    } else if (message.body === '1' || message.body === '2' || message.body === '3' || message.body === '4' || message.body === '5' || message.body === '6' || message.body === '7') {
        const nomorSurat = parseInt(message.body);
        const detailSuratMessage = `Terima kasih! Isardi Dama Iraga memang tampan .`;
        await message.reply(detailSuratMessage);
        
    } else {
        await message.reply('Maaf, permintaan Anda tidak dapat diproses. Silakan coba lagi atau hubungi admin.');
    }
});

client.initialize();