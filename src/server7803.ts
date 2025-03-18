
const express = require('express')
import {handler7803} from "./handler7803";
const app = express()
app.get('/7803', handler7803)
app.listen(3000, () => {})
        