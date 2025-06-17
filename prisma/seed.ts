// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.destination.createMany({
  data: [
    {
      name: 'Bali',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Bali dikenal sebagai Pulau Dewata, terkenal karena pantai-pantai indah seperti Kuta dan Seminyak, budaya Hindu yang kental, upacara adat unik, serta seni tari dan lukis yang mendunia. Pulau ini juga menjadi destinasi favorit wisatawan lokal maupun mancanegara.'
    },
    {
      name: 'Yogyakarta',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Yogyakarta adalah kota budaya yang menawarkan beragam situs sejarah seperti Candi Prambanan, Keraton Yogyakarta, dan Malioboro. Selain kekayaan budaya, kota ini juga dikenal dengan batik, seni tradisional, serta kuliner khas seperti gudeg yang menggugah selera.'
    },
    {
      name: 'Raja Ampat',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Raja Ampat adalah surga bawah laut di Papua Barat yang memiliki biodiversitas laut tertinggi di dunia. Dengan air laut yang jernih, pulau-pulau karst, serta terumbu karang yang menakjubkan, Raja Ampat menjadi impian para penyelam dari seluruh penjuru dunia.'
    },
    {
      name: 'Lombok',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Lombok menawarkan keindahan alam yang masih alami dengan pantai seperti Tanjung Aan dan Pink Beach. Gunung Rinjani yang megah juga menjadi favorit para pendaki. Selain itu, budaya Sasak yang unik memberikan nilai tambah bagi pengalaman wisata di pulau ini.'
    },
    {
      name: 'Labuan Bajo',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Labuan Bajo merupakan pintu masuk menuju Taman Nasional Komodo. Selain melihat komodo, wisatawan dapat menikmati keindahan Pulau Padar, Pink Beach, dan menyelam di perairan jernih yang kaya akan biota laut. Kota ini juga berkembang menjadi destinasi wisata premium.'
    },
    {
      name: 'Bandung',
      location: 'Indonesia',
      climate: 'Dingin sedang',
      description: 'Bandung adalah kota dengan udara sejuk dan dijuluki sebagai Paris van Java. Dikenal dengan kuliner khas seperti batagor dan seblak, kota ini juga menjadi pusat kreatif dan fashion, serta memiliki tempat wisata alam seperti Kawah Putih dan Tangkuban Perahu.'
    },
    {
      name: 'Danau Toba',
      location: 'Indonesia',
      climate: 'Dingin sedang',
      description: 'Danau Toba adalah danau vulkanik terbesar di Asia Tenggara yang terletak di Sumatera Utara. Di tengah danau terdapat Pulau Samosir, yang menjadi pusat budaya Batak. Keindahan danau ini berpadu dengan suasana tenang dan udara segar pegunungan.'
    },
    {
      name: 'Bromo',
      location: 'Indonesia',
      climate: 'Dingin',
      description: 'Gunung Bromo merupakan salah satu destinasi favorit di Jawa Timur dengan pemandangan matahari terbit yang luar biasa. Kawah aktifnya dapat dikunjungi dengan berjalan kaki atau menunggang kuda, dan dikelilingi oleh lautan pasir yang eksotis dan unik.'
    },
    {
      name: 'Wakatobi',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Wakatobi merupakan taman nasional laut yang terletak di Sulawesi Tenggara, terkenal sebagai salah satu lokasi menyelam terbaik dunia. Airnya sangat jernih dan memiliki ribuan jenis ikan serta terumbu karang yang indah dan terjaga dengan baik.'
    },
    {
      name: 'Tana Toraja',
      location: 'Indonesia',
      climate: 'Tropis pegunungan',
      description: 'Tana Toraja memiliki tradisi pemakaman unik dan rumah adat Tongkonan yang khas. Terletak di Sulawesi Selatan, daerah ini menarik wisatawan yang ingin melihat budaya otentik Indonesia yang masih lestari, termasuk ritual-ritual adat yang megah dan sakral.'
    },
    {
      name: 'Belitung',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Belitung memiliki pantai dengan batu granit raksasa dan air laut yang jernih. Pulau ini juga dikenal lewat film "Laskar Pelangi", yang mengangkat keindahan dan nilai pendidikan dari daerah ini. Kuliner seafood segar juga menjadi daya tarik utama di sini.'
    },
    {
      name: 'Pulau Derawan',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Pulau Derawan terletak di Kalimantan Timur dan terkenal dengan pantai putih, laut biru, serta keberadaan penyu hijau yang datang bertelur. Pulau ini juga menawarkan pengalaman menyelam dan snorkeling yang luar biasa dengan keanekaragaman biota laut.'
    },
    {
      name: 'Kawah Ijen',
      location: 'Indonesia',
      climate: 'Dingin',
      description: 'Kawah Ijen terkenal dengan fenomena api biru yang langka dan menakjubkan. Kawah ini juga memiliki danau asam berwarna toska yang menjadi salah satu danau paling asam di dunia. Pendakian ke kawah ini menjadi tantangan dan pengalaman yang tak terlupakan.'
    },
    {
      name: 'Manado',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Manado merupakan ibukota Sulawesi Utara dengan wisata bahari unggulan seperti Taman Laut Bunaken. Selain itu, kota ini juga memiliki budaya yang ramah, kuliner khas seperti tinutuan dan cakalang fufu, serta pemandangan alam gunung dan danau yang memukau.'
    },
    {
      name: 'Padang',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Padang dikenal sebagai kota kuliner dengan makanan khas seperti rendang yang mendunia. Selain itu, keindahan pantai dan budaya Minangkabau yang masih terjaga membuat Padang menjadi destinasi yang menawarkan wisata alam sekaligus pengalaman budaya.'
    },
    {
      name: 'Bukittinggi',
      location: 'Indonesia',
      climate: 'Dingin sedang',
      description: 'Bukittinggi adalah kota sejuk di Sumatera Barat dengan ikon Jam Gadang. Pemandangan alam, Ngarai Sianok, serta suasana kota tua membuat kota ini cocok untuk wisata sejarah, alam, dan budaya Minang yang kaya dan masih kental hingga kini.'
    },
    {
      name: 'Banyuwangi',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Banyuwangi merupakan kota paling timur di Pulau Jawa, terkenal dengan destinasi seperti Kawah Ijen dan Pantai Pulau Merah. Kota ini juga dikenal sebagai tempat konservasi dan budaya Osing yang unik, serta akses menuju Bali melalui pelabuhan Ketapang.'
    },
    {
      name: 'Malang',
      location: 'Indonesia',
      climate: 'Dingin sedang',
      description: 'Malang adalah kota pegunungan yang menawarkan berbagai wisata alam seperti Coban Rondo dan Taman Selecta. Selain udara sejuk, kota ini juga memiliki banyak tempat edukatif dan spot foto menarik yang cocok untuk wisata keluarga maupun anak muda.'
    },
    {
      name: 'Makassar',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Makassar merupakan ibukota Sulawesi Selatan dan memiliki wisata unggulan seperti Pantai Losari, Benteng Rotterdam, serta kuliner khas seperti coto Makassar dan konro. Kota ini juga menjadi pusat pelabuhan dan pintu gerbang menuju Tana Toraja.'
    },
    {
      name: 'Aceh',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Aceh dikenal sebagai Serambi Mekkah dengan budaya Islam yang kuat. Destinasi menarik seperti Masjid Raya Baiturrahman dan Museum Tsunami menjadi simbol kekuatan dan kebangkitan masyarakat Aceh pasca bencana tsunami. Wisata alamnya juga memesona.'
    },
    {
      name: 'Karimunjawa',
      location: 'Indonesia',
      climate: 'Tropis',
      description: 'Karimunjawa adalah kepulauan di utara Jepara yang dikenal dengan pantai berpasir putih, laut biru jernih, dan biota laut yang kaya. Kepulauan ini cocok untuk aktivitas snorkeling, diving, dan berkemah, serta suasana tenang yang jauh dari keramaian kota.'
    }
  ]
});

  console.log('✅ Data destinasi berhasil dimasukkan');
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
