
const express = require('express')
import {handler2933} from "./handler2933";
const app = express()
app.get('/2933', handler2933)
app.listen(3000, () => {})
        