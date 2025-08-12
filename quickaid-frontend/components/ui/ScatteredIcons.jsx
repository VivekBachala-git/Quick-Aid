"use client";

import {
  HandHelping,
  MapPin,
  Heart,
  Users,
  AlertTriangle,
  MessageCircle,
  ThumbsUp,
  Star,
  Globe,
  Phone,
  Mail,
  Smile,
  ShieldCheck,
  Lightbulb,
  Gift,
  Home,
  Search,
  Share2,
  Calendar,
  Briefcase,
  Banana,
  Gamepad2,
} from "lucide-react";

export default function ScatteredIcons() {
  const iconClass =
    "absolute text-black/50 w-5 h-5 sm:w-10 sm:h-10 lg:w-10 lg:h-10";

  return (
    <>
      {/* Top left */}
      <HandHelping className={`${iconClass} top-[5%] left-[5%]`} />
      <MapPin className={`${iconClass} top-[12%] left-[15%]`} />
      <Mail className={`${iconClass} top-[5%] left-[35%]`} />

      {/* Top right */}
      <Heart className={`${iconClass} top-[5%] right-[5%]`} />
      <Users className={`${iconClass} top-[15%] right-[12%]`} />
      <Home className={`${iconClass} top-[8%] right-[30%]`} />

      {/* Middle left */}
      <AlertTriangle className={`${iconClass} top-[40%] left-[18%]`} />
      <Banana className={`${iconClass} top-[30%] left-[14%]`} />
      <Star className={`${iconClass} top-[55%] left-[8%]`} />
      <Lightbulb className={`${iconClass} top-[65%] left-[15%]`} />

      {/* Middle right */}
      <MessageCircle className={`${iconClass} top-[38%] right-[5%]`} />
      <Gamepad2 className={`${iconClass} top-[28%] right-[25%]`} />
      <ThumbsUp className={`${iconClass} top-[52%] right-[8%]`} />
      <Gift className={`${iconClass} top-[65%] right-[12%]`} />

      {/* Bottom left */}
      <Globe className={`${iconClass} bottom-[1%] left-[7%]`} />
      <ShieldCheck className={`${iconClass} bottom-[1.5%] left-[35%]`} />
      <Search className={`${iconClass} bottom-[20%] left-[3%]`} />

      {/* Bottom right */}
      <Phone className={`${iconClass} bottom-[10%] right-[15%]`} />
      <Smile className={`${iconClass} bottom-[2%] right-[25%]`} />
      <Calendar className={`${iconClass} bottom-[18%] right-[5%]`} />
      <Briefcase className={`${iconClass} bottom-[25%] right-[18%]`} />

      {/* Floating middle (away from hero & button) */}
      <Share2 className={`${iconClass} top-[54%] left-[45%]`} />
    </>
  );
}
