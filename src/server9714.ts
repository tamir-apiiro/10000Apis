
const express = require('express')
import {handler9714} from "./handler9714";
const app = express()
app.get('/9714', handler9714)
app.listen(3000, () => {})
        