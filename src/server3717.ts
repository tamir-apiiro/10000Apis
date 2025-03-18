
const express = require('express')
import {handler3717} from "./handler3717";
const app = express()
app.get('/3717', handler3717)
app.listen(3000, () => {})
        