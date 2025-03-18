
const express = require('express')
import {handler3643} from "./handler3643";
const app = express()
app.get('/3643', handler3643)
app.listen(3000, () => {})
        