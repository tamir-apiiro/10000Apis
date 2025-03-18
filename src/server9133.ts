
const express = require('express')
import {handler9133} from "./handler9133";
const app = express()
app.get('/9133', handler9133)
app.listen(3000, () => {})
        