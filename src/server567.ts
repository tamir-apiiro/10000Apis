
const express = require('express')
import {handler567} from "./handler567";
const app = express()
app.get('/567', handler567)
app.listen(3000, () => {})
        