
const express = require('express')
import {handler9092} from "./handler9092";
const app = express()
app.get('/9092', handler9092)
app.listen(3000, () => {})
        