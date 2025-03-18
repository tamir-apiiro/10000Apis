
const express = require('express')
import {handler2542} from "./handler2542";
const app = express()
app.get('/2542', handler2542)
app.listen(3000, () => {})
        