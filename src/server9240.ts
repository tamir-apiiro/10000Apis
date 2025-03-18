
const express = require('express')
import {handler9240} from "./handler9240";
const app = express()
app.get('/9240', handler9240)
app.listen(3000, () => {})
        