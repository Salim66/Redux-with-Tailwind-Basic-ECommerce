import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import './CreateProduct.scss';
import swal from 'sweetalert';
import { createProduct } from '../../../../redux/product/action';
import Select from 'react-select';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const CreateProduct = ({ create, setCreate }) => {

    // form input state
    const [input, setInput] = useState({
        name: '',
        regular_price: '',
        sale_price: '',
        stock: '',
        rating: '',
        featured_image: '',
        file: '',
        categories: [],
        brands: [],
        tags: [],
        sizes: [],
        colors: [],
        short_desc: '',
        long_desc: '',
        popular_product: false
    });

    // call dispatch
    const dispatch = useDispatch();

    // form input change 
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }));
    }

    const handleProductCreateClose = () => setCreate(false);

    // image preview
    const handleImage = (e) => {
        const image_url = URL.createObjectURL(e.target.files[0]);
        const previewImage = document.getElementById('imagePreview');
        previewImage.setAttribute('src', image_url);

        setInput((prev) => ({
            ...prev,
            file: e.target.files[0]
        }))
    }

    const handleCategorySelect = (e) => {

        if(e.target.checked) {
            let cats = input.categories;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                categories: cats
            }))
        }else {
            let cats = input.categories;
            let newCats = cats.filter(data => data != e.target.value);
            setInput((prevState) => ({
                ...prevState,
                categories: newCats
            }))
        }

    }

    const handleBrandSelect = (e) => {

        if(e.target.checked) {
            let brands = input.brands;
            brands.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                brands: brands
            }))
        }else {
            let brands = input.brands;
            let newBrands = brands.filter(data => data != e.target.value);
            setInput((prevState) => ({
                ...prevState,
                brands: newBrands
            }))
        }

    }

    const handleTagSelect = (e) => {

        if(e.target.checked) {
            let tags = input.tags;
            tags.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags: tags
            }))
        }else {
            let tags = input.tags;
            let newTags = tags.filter(data => data != e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags: newTags
            }))
        }

    }

    const handlePopularProduct = (e) => {

        if(e.target.checked) {
            let popular_product = input.popular_product;
            setInput((prevState) => ({
                ...prevState,
                popular_product: true
            }))
        }else {
            let popular_product = input.popular_product;
            setInput((prevState) => ({
                ...prevState,
                popular_product: false
            }))
        }

    }

    // create product
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('regular_price', input.regular_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock);
        data.append('rating', input.rating);
        data.append('featured_image', input.file);
        for(let i = 0; i < input.categories.length; i++){
            data.append('categories', input.categories[i]);
        }
        for(let i = 0; i < input.brands.length; i++){
            data.append('brands', input.brands[i]);
        }
        for(let i = 0; i < input.tags.length; i++){
            data.append('tags', input.tags[i]);
        }
        for(let i = 0; i < input.sizes.length; i++){
            data.append('sizes', input.sizes[i]);
        }
        for(let i = 0; i < input.colors.length; i++){
            data.append('colors', input.colors[i]);
        }
        data.append('short_desc', input.short_desc);
        data.append('long_desc', input.long_desc);
        data.append('popular_product', input.popular_product);

        try {

            if(input.name){

                dispatch(createProduct(data));

                setCreate(false);

                swal({
                    title: "Good job!",
                    text: "Product added successfully",
                    icon: "success"
                });

                setInput({
                    name: '',
                    regular_price: '',
                    sale_price: '',
                    stock: '',
                    rating: '',
                    featured_image: '',
                    file: '',
                    categories: [],
                    brands: [],
                    tags: [],
                    sizes: [],
                    colors: [],
                    short_desc: '',
                    long_desc: '',
                    popular_product: false
                })

            }
            
        } catch (error) {
            console.log(error);
        }

    }

    const { categories } = useSelector( state => state.category );
    const { brands } = useSelector( state => state.brand );
    const { tags } = useSelector( state => state.tag );
    const { sizes } = useSelector( state => state.size );
    const { colors } = useSelector( state => state.color );


  return (
    <>
        <Modal show={ create } onHide={ handleProductCreateClose } size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Create new product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={ handleFormSubmit } >
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Product Name <span className='text-red-500 text-xl'>*</span></label>
                                <input type="text" name='name' className='form-control' value={ input.name } onChange={ handleInput } />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Regular Price <span className='text-red-500 text-xl'>*</span></label>
                                <input type="number" name='regular_price' className='form-control' value={ input.regular_price } onChange={ handleInput } />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Sale Price</label>
                                <input type="number" name='sale_price' className='form-control' value={ input.sale_price } onChange={ handleInput } />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Stock</label>
                                <input type="number" name='stock' className='form-control' value={ input.stock } onChange={ handleInput } />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Rating</label>
                                <input type="number" name='rating' className='form-control' value={ input.rating } onChange={ handleInput } />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Featured Image <span className='text-red-500 text-xl'>*</span></label>
                                <input type="file" name='featured_image' className='form-control' onChange={ handleImage } />
                            </div>
                            <div className="w-1/4 h-1/4">
                                <img id='imagePreview' src="" alt="" className='mb-2' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Colors</label>
                                <Select 
                                    onChange={ (item) => setInput({ ...input, colors: item.map(i => i.value)}) }
                                    isMulti 
                                    options={
                                     colors.map((color, key) => (
                                        { value: color._id, label: color.name }
                                    ))
                                } />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="my-2">
                                <label htmlFor="">Sizes</label>
                                <Select 
                                    onChange={ (item) => setInput({ ...input, sizes: item.map(i => i.value)}) }
                                    isMulti
                                    options={
                                     sizes.map((size, key) => (
                                        { value: size._id, label: size.name }
                                    ))
                                } />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Category</label>
                                <hr />
                                {
                                    categories.map((category, index) => (
                                    <>
                                        <label key={index}>
                                            <input type="checkbox" value={ category._id } onChange={ handleCategorySelect } /> { category.name }
                                        </label>
                                        <br />
                                    </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Brands</label>
                                <hr />
                                {
                                    brands.map((brand, index) => (
                                    <>
                                        <label key={index}>
                                            <input type="checkbox" value={ brand._id } onChange={ handleBrandSelect } /> { brand.name }
                                        </label>
                                        <br />
                                    </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label htmlFor="">Tags</label>
                                <hr />
                                {
                                    tags.map((tag, index) => (
                                    <>
                                        <label key={index}>
                                            <input type="checkbox" value={ tag._id } onChange={ handleTagSelect } /> { tag.name }
                                        </label>
                                        <br />
                                    </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Short Description </label>
                                <textarea name="short_desc" className='form-control' rows="2" onChange={ handleInput }></textarea>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="my-2">
                                <label htmlFor="">Long Description </label>
                                <CKEditor
                                    editor={Editor}
                                    onReady={editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setInput({ ...input, long_desc: data });
                                    }}
                                    onBlur={(event, editor) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) => {
                                        console.log('Focus.', editor);
                                    }}

                                    row="10"
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="col-12 col-md-4 col-lg-4">
                            <div className="my-2">
                                <label>
                                    <input type="checkbox" name='popular_product' onChange={ handlePopularProduct } /> Popular Product
                                </label>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="mt-4 mb-2">
                                <input type="submit" className='py-2 px-3 rounded-md text-white bg-green-400 hover:bg-green-500' value='Add new' />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
};

export default CreateProduct;