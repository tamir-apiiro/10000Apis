
const express = require('express')
import {handler6038} from "./handler6038";
const app = express()
app.get('/6038', handler6038)
app.listen(3000, () => {})
        