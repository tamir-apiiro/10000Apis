
const express = require('express')
import {handler7880} from "./handler7880";
const app = express()
app.get('/7880', handler7880)
app.listen(3000, () => {})
        