
const express = require('express')
import {handler7730} from "./handler7730";
const app = express()
app.get('/7730', handler7730)
app.listen(3000, () => {})
        