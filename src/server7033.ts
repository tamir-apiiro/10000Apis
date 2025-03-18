
const express = require('express')
import {handler7033} from "./handler7033";
const app = express()
app.get('/7033', handler7033)
app.listen(3000, () => {})
        