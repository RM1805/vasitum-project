import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, IconButton, Avatar } from '@material-ui/core';
import { Search as SearchIcon, NotificationsOutlined as NotificationsIcon, MessageOutlined as MessageIcon, ExpandMore as ExpandMoreIcon, DashboardOutlined as DashboardIcon, PeopleOutlined as PeopleIcon, EventNoteOutlined as EventNoteIcon, GroupOutlined as GroupIcon, SettingsOutlined as SettingsIcon, HelpOutlineOutlined as HelpIcon } from '@material-ui/icons';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start; 
  flex-wrap: wrap; 
`;

const LeftSection = styled.div`
  max-width: 200px; /* Set minimum width */
  max-height: 1050px;
  height: auto;
  flex-grow: 1; 
  background-color: #f0f0f0;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 150px; 
  margin-bottom: 20px;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuTitle = styled.li`
  padding: 10px 0;
  cursor: default;
  font-weight: bold;
  color: #888;
  font-size: 12px;
  opacity: 0.8;
`;

const MenuItemStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #777;
  font-size: 18px;
  transition: color 0.3s;
  
  &:hover {
    color: #ff7f0e;
  }
`;

const MenuItemIcon = styled.div`
  margin-right: 10px;
`;

const AppBarStyled = styled(AppBar)`
  background-color: transparent !important;
  box-shadow: none !important;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 0;
  padding: 0;
`;

const ToolbarStyled = styled(Toolbar)`
  background-color: transparent !important;
  box-shadow: none !important;
  border: none;
  padding: 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  border-radius: 4px;
  width: 100%; 
  max-width: 400px; 
  margin-bottom: 20px; 
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 16px;
  background-color: transparent;
  outline: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-bottom: 5px; 
`;

const UserName = styled.div`
  margin-right: 5px;
  margin-left: 10px;
  color: #333;
`;

const RightSectionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row; 
  margin-left: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px; 
`;

const Div3 = styled(Card)`
  flex: 1;
  height: auto; 
  margin-right: 20px; 
  background-color: #FFEBCD; 
  padding: 10px;
  overflow: hidden;
`;

const Div4 = styled(Card)`
  flex: 1;
  height: auto; 
  margin-right: 20px; 
  background-color: #ADD8E6; 
  padding: 10px;
  overflow: hidden;
`;

const Div5 = styled(Card)`
  flex: 1;
  height: auto; 
  margin-right: 20px; 
  background-color: #FFC0CB; 
  padding: 10px;
  overflow: hidden;
`;

const Div6 = styled(Card)`
  flex: 1;
  height: auto; 
  margin-right: 20px; 
  overflow: hidden;
`;

const Div7 = styled(Card)`
  flex: 1;
  height: auto; 
  margin-right: 20px; 
  overflow: hidden;
`;

const Div8 = styled(Card)`
  height: auto;
  margin-right: 20px;
  overflow: hidden;
`;

const Div9 = styled(Card)`
  flex: 1;
  height: auto;
  margin-bottom: 20px;
  background-color: #4B0082; 
  color: white;
  padding: 20px;
  overflow: hidden;
`;

const Div10 = styled(Card)`
  flex: 1;
  height: auto;
`;

const Div11 = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  height: auto;
  border: none;
  box-shadow: none;
`;

const Div13 = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: auto;
  border: none;
  box-shadow: none;
`;

const Div12 = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  height: auto;
  border: none;
  box-shadow: none;
`;

const StyledButton = styled.button`
  color: red;
  background-color: whitesmoke;
  border: 1px solid red;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    color: whitesmoke;
    background-color: red;
    border-color: red;
  }
