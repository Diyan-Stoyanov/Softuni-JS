import { html , render} from '../node_modules/lit-html/lit-html.js';
import { edit, getOneMeme } from './data.js';

const editTemplate = (meme,onSubmit) =>html`
 <section id="edit-meme">
            <form @submit=${onSubmit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>
                            
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>`

export async function editPage(context){
    const id = context.params.id;
    const data = await getOneMeme(id);
    context.render(editTemplate(data,onSubmit))

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();
        if(!title || !description || !imageUrl){
            return alert('All fields are required!')
        }
        const user = JSON.parse(sessionStorage.getItem('userToken'));
        const token = user.token;

        await edit(id,token,{title,description,imageUrl});
        
        context.page.redirect(`/details/${id}`)
  
    }

}