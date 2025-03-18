
const express = require('express')
import {handler8937} from "./handler8937";
const app = express()
app.get('/8937', handler8937)
app.listen(3000, () => {})
        