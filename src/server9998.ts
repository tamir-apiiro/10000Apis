
const express = require('express')
import {handler9998} from "./handler9998";
const app = express()
app.get('/9998', handler9998)
app.listen(3000, () => {})
        