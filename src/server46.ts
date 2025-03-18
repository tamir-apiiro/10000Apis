
const express = require('express')
import {handler46} from "./handler46";
const app = express()
app.get('/46', handler46)
app.listen(3000, () => {})
        