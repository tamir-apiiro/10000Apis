
const express = require('express')
import {handler9210} from "./handler9210";
const app = express()
app.get('/9210', handler9210)
app.listen(3000, () => {})
        