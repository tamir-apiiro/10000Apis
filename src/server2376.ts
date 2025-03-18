
const express = require('express')
import {handler2376} from "./handler2376";
const app = express()
app.get('/2376', handler2376)
app.listen(3000, () => {})
        