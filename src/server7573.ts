
const express = require('express')
import {handler7573} from "./handler7573";
const app = express()
app.get('/7573', handler7573)
app.listen(3000, () => {})
        