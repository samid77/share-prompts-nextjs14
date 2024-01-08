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

  const createPromptFunc = async (e: React.ChangeEvent<HTMLInputElement>) => {};

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