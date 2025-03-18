
const express = require('express')
import {handler9674} from "./handler9674";
const app = express()
app.get('/9674', handler9674)
app.listen(3000, () => {})
        