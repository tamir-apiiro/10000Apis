
const express = require('express')
import {handler6223} from "./handler6223";
const app = express()
app.get('/6223', handler6223)
app.listen(3000, () => {})
        