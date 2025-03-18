
const express = require('express')
import {handler9028} from "./handler9028";
const app = express()
app.get('/9028', handler9028)
app.listen(3000, () => {})
        