
const express = require('express')
import {handler8229} from "./handler8229";
const app = express()
app.get('/8229', handler8229)
app.listen(3000, () => {})
        