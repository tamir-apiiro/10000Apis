
const express = require('express')
import {handler9305} from "./handler9305";
const app = express()
app.get('/9305', handler9305)
app.listen(3000, () => {})
        