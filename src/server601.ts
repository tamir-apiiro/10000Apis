
const express = require('express')
import {handler601} from "./handler601";
const app = express()
app.get('/601', handler601)
app.listen(3000, () => {})
        