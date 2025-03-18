
const express = require('express')
import {handler7617} from "./handler7617";
const app = express()
app.get('/7617', handler7617)
app.listen(3000, () => {})
        