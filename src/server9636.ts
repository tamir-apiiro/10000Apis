
const express = require('express')
import {handler9636} from "./handler9636";
const app = express()
app.get('/9636', handler9636)
app.listen(3000, () => {})
        