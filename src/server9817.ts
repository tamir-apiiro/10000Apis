
const express = require('express')
import {handler9817} from "./handler9817";
const app = express()
app.get('/9817', handler9817)
app.listen(3000, () => {})
        