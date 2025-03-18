
const express = require('express')
import {handler9936} from "./handler9936";
const app = express()
app.get('/9936', handler9936)
app.listen(3000, () => {})
        