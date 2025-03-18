
const express = require('express')
import {handler3789} from "./handler3789";
const app = express()
app.get('/3789', handler3789)
app.listen(3000, () => {})
        