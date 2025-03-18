
const express = require('express')
import {handler7221} from "./handler7221";
const app = express()
app.get('/7221', handler7221)
app.listen(3000, () => {})
        