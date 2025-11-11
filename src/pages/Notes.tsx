import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Image as ImageIcon, Video, File, Plus, Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Note {
  id: string;
  title: string;
  content: string;
  type: "text" | "photo" | "video" | "document";
  date: string;
  fileUrl?: string;
  fileName?: string;
}

const Notes = () => {
  const { toast } = useToast();
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const addTextNote = () => {
    if (!title || !content) {
      toast({
        title: "Missing information",
        description: "Please fill in title and content",
        variant: "destructive",
      });
      return;
    }

    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      type: "text",
      date: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");

    toast({
      title: "Note added",
      description: "Your note has been saved successfully",
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: "photo" | "video" | "document") => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const newNote: Note = {
        id: Date.now().toString(),
        title: file.name,
        content: `File: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`,
        type,
        date: new Date().toLocaleDateString(),
        fileUrl: e.target?.result as string,
        fileName: file.name,
      };

      setNotes([newNote, ...notes]);

      toast({
        title: "File uploaded",
        description: `${file.name} has been saved`,
      });
    };

    reader.readAsDataURL(file);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    toast({
      title: "Note deleted",
      description: "Note removed successfully",
    });
  };

  const downloadFile = (note: Note) => {
    if (!note.fileUrl) return;

    const link = document.createElement("a");
    link.href = note.fileUrl;
    link.download = note.fileName || "download";
    link.click();

    toast({
      title: "Download started",
      description: `Downloading ${note.fileName}`,
    });
  };

  const filteredNotes = activeTab === "all" 
    ? notes 
    : notes.filter((note) => note.type === activeTab);

  const getIcon = (type: string) => {
    switch (type) {
      case "text":
        return <FileText className="h-5 w-5" />;
      case "photo":
        return <ImageIcon className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "document":
        return <File className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-16 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Notes Manager</h1>
          <p className="text-muted-foreground">Save and organize your notes and files locally</p>
        </div>

        {/* Add Note Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Text Note */}
          <Card>
            <CardHeader>
              <CardTitle>Add Text Note</CardTitle>
              <CardDescription>Create a new text note</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Input
                  placeholder="Note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Write your note here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={4}
                />
              </div>
              <Button onClick={addTextNote} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Note
              </Button>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>Add photos, videos, or documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "photo")}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload">
                  <Button variant="outline" className="w-full" asChild>
                    <span>
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Upload Photo
                    </span>
                  </Button>
                </label>
              </div>

              <div>
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileUpload(e, "video")}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload">
                  <Button variant="outline" className="w-full" asChild>
                    <span>
                      <Video className="h-4 w-4 mr-2" />
                      Upload Video
                    </span>
                  </Button>
                </label>
              </div>

              <div>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                  onChange={(e) => handleFileUpload(e, "document")}
                  className="hidden"
                  id="document-upload"
                />
                <label htmlFor="document-upload">
                  <Button variant="outline" className="w-full" asChild>
                    <span>
                      <File className="h-4 w-4 mr-2" />
                      Upload Document
                    </span>
                  </Button>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notes List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Notes</CardTitle>
            <CardDescription>Browse and manage your saved notes</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="photo">Photos</TabsTrigger>
                <TabsTrigger value="video">Videos</TabsTrigger>
                <TabsTrigger value="document">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                {filteredNotes.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No notes yet. Start by adding a note or uploading a file!
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredNotes.map((note) => (
                      <Card key={note.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <div className="text-primary">{getIcon(note.type)}</div>
                              <div>
                                <CardTitle className="text-base">{note.title}</CardTitle>
                                <CardDescription className="text-xs">{note.date}</CardDescription>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {note.fileUrl && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => downloadFile(note)}
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteNote(note.id)}
                              >
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {note.content}
                          </p>
                          {note.type === "photo" && note.fileUrl && (
                            <img
                              src={note.fileUrl}
                              alt={note.title}
                              className="mt-3 rounded-md w-full h-40 object-cover"
                            />
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notes;
