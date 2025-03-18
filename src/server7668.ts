
const express = require('express')
import {handler7668} from "./handler7668";
const app = express()
app.get('/7668', handler7668)
app.listen(3000, () => {})
        