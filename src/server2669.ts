
const express = require('express')
import {handler2669} from "./handler2669";
const app = express()
app.get('/2669', handler2669)
app.listen(3000, () => {})
        