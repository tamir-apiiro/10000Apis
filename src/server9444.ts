
const express = require('express')
import {handler9444} from "./handler9444";
const app = express()
app.get('/9444', handler9444)
app.listen(3000, () => {})
        