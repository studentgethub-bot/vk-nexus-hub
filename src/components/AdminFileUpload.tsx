import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface AdminFileUploadProps {
  category: string;
  title?: string;
}

const AdminFileUpload = ({ category, title = "Upload Files" }: AdminFileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${category}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('study-materials')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { error: dbError } = await supabase
          .from('uploaded_files')
          .insert({
            file_name: file.name,
            file_path: filePath,
            file_size: file.size,
            file_type: file.type,
            category: category,
          });

        if (dbError) throw dbError;
      }

      toast({
        title: "Success",
        description: `${files.length} file(s) uploaded successfully`,
      });

      e.target.value = '';
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Label htmlFor={`file-${category}`}>Select files to upload</Label>
          <Input
            id={`file-${category}`}
            type="file"
            multiple
            onChange={handleFileUpload}
            disabled={uploading}
          />
          {uploading && <p className="text-sm text-muted-foreground">Uploading...</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminFileUpload;
