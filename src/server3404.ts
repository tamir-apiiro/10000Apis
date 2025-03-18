
const express = require('express')
import {handler3404} from "./handler3404";
const app = express()
app.get('/3404', handler3404)
app.listen(3000, () => {})
        