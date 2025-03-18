
const express = require('express')
import {handler7561} from "./handler7561";
const app = express()
app.get('/7561', handler7561)
app.listen(3000, () => {})
        