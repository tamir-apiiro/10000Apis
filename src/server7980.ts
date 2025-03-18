
const express = require('express')
import {handler7980} from "./handler7980";
const app = express()
app.get('/7980', handler7980)
app.listen(3000, () => {})
        