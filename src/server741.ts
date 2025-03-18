
const express = require('express')
import {handler741} from "./handler741";
const app = express()
app.get('/741', handler741)
app.listen(3000, () => {})
        