
const express = require('express')
import {handler176} from "./handler176";
const app = express()
app.get('/176', handler176)
app.listen(3000, () => {})
        