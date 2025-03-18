
const express = require('express')
import {handler715} from "./handler715";
const app = express()
app.get('/715', handler715)
app.listen(3000, () => {})
        