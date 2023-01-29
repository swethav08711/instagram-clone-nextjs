import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";
export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      UploadModal
      {open && <h1>The modal is open</h1>}
    </div>
  );
}
