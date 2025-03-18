
const express = require('express')
import {handler7100} from "./handler7100";
const app = express()
app.get('/7100', handler7100)
app.listen(3000, () => {})
        