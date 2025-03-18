
const express = require('express')
import {handler9999} from "./handler9999";
const app = express()
app.get('/9999', handler9999)
app.listen(3000, () => {})
        