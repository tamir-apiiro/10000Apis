
const express = require('express')
import {handler8336} from "./handler8336";
const app = express()
app.get('/8336', handler8336)
app.listen(3000, () => {})
        