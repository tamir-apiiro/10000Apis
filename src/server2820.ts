
const express = require('express')
import {handler2820} from "./handler2820";
const app = express()
app.get('/2820', handler2820)
app.listen(3000, () => {})
        