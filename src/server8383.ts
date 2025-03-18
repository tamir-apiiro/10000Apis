
const express = require('express')
import {handler8383} from "./handler8383";
const app = express()
app.get('/8383', handler8383)
app.listen(3000, () => {})
        