
const express = require('express')
import {handler7426} from "./handler7426";
const app = express()
app.get('/7426', handler7426)
app.listen(3000, () => {})
        