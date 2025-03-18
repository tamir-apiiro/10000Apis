
const express = require('express')
import {handler7516} from "./handler7516";
const app = express()
app.get('/7516', handler7516)
app.listen(3000, () => {})
        