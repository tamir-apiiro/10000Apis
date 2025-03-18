
const express = require('express')
import {handler7312} from "./handler7312";
const app = express()
app.get('/7312', handler7312)
app.listen(3000, () => {})
        