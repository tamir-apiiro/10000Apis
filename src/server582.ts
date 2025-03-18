
const express = require('express')
import {handler582} from "./handler582";
const app = express()
app.get('/582', handler582)
app.listen(3000, () => {})
        