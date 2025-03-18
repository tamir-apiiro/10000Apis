
const express = require('express')
import {handler7843} from "./handler7843";
const app = express()
app.get('/7843', handler7843)
app.listen(3000, () => {})
        