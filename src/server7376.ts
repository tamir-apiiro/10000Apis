
const express = require('express')
import {handler7376} from "./handler7376";
const app = express()
app.get('/7376', handler7376)
app.listen(3000, () => {})
        