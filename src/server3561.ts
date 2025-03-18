
const express = require('express')
import {handler3561} from "./handler3561";
const app = express()
app.get('/3561', handler3561)
app.listen(3000, () => {})
        