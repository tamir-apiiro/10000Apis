
const express = require('express')
import {handler1184} from "./handler1184";
const app = express()
app.get('/1184', handler1184)
app.listen(3000, () => {})
        