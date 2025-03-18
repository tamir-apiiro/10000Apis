
const express = require('express')
import {handler9659} from "./handler9659";
const app = express()
app.get('/9659', handler9659)
app.listen(3000, () => {})
        