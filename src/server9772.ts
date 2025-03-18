
const express = require('express')
import {handler9772} from "./handler9772";
const app = express()
app.get('/9772', handler9772)
app.listen(3000, () => {})
        