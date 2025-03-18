
const express = require('express')
import {handler3455} from "./handler3455";
const app = express()
app.get('/3455', handler3455)
app.listen(3000, () => {})
        