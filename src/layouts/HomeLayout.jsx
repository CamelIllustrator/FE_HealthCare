import { decodeJwt } from "@/lib/api";
import { ParentHomePage } from "@/pages/HomePage/Parent/ParentHomePage";
import React, { useEffect, useState } from "react";
import { Route, useNavigate, Routes, Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from "@/components/ui/AppSidebar";
import { Baby, Home } from "lucide-react";

const HomeLayout = () => {

  const items = [
    {
      title: 'Home',
      url: '/dashboard/',
      icon: Home
    },
    {
      title: 'Parent',
      url: '/dashboard/parent',
      icon: Baby
    }
  ]

  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') ?? null);
  const [user, setUser] = useState(null);

  if (!accessToken) {
    navigate('/landing-page');
  }

  useEffect(() => {
    const decodeUser = async () => {
      const user = await decodeJwt();
      setUser(user);
    }
    decodeUser();
  }, [])
  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <article>
        <SidebarTrigger />
        <Outlet />
      </article>
    </SidebarProvider>
  );
};

export default HomeLayout;
