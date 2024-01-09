import React from 'react'

interface PromptCardProps {
  post: any;
  handleTagClick: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({post, handleTagClick}) => {
  return (
    <div>PromptCard</div>
  )
}

export default PromptCard