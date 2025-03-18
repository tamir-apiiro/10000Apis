
const express = require('express')
import {handler7416} from "./handler7416";
const app = express()
app.get('/7416', handler7416)
app.listen(3000, () => {})
        