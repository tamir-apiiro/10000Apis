
const express = require('express')
import {handler7520} from "./handler7520";
const app = express()
app.get('/7520', handler7520)
app.listen(3000, () => {})
        