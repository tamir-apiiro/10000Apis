
const express = require('express')
import {handler9876} from "./handler9876";
const app = express()
app.get('/9876', handler9876)
app.listen(3000, () => {})
        