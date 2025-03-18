
const express = require('express')
import {handler8930} from "./handler8930";
const app = express()
app.get('/8930', handler8930)
app.listen(3000, () => {})
        