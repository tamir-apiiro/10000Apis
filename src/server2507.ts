
const express = require('express')
import {handler2507} from "./handler2507";
const app = express()
app.get('/2507', handler2507)
app.listen(3000, () => {})
        