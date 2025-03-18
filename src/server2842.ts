
const express = require('express')
import {handler2842} from "./handler2842";
const app = express()
app.get('/2842', handler2842)
app.listen(3000, () => {})
        