import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Loader2, X } from "lucide-react";

export type EmailStatus = "idle" | "loading" | "success" | "error";

type Props = {
  status: EmailStatus;
  message?: string;
  reference?: string;
  onClose: () => void;
};

export default function EmailStatusDialog({ status, message, reference, onClose }: Props) {
  const isOpen = status !== "idle";
  const isLoading = status === "loading";

  const handleClose = () => {
    if (!isLoading) onClose();
  };

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) handleClose();
      }}
    >
      <AlertDialogOverlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />

      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-md min-h-[400px] flex flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center">
          <AlertDialogHeader>
            <div className="flex justify-center mb-5">
              {status === "loading" && (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950">
                  <Loader2 className="h-14 w-14 animate-spin text-blue-600" />
                </div>
              )}

              {status === "success" && (
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip" />
                    <span className="icon-line line-long" />
                    <div className="icon-circle" />
                    <div className="icon-fix" />
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="error-cross">
                  <div className="error-cross-icon">
                    <span className="error-line error-line-left" />
                    <span className="error-line error-line-right" />
                  </div>
                </div>
              )}
            </div>

            <AlertDialogTitle className="text-center text-2xl">
              {status === "loading" && "Submitting Your Request"}
              {status === "success" && "Request Submitted Successfully!"}
              {status === "error" && "Submission Failed"}
            </AlertDialogTitle>

            <AlertDialogDescription className="text-center">
              {status === "loading" &&
                "Please wait while we send your quote request. This may take a few moments."}

              {status === "success" &&
                (message ||
                  "Thank you for contacting Weaverbird Garments. Your quote request has been received.")}

              {status === "error" &&
                (message ||
                  "We couldn't submit your quote request. Please check your connection and try again.")}
            </AlertDialogDescription>

            {status === "success" && reference && (
              <p className="mt-3 text-center text-sm font-semibold text-green-600">
                Reference: {reference}
              </p>
            )}
          </AlertDialogHeader>

          {!isLoading && (
            <AlertDialogFooter className="sm:justify-center">
              <AlertDialogAction
                onClick={handleClose}
                className={
                  status === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                }
              >
                {status === "success" ? "Continue" : "Close"}
              </AlertDialogAction>
            </AlertDialogFooter>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
