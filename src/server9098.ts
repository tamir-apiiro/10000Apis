
const express = require('express')
import {handler9098} from "./handler9098";
const app = express()
app.get('/9098', handler9098)
app.listen(3000, () => {})
        