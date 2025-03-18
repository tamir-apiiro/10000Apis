
const express = require('express')
import {handler520} from "./handler520";
const app = express()
app.get('/520', handler520)
app.listen(3000, () => {})
        