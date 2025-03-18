
const express = require('express')
import {handler585} from "./handler585";
const app = express()
app.get('/585', handler585)
app.listen(3000, () => {})
        