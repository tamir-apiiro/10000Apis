
const express = require('express')
import {handler9754} from "./handler9754";
const app = express()
app.get('/9754', handler9754)
app.listen(3000, () => {})
        