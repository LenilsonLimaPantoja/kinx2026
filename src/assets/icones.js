import { BiDonateHeart, BiUserPin } from "react-icons/bi";
import { CgList } from "react-icons/cg";
import { FaInstagram, FaRegCircleCheck, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { HiHeart, HiOutlineHeart, HiRefresh } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { LuBookmark, LuEye, LuUserRound, LuUsers } from "react-icons/lu";
import { MdLockOutline, MdOutlineChevronRight, MdOutlineClose, MdOutlineImage, MdSmartDisplay } from "react-icons/md";
import { PiChats, PiHandHeartBold } from "react-icons/pi";
import { RiChatAiLine, RiFireLine, RiMenuLine } from "react-icons/ri";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { SlPresent } from "react-icons/sl";
import { TbPointFilled } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";


const icones = {
    "users": <LuUsers />,
    "user": <LuUserRound />,
    "ponto": <TbPointFilled />,
    "salvo": <LuBookmark />,
    "lista": <CgList />,
    "login": <FiLogIn />,
    "fire": <RiFireLine />,
    "cadeado": <MdLockOutline />,
    "check": <FaRegCircleCheck />,
    "menu": <RiMenuLine />,
    "menu_horizontal": <GoKebabHorizontal />,
    "twitter": <FaXTwitter />,
    "instagram": <FaInstagram />,
    "whatsapp": <FaWhatsapp />,
    "telegram": <FaTelegram />,
    "temporario": <RxCounterClockwiseClock />,
    "gostei": <HiOutlineHeart />,
    "gostei_clicado": <HiHeart color="#FF0000" />,
    "comentario": <RiChatAiLine />,
    "refresh": <HiRefresh />,
    "estrela": <IoMdStar />,
    "chat": <PiChats />,
    "olho": <LuEye />,
    "assinantes": <BiUserPin />,
    "close": <MdOutlineClose />,
    "right": <MdOutlineChevronRight />,
    "verifie": <VscVerifiedFilled />,
    "imagem": <MdOutlineImage />,
    "play": <IoPlayOutline />,
    "play_video": <MdSmartDisplay />,
    "seguindo": <BiDonateHeart />,
    "location": <GrLocation />,
    "presente": <SlPresent />

}

export default icones;