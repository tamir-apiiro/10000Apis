
const express = require('express')
import {handler3545} from "./handler3545";
const app = express()
app.get('/3545', handler3545)
app.listen(3000, () => {})
        