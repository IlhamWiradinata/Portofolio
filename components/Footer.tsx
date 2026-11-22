import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} {profile.shortName}. Indonesia
        </p>
      </div>
    </footer>
  );
}
