
const express = require('express')
import {handler977} from "./handler977";
const app = express()
app.get('/977', handler977)
app.listen(3000, () => {})
        