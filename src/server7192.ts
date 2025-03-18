
const express = require('express')
import {handler7192} from "./handler7192";
const app = express()
app.get('/7192', handler7192)
app.listen(3000, () => {})
        