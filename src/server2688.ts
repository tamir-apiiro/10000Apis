
const express = require('express')
import {handler2688} from "./handler2688";
const app = express()
app.get('/2688', handler2688)
app.listen(3000, () => {})
        