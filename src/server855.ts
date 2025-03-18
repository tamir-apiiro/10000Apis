
const express = require('express')
import {handler855} from "./handler855";
const app = express()
app.get('/855', handler855)
app.listen(3000, () => {})
        