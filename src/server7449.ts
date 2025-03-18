
const express = require('express')
import {handler7449} from "./handler7449";
const app = express()
app.get('/7449', handler7449)
app.listen(3000, () => {})
        