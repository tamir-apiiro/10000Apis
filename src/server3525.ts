
const express = require('express')
import {handler3525} from "./handler3525";
const app = express()
app.get('/3525', handler3525)
app.listen(3000, () => {})
        