
const express = require('express')
import {handler854} from "./handler854";
const app = express()
app.get('/854', handler854)
app.listen(3000, () => {})
        