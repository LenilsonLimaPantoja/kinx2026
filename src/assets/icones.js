import { CgList } from "react-icons/cg";
import { FaInstagram, FaRegCircleCheck, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";
import { HiHeart, HiOutlineHeart, HiRefresh } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { LuBookmark, LuUserRound, LuUsers } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { RiChatAiLine, RiFireLine, RiMenuLine } from "react-icons/ri";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { TbPointFilled } from "react-icons/tb";


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
    "chat": <PiChats />

}

export default icones;