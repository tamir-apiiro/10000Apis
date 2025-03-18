
const express = require('express')
import {handler474} from "./handler474";
const app = express()
app.get('/474', handler474)
app.listen(3000, () => {})
        