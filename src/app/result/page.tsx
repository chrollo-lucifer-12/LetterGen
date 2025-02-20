'use client';
import React, { useRef } from 'react';
import { useFormContext } from '@/context/formcontext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { formData } = useFormContext();
  const imageRef = useRef(null);
  const router = useRouter();

  const handleAnotherOne = () => {
    router.push('/dashboard');
  };

  const handleDownloadPDF = async () => {
    console.log(formData);
    if (imageRef.current) {
      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        filename: 'coverletter.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      html2pdf().from(imageRef.current).set(opt).save();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-500">LetterGen</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Abhishek</span>
            <Avatar>
              <AvatarImage src="/image/avatar.png" alt="User avatar" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <Card className="w-full max-w-3xl min-h-[800px] shadow-lg mb-6">
          <div
            className="min-h-screen bg-white p-4 md:p-8 lg:p-12"
            ref={imageRef}
          >
            {/* Diagonal gradient backgrounds */}
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -left-4 -right-4 -top-4 h-[300px] -skew-y-6 bg-gradient-to-r from-navy-900 to-sky-100" />
              <div className="absolute -bottom-4 -left-4 -right-4 h-[300px] -skew-y-6 bg-gradient-to-r from-sky-100 to-navy-900" />

              {/* Letter content */}
              <div className="relative bg-white p-8 md:p-12">
                {/* Header */}
                <h1 className="mb-16 text-center text-4xl font-bold tracking-wider text-black md:text-5xl">
                  KYRIE PETRAKIS
                </h1>

                {/* Date */}
                <div className="mb-8">
                  <p className="text-gray-900">April 27, 2023</p>
                </div>

                {/* Recipient */}
                <div className="mb-8">
                  <h2 className="text-3xl font-normal text-gray-900">
                    Sacha Dubois
                  </h2>
                </div>

                {/* Greeting */}
                <div className="mb-6">
                  <p className="text-gray-900">Dear Mr. Sacha Dubois,</p>
                </div>

                {/* Body Paragraphs */}
                <div className="space-y-6">
                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque non elit mauris. Cras euismod, metus ac finibus
                    finibus, felis dui suscipit purus, a maximus leo ligula at
                    dolor. Morbi et malesuada purus.
                  </p>

                  <p className="text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque non elit mauris. Cras euismod, metus ac finibus
                    finibus, felis dui suscipit purus, a maximus leo ligula at
                    dolor. Morbi et malesuada purus. Phasellus a lacus sit amet
                    urna tempor sollicitudin. Cras pretium tempor elit blandit
                    egestas. Donec sed dignissim augue. Suspendisse ac vulputate
                    leo. Cras aliquet nunc ac velit cursus viverra. In hac
                    habitasse platea dictumst. Nam tortor urna, semper ac nulla
                    id, porttitor semper felis. Phasellus blandit eros viverra,
                    ultricies nibh nec, viverra ipsum. Ut nec gravida massa, eu
                    convallis est.
                  </p>
                </div>

                {/* Closing */}
                <div className="mt-12 space-y-6">
                  <p className="text-gray-900">Best Regards,</p>
                  <p className="text-xl font-semibold text-gray-900">
                    Kyrie Petrakis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-4 w-full max-w-3xl items-center">
          <Button
            size="lg"
            className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleAnotherOne}
          >
            Make another one
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full max-w-md bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Page;
