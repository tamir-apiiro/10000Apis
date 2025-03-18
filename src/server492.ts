
const express = require('express')
import {handler492} from "./handler492";
const app = express()
app.get('/492', handler492)
app.listen(3000, () => {})
        