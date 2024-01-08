'use client'
import React, {useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  })
  const {data: session} = useSession();
  const router = useRouter();

  const createPromptFunc = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
        const resp = await fetch(`/api/prompt/new`, {
            method: 'POST',
            body: JSON.stringify({
                prompt: post.prompt,
                userId: session?.user?.id,
                tag: post.tag,
            })
        });
        if(resp.ok) router.push('/');

    } catch (error) {
        console.error(`Create Prompt Failed!`)
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <Form 
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={() => createPromptFunc}
    />
  )
}

export default CreatePrompt