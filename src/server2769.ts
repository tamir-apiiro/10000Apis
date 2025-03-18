
const express = require('express')
import {handler2769} from "./handler2769";
const app = express()
app.get('/2769', handler2769)
app.listen(3000, () => {})
        