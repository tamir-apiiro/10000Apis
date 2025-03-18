
const express = require('express')
import {handler2631} from "./handler2631";
const app = express()
app.get('/2631', handler2631)
app.listen(3000, () => {})
        