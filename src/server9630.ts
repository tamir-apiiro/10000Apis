
const express = require('express')
import {handler9630} from "./handler9630";
const app = express()
app.get('/9630', handler9630)
app.listen(3000, () => {})
        