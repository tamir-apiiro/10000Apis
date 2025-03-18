
const express = require('express')
import {handler1374} from "./handler1374";
const app = express()
app.get('/1374', handler1374)
app.listen(3000, () => {})
        