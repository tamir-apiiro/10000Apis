
const express = require('express')
import {handler9602} from "./handler9602";
const app = express()
app.get('/9602', handler9602)
app.listen(3000, () => {})
        