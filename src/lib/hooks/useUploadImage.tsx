import { ChangeEvent, useState } from "react";
import { useToast } from "@/components/ui";

const postImage = async (formData: FormData) => {
  const response = await fetch("/api/images", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};

export const useUploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const toastSuccess = () => {
    toast({
      title: "Success!",
      description:
        "Your image has been submitted! If it is approved, it will be visible on the site.",
    });
  };

  const toastError = () => {
    toast({
      title: "Error!",
      description: "Something went wrong. Please try again.",
    });
  };

  const upload = async (file: File) => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    const result = await postImage(formData);
    if (result.ok) {
      toastSuccess();
    } else {
      toastError();
    }
    setLoading(false);
    return result;
  };

  const onChangeFile = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    setFile(target.files[0]);
  };

  return {
    file,
    upload,
    loading,
    onChangeFile,
  };
};
