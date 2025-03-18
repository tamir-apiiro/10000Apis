
const express = require('express')
import {handler236} from "./handler236";
const app = express()
app.get('/236', handler236)
app.listen(3000, () => {})
        