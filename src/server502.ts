
const express = require('express')
import {handler502} from "./handler502";
const app = express()
app.get('/502', handler502)
app.listen(3000, () => {})
        