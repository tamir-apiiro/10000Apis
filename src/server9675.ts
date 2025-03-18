
const express = require('express')
import {handler9675} from "./handler9675";
const app = express()
app.get('/9675', handler9675)
app.listen(3000, () => {})
        