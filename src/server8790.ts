
const express = require('express')
import {handler8790} from "./handler8790";
const app = express()
app.get('/8790', handler8790)
app.listen(3000, () => {})
        