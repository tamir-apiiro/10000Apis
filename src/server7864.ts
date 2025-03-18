
const express = require('express')
import {handler7864} from "./handler7864";
const app = express()
app.get('/7864', handler7864)
app.listen(3000, () => {})
        