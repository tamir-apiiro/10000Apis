
const express = require('express')
import {handler7197} from "./handler7197";
const app = express()
app.get('/7197', handler7197)
app.listen(3000, () => {})
        