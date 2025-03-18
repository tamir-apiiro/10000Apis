
const express = require('express')
import {handler710} from "./handler710";
const app = express()
app.get('/710', handler710)
app.listen(3000, () => {})
        