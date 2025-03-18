
const express = require('express')
import {handler7636} from "./handler7636";
const app = express()
app.get('/7636', handler7636)
app.listen(3000, () => {})
        