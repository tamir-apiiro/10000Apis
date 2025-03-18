
const express = require('express')
import {handler9318} from "./handler9318";
const app = express()
app.get('/9318', handler9318)
app.listen(3000, () => {})
        