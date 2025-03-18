
const express = require('express')
import {handler9396} from "./handler9396";
const app = express()
app.get('/9396', handler9396)
app.listen(3000, () => {})
        