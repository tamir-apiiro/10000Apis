
const express = require('express')
import {handler9535} from "./handler9535";
const app = express()
app.get('/9535', handler9535)
app.listen(3000, () => {})
        