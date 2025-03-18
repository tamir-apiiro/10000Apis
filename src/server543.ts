
const express = require('express')
import {handler543} from "./handler543";
const app = express()
app.get('/543', handler543)
app.listen(3000, () => {})
        