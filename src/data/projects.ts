import chainsureImg from "../assets/chainsure.png";
import verifiableDocumentImg from "../assets/verifiable_document.png";
import bitMartImg from "../assets/bitmart.png";
import homestayBooking from "../assets/homestay_booking.png";

export const projects = [
  {
    title: "Chainsure",
    image: chainsureImg,
    summary:
      "ChainSure is a blockchain-based insurance prototype that combines a familiar Web2 insurance experience with blockchain-backed policy ownership. Insurance policies are issued as NFTs onchain, ensuring verifiability and security.",
    stack: [
      "Vite+React",
      "Node.js/Express",
      "Postgres",
      "Stripe",
      "Viem",
      "Foundry",
      "Solidity",
      "Sepolia",
    ],
    period: "Spring semester, 2026",
  },
  {
    title: "Verifiable Document Issuer",
    image: verifiableDocumentImg,
    summary:
      "Features issuing markheets that are tamper proof and cryptographically verifiable. Uses digital signatures, hashing, merkle tree and encryption for guranteed tamper resistance and student privacy.",
    stack: [
      "Vite+React",
      "Node.js/Express",
      "MongoDB",
      "Viem",
      "Wagmi",
      "SIWE",
      "Foundry",
      "Solidity",
      "Sepolia",
    ],
    period: "Spring semester, 2025",
  },
  {
    title: "BitMart",
    image: bitMartImg,
    summary: "BitMart is a web3 e-commerce platform that allows for a trustless dealing between buyers and sellers. It was developed to fix the current trust model that the e-commerce market is based on through the use of a excrow smart contract.",
    stack: [
      "Vite+React",
      "Node.js/Express",
      "MongoDB",
      "Viem",
      "Wagmi",
      "SIWE",
      "Foundry",
      "Solidity",
      "Sepolia",
    ],
    period: "Sping semester, 2025"
  },
  {
    title: "Homestay Booking",
    image: homestayBooking,
    summary: "An intuitive homestay booking web application that allows local and foreign tourists to easily discover and book homestays in Bhutan. Also features an intuitive dashboard for homestay owners to upload and manage their homestay details.",
    stack: [
      "Vite+React",
      "Paypal",
      "Node.js/Express",
      "PostgreSQL",
    ],
    period: "Autumn semester, 2024"
  }
];
