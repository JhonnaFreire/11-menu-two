import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import { Data } from "./Data";
import { SubMenu } from "./SubMenu";
import styled from "styled-components";
import "./NavBar.css";

export function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSideBar} />
          </NavIcon>
          <SidebarNav sidebar={sideBar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose
                  onClick={showSideBar}
                ></AiIcons.AiOutlineClose>
              </NavIcon>
              {Data.map((item, index) => {
                return <SubMenu key={index} item={item} close={showSideBar} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
