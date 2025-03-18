
const express = require('express')
import {handler9206} from "./handler9206";
const app = express()
app.get('/9206', handler9206)
app.listen(3000, () => {})
        