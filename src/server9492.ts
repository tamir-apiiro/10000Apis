
const express = require('express')
import {handler9492} from "./handler9492";
const app = express()
app.get('/9492', handler9492)
app.listen(3000, () => {})
        