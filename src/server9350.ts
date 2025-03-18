
const express = require('express')
import {handler9350} from "./handler9350";
const app = express()
app.get('/9350', handler9350)
app.listen(3000, () => {})
        