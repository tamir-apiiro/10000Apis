
const express = require('express')
import {handler9830} from "./handler9830";
const app = express()
app.get('/9830', handler9830)
app.listen(3000, () => {})
        