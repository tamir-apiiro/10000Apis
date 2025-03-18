
const express = require('express')
import {handler9942} from "./handler9942";
const app = express()
app.get('/9942', handler9942)
app.listen(3000, () => {})
        