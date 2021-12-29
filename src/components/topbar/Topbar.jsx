import "./topbar.css"
import { NotificationsActive, Settings, Language } from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarContainer">
        <div className="topLeft">
          <p className="topLogo">white UX</p>
        </div>

        <div className="topRight">
          <div className="iconContainer">
            <NotificationsActive />
            <span className="iconBadge">2</span>
          </div>

          <div className="iconContainer">
            <Language />
            <span className="iconBadge">2</span>
          </div>

          <div className="iconContainer">
            <Settings />
          </div>

          <div className="topProfile">
            <img src="/images/user.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
