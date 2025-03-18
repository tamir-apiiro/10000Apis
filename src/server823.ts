
const express = require('express')
import {handler823} from "./handler823";
const app = express()
app.get('/823', handler823)
app.listen(3000, () => {})
        