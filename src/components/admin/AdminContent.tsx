import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AdminDashboard } from "./AdminDashboard";
import { ArticlesManager } from "./ArticlesManager";
import { GalleryManager } from "./GalleryManager";
import { Analytics } from "./Analytics";
import { UsersManager } from "./UsersManager";
import { SettingsManager } from "./SettingsManager";

export function AdminContent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getPageTitle = () => {
    switch (currentPath) {
      case "/admin":
        return "Dashboard";
      case "/admin/articles":
        return "Articles Management";
      case "/admin/gallery":
        return "Gallery Management";
      case "/admin/analytics":
        return "Analytics";
      case "/admin/users":
        return "Users Management";
      case "/admin/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (currentPath) {
      case "/admin":
        return <AdminDashboard />;
      case "/admin/articles":
        return <ArticlesManager />;
      case "/admin/gallery":
        return <GalleryManager />;
      case "/admin/analytics":
        return <Analytics />;
      case "/admin/users":
        return <UsersManager />;
      case "/admin/settings":
        return <SettingsManager />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-xl font-semibold text-foreground">{getPageTitle()}</h1>
              <p className="text-sm text-muted-foreground">Manage your content and settings</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Export Data
            </Button>
            <Button size="sm">
              Quick Action
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </main>
  );
}