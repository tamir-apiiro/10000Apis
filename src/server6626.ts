
const express = require('express')
import {handler6626} from "./handler6626";
const app = express()
app.get('/6626', handler6626)
app.listen(3000, () => {})
        