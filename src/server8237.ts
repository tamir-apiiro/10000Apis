
const express = require('express')
import {handler8237} from "./handler8237";
const app = express()
app.get('/8237', handler8237)
app.listen(3000, () => {})
        