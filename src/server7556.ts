
const express = require('express')
import {handler7556} from "./handler7556";
const app = express()
app.get('/7556', handler7556)
app.listen(3000, () => {})
        