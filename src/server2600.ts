
const express = require('express')
import {handler2600} from "./handler2600";
const app = express()
app.get('/2600', handler2600)
app.listen(3000, () => {})
        