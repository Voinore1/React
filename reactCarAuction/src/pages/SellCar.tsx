import { useState, useEffect } from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import { Fieldset, Grid, GridItem, VStack, Input, Text, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import {
    FileUploadList,
    FileUploadRoot,
    FileUploadTrigger,
} from "@/components/ui/file-upload"
import { HiUpload } from "react-icons/hi";
import { SimpleDatePicker } from 'simple-chakra-ui-datepicker';



const api = import.meta.env.VITE_AUCTION_API_URL;

const SellCar = () => {
    const [brandId, setBrands] = useState<number>(-1);
    const [fuelTypeId, setFuelTypes] = useState<number>();
    const [transmissionId, setTransmissions] = useState<number>();
    const [bodyStyleId, setBodyStyles] = useState<number>();
    const [carModelId, setCarModels] = useState<number>();
    const [formData, setFormData] = useState({
        SellerId: "",
        TimeStart: "",
        TimeEnd: "",
        Name: "",
        MinDescription: "",
        StartPrice: "",
        CityNow: "",
        VIN: "",
        ManufactureDate: "",
        Odometr: "",
        ExteriorColor: "",
        Problems: "",
        Description: "",
        IsModified: false,
        HaveProblems: false,
        IsHTMLProblemList: false,
        IsHTMLDescription: false,
        MainPhoto: null,
        ExteriorPhotos: [],
        InteriorPhotos: [],
        BrandId: "",
        OwnerId: "",
        ModelId: "",
        BodyStyleId: "",
        FuelTypeId: "",
        TransmissionId: ""
    });

    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target;
        
        const value =
            target.type === "checkbox"
                ? (target as HTMLInputElement).checked
                : target.value;

        const name = target.name;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(formData);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };



    function onSubmit(e: React.FormEvent) {

    }


    return (
        <Form onSubmit={onSubmit} className="form1">
            <Grid templateColumns="repeat(6, 1fr)"
                templateRows="repeat(6, 1fr)" gap={4}>
                <GridItem colSpan={6}>
                    <Text textStyle='4xl'>Car details</Text>
                </GridItem>

                <GridItem colSpan={6}>
                    <Field label='VIN'>
                        <Input
                            name="VIN"
                            onChange={handleChange}
                            value={formData.VIN}
                            required
                            placeholder="1G2ZG57B684191682" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Year'>
                        <Input
                            name="ManufactureDate"
                            onChange={handleChange}
                            value={formData.ManufactureDate}
                            required
                            placeholder="2000" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Brand'>
                            <NativeSelectField>
                                <option selected disabled value="-1">Choose one</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Model'>
                            <NativeSelectField>
                                <option selected disabled value="-1">Choose one</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Body style'>
                            <NativeSelectField>
                                <option selected disabled value="-1">Choose one</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Transmission'>
                            <NativeSelectField>
                                <option selected disabled value="-1">Choose one</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field required label='Fuel type'>
                            <NativeSelectField>
                                <option selected disabled value="-1">Choose one</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Interior color'>
                        <Input placeholder="white" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Exterior color'>
                        <Input
                            name="ExteriorColor"
                            onChange={handleChange}
                            value={formData.ExteriorColor}
                            required
                            placeholder="black" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Odometr(in km)'>
                        <Input
                            name="Odometr"
                            onChange={handleChange}
                            value={formData.Odometr}
                            required
                            placeholder="2000" />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>
                    <CheckboxCard required label="Is modified" />
                </GridItem>

                <GridItem colSpan={3}>
                    <CheckboxCard required label="Have problems" />
                </GridItem>

            </Grid>

            <VStack gap={4}>
                <>
                    <Field label='Description(can be HTML code)'>
                        <Textarea name="Description"
                            value={formData.Description}
                            onChange={handleChange}
                        />
                    </Field>
                    <Checkbox alignSelf="start">HTML code</Checkbox>
                </>

                <>
                    <Field label='Problems(can be HTML code)'>
                        <Textarea name="Problems"
                            value={formData.Problems}
                            onChange={handleChange}
                        />
                    </Field>
                    <Checkbox alignSelf="start">HTML code</Checkbox>
                </>

            </VStack>

            <FileUploadRoot required mt={4} mb={4}>
                <FileUploadTrigger>
                    <Button>
                        <HiUpload /> Upload main photo
                    </Button>
                </FileUploadTrigger>
                <FileUploadList showSize clearable />
            </FileUploadRoot>

            <FileUploadRoot required maxFiles={40} mb={4}>
                <FileUploadTrigger asChild>
                    <Button>
                        <HiUpload /> Upload interior photos
                    </Button>
                </FileUploadTrigger>
                <FileUploadList showSize clearable />
            </FileUploadRoot>

            <FileUploadRoot required maxFiles={40} mb={4}>
                <FileUploadTrigger asChild>
                    <Button>
                        <HiUpload /> Upload exterior photos
                    </Button>
                </FileUploadTrigger>
                <FileUploadList showSize clearable />
            </FileUploadRoot>

            <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem colSpan={6}>
                    <Text textStyle='4xl'>Auction details</Text>
                </GridItem>

                <GridItem colSpan={3}>
                    <Field label='Start price'>
                        <Input
                            name="StartPrice"
                            onChange={handleChange}
                            value={formData.StartPrice}
                            required
                            placeholder="2000" />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>
                    <Field label='City now'>
                        <Input
                            name="CityNow"
                            onChange={handleChange}
                            value={formData.CityNow}
                            required
                            placeholder="Kyiv" />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>
                    <Field label='Time start'>
                        <SimpleDatePicker onChange={(date) => {
                            setFormData((prev) => ({
                                ...prev,
                                ["TimeStart"]: date ? date.toISOString() : "",
                            }));
                            console.log(formData);
                        }}
                        />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>
                    <Field label='Time end'>
                    <SimpleDatePicker onChange={(date) => {
                            setFormData((prev) => ({
                                ...prev,
                                ["TimeEnd"]: date ? date.toISOString() : "",
                                
                            }));
                            console.log(formData);
                        }}
                        />
                    </Field>
                </GridItem>

                <GridItem colSpan={6}>
                    <Field label='Front name'>
                        <Input required placeholder="BMW 3 Series 2013" />
                    </Field>
                </GridItem>

                <GridItem colSpan={6}>
                    <Field label='Min description'>
                        <Input required placeholder="~13,000 Miles, 2 Owner, Supercharged AMG V6" />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>
                    <Button w="100%" colorPalette="gray" type="submit" alignSelf="center" onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </GridItem>


                <GridItem colSpan={3}>
                    <Button w="100%" colorPalette="green" type="submit" alignSelf="center">
                        Put on sale
                    </Button>
                </GridItem>


            </Grid>


        </Form>
    )
}

export default SellCar;