`;

// Main component
const Dashboard = () => {
  return (
    <Container>
      <Content>
        <LeftSection>
          <Logo src="https://vasitumprodstrgacc.blob.core.windows.net/img-mwf/employer/5ffeda4ed09fd707b58f07b6/logo/image.jpg?v=gkyD8XQMXP0mBIkpKB4np" alt="Vasitum Logo" />
          <MenuList>
            <MenuTitle>MAIN MENU</MenuTitle>
            <MenuItemStyled>
              <MenuItemIcon><DashboardIcon /></MenuItemIcon>
              Dashboard
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuItemIcon><PeopleIcon /></MenuItemIcon>
              Recruitment
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuItemIcon><EventNoteIcon /></MenuItemIcon>
              Schedule
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuItemIcon><GroupIcon /></MenuItemIcon>
              Employee
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuItemIcon><GroupIcon /></MenuItemIcon>
              Department
            </MenuItemStyled>
          </MenuList>
          <MenuList>
            <MenuTitle>OTHER</MenuTitle>
            <MenuItemStyled>
              <MenuItemIcon><HelpIcon /></MenuItemIcon>
              Support
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuItemIcon><SettingsIcon /></MenuItemIcon>
              Settings
            </MenuItemStyled>
          </MenuList>
        </LeftSection>
        <RightSectionContainer>

          <AppBarStyled position="static">
            <ToolbarStyled>
              <SearchContainer>
                <SearchBar type="text" placeholder="Search..." />
                <IconButton color="#f0f0f0">
                  <SearchIcon />
                </IconButton>
              </SearchContainer>
              <UserInfo>
                <IconButton color="inherit">
                  <NotificationsIcon style={{ color: "#777" }} />
                </IconButton>
                <IconButton color="inherit">
                  <MessageIcon style={{ color: "#777" }} />
                </IconButton>
                <Avatar style={{ marginLeft: "10px" }} alt="User" src="https://mastimorning.com/wp-content/uploads/2023/07/Best-HD-girls-whatsapp-dp-Pics-Images-2023.jpg" />
                <UserName>Shanaya Kapoor</UserName>
                <IconButton color="inherit">
                  <ExpandMoreIcon style={{ color: "#777" }} />
                </IconButton>
              </UserInfo>
            </ToolbarStyled>
          </AppBarStyled>
          <RightSection>
            <Div13>
              <h2>Dashboard</h2>
              <Div12>
                <Div1>
                  <Div3>
                    <h4 style={{ marginTop: "1px" }}>Available Positions</h4>
                    <p style={{ marginTop: "2px" }}><strong>24</strong></p>
                    <p style={{ color: 'orange', fontSize: '14px' }}>4 urgently needed</p>
                  </Div3>
                  <Div4>
                    <h4 style={{ marginTop: "2px" }}>Job Open</h4>
                    <p><strong>10</strong></p>
                    <p style={{ color: 'blue', fontSize: '14px' }}>4 Active Hiring</p>
                  </Div4>
                  <Div5>
                    <h4 style={{ marginTop: "2px" }}>New Employees</h4>
                    <p><strong>24</strong></p>
                    <p style={{ color: '#FF1493', fontSize: '14px' }}>4 Department</p>
                  </Div5>
                </Div1>
                <Div2>
                  <Div6>
                    <h4 style={{ marginTop: "2px" }}>Total Employees</h4>
                    <p><strong>216</strong></p>
                    <p style={{ fontSize: "8px" }}>120 Men</p>
                    <p style={{ fontSize: "8px" }}>96 Women<span style={{ color: 'orange', fontSize: '14px', marginLeft: "10px" }}>+2% Past month</span></p>

                  </Div6>
                  <Div7>
                    <h4 style={{ marginTop: "2px" }}>Talent Request</h4>
                    <p><strong>16</strong></p>
                    <p style={{ fontSize: "8px" }}>6 Men</p>
                    <p style={{ fontSize: "8px" }}>10 Women<span style={{ color: 'orange', fontSize: '14px', marginLeft: "10px" }}>+5% Past month</span></p>
                  </Div7>
                </Div2>
              </Div12>
              <Div8>
                <h4 style={{ marginTop: "2px" }}>Announcement<span style={{ color: 'gray', fontSize: '14px', marginLeft: "60px" }}>Today, 9 Feb 2024</span></h4>
                <div style={{ backgroundColor: "#f0f0f0", padding: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>Outing Schedule for every department</p>
                  <p style={{ fontSize: "6px" }}>5 Minutes ago</p>
                </div>
                <div style={{ backgroundColor: "#f0f0f0", padding: "2px", marginTop: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>Meeting HR Department</p>
                  <p style={{ fontSize: "6px" }}>Yesterday, 12:35 PM</p>
                </div>
                <div style={{ backgroundColor: "#f0f0f0", padding: "2px", marginTop: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>IT Department need two more talents for UX/UI Designer Position</p>
                  <p style={{ fontSize: "6px" }}>Yesterday, 9:15 AM</p>
                </div>
                <StyledButton style={{ marginTop: "3px" }}>See All Announcements</StyledButton>
              </Div8>
            </Div13>
            <Div11>
              <Div9>
                <div style={{ backgroundColor: "#B663FF", padding: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <h4 style={{ color: "whitesmoke" }}>Recent Activity</h4>
                </div>
                <div>
                  <p style={{ color: "whitesmoke", fontSize: "8px" }}>10:40 AM, Fri 9 Feb 2024</p>
                  <h4 style={{ color: "whitesmoke" }}>You Posted a New Job</h4>
                  <p style={{ color: "whitesmoke" }}>Kindly Check the requirements and terms of work and make sure everything is right.</p>
                  <p style={{ color: "whitesmoke" }}>Today you makes 12 Activity<span style={{ marginLeft: "60px" }}><StyledButton style={{ backgroundColor: "red", color: "whitesmoke" }}>See All Activity</StyledButton></span></p>
                </div>
              </Div9>
              <Div10>
                <h4 style={{ marginTop: "2px" }}>Upcoming Schedule<span style={{ color: 'gray', fontSize: '14px', marginLeft: "100px" }}>Today, 9 Feb 2024</span></h4>
                <p>Priority</p>
                <div style={{ backgroundColor: "#f0f0f0", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>Review candidate applications</p>
                  <p style={{ fontSize: "6px" }}>Today, 11:30 AM</p>
                </div>
                <p>Other</p>
                <div style={{ backgroundColor: "#f0f0f0", padding: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>Interview with candidates</p>
                  <p style={{ fontSize: "6px" }}>Today, 10:30 AM</p>
                </div>
                <div style={{ backgroundColor: "#f0f0f0", padding: "2px", marginTop: "2px", border: "1px solid #ccc", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", borderRadius: "4px" }}>
                  <p style={{ fontSize: "16px" }}>Short Meeting with product designer from IT Department</p>
                  <p style={{ fontSize: "6px" }}>Today, 9:15 AM</p>
                </div>
                <StyledButton style={{ marginTop: "3px" }}>Create a New Schedule</StyledButton>
              </Div10>
            </Div11>
          </RightSection>

        </RightSectionContainer>
      </Content>
    </Container>
  );
};

export default Dashboard;
