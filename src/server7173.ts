
const express = require('express')
import {handler7173} from "./handler7173";
const app = express()
app.get('/7173', handler7173)
app.listen(3000, () => {})
        