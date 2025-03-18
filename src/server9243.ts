
const express = require('express')
import {handler9243} from "./handler9243";
const app = express()
app.get('/9243', handler9243)
app.listen(3000, () => {})
        