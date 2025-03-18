
const express = require('express')
import {handler3670} from "./handler3670";
const app = express()
app.get('/3670', handler3670)
app.listen(3000, () => {})
        