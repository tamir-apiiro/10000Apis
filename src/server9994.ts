
const express = require('express')
import {handler9994} from "./handler9994";
const app = express()
app.get('/9994', handler9994)
app.listen(3000, () => {})
        