import { useState, useEffect } from "react";
import axios from "axios";
import { Form, useNavigate } from "react-router-dom";
import { Fieldset, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select";
import { Checkbox } from "@/components/ui/checkbox";


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

    function onSubmit(e: React.FormEvent) {

    }


    return (
        <Form onSubmit={onSubmit} className="form1">
            <Grid templateColumns="repeat(6, 1fr)"
                templateRows="repeat(11, 1fr)" gap={4}>
                <GridItem colSpan={6}>
                    <Text textStyle='4xl'>Car details</Text>
                </GridItem>

                <GridItem colSpan={6}>
                    <Field label='VIN'>
                        <Input placeholder="1G2ZG57B684191682" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Year'>
                        <Input placeholder="2000" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Brand'>
                            <NativeSelectField placeholder="Choose ">
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
                            <NativeSelectField placeholder="Choose ">
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
                            <NativeSelectField placeholder="Choose ">
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
                            <NativeSelectField placeholder="Choose ">
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Chevrolet</option>
                            </NativeSelectField>
                        </Field>
                    </NativeSelectRoot>
                </GridItem>

                <GridItem colSpan={2}>
                    <NativeSelectRoot>
                        <Field label='Fuel type'>
                            <NativeSelectField placeholder="Choose ">
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
                        <Input placeholder="black" />
                    </Field>
                </GridItem>

                <GridItem colSpan={2}>
                    <Field label='Odometr(in km)'>
                        <Input placeholder="2000" />
                    </Field>
                </GridItem>

                <GridItem colSpan={3}>

                </GridItem>

            </Grid>


            <Button colorPalette="green" type="submit" alignSelf="center">
                Register
            </Button>

        </Form>
    )
}

export default SellCar;