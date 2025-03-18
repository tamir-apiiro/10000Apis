
const express = require('express')
import {handler2887} from "./handler2887";
const app = express()
app.get('/2887', handler2887)
app.listen(3000, () => {})
        