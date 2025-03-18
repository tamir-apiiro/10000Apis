
const express = require('express')
import {handler2219} from "./handler2219";
const app = express()
app.get('/2219', handler2219)
app.listen(3000, () => {})
        