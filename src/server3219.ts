
const express = require('express')
import {handler3219} from "./handler3219";
const app = express()
app.get('/3219', handler3219)
app.listen(3000, () => {})
        