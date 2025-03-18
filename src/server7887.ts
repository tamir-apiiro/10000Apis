
const express = require('express')
import {handler7887} from "./handler7887";
const app = express()
app.get('/7887', handler7887)
app.listen(3000, () => {})
        