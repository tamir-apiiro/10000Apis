
const express = require('express')
import {handler7111} from "./handler7111";
const app = express()
app.get('/7111', handler7111)
app.listen(3000, () => {})
        