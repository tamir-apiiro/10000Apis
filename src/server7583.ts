
const express = require('express')
import {handler7583} from "./handler7583";
const app = express()
app.get('/7583', handler7583)
app.listen(3000, () => {})
        