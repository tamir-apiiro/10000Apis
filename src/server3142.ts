
const express = require('express')
import {handler3142} from "./handler3142";
const app = express()
app.get('/3142', handler3142)
app.listen(3000, () => {})
        