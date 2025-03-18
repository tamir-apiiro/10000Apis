
const express = require('express')
import {handler2313} from "./handler2313";
const app = express()
app.get('/2313', handler2313)
app.listen(3000, () => {})
        