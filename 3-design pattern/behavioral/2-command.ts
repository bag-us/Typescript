namespace Command {
    interface BlogPost {
        execute(params: any): any
    }

    class BlogUtility {
        static titleToSlug(){}
        static getMostViewedPosts(){}
    }
    class SaveBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.save()
        }
        protected save(){
            // simpan ke db
        }
    }
    class UpdateBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.update()
        }
        protected update(){
            // update ke db
        }
    }
    class GetBlogPost implements BlogPost{
        execute(singlePost: boolean) {
            BlogUtility.getMostViewedPosts()
            if(singlePost){
                this.getPost()
            }else{
                this.getPosts()
            }
        }
        protected getPost(){}
        protected getPosts(){}
    }
    
    new SaveBlogPost().execute()
}