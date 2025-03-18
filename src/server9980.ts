
const express = require('express')
import {handler9980} from "./handler9980";
const app = express()
app.get('/9980', handler9980)
app.listen(3000, () => {})
        