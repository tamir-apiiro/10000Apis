
const express = require('express')
import {handler9409} from "./handler9409";
const app = express()
app.get('/9409', handler9409)
app.listen(3000, () => {})
        