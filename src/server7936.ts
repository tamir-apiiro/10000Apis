
const express = require('express')
import {handler7936} from "./handler7936";
const app = express()
app.get('/7936', handler7936)
app.listen(3000, () => {})
        