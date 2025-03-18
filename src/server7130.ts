
const express = require('express')
import {handler7130} from "./handler7130";
const app = express()
app.get('/7130', handler7130)
app.listen(3000, () => {})
        