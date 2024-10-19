"use client";

import { Banner } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BannerColumn, columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BannerClientProps {
  data: BannerColumn[];
}

export const BannerClient: React.FC<BannerClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Banner (${data.length})`}
          description="Manage banners for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/banners/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable data={data} columns={columns} searchKey="label" />
      <Heading title="API" description="Banners API" />
      <Separator />
      <ApiList indicatorName="banners" indicatorId="bannerId" />
    </>
  );
};
