
const express = require('express')
import {handler6680} from "./handler6680";
const app = express()
app.get('/6680', handler6680)
app.listen(3000, () => {})
        