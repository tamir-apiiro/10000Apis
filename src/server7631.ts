
const express = require('express')
import {handler7631} from "./handler7631";
const app = express()
app.get('/7631', handler7631)
app.listen(3000, () => {})
        