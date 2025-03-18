
const express = require('express')
import {handler6865} from "./handler6865";
const app = express()
app.get('/6865', handler6865)
app.listen(3000, () => {})
        