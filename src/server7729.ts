
const express = require('express')
import {handler7729} from "./handler7729";
const app = express()
app.get('/7729', handler7729)
app.listen(3000, () => {})
        