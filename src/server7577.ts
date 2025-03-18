
const express = require('express')
import {handler7577} from "./handler7577";
const app = express()
app.get('/7577', handler7577)
app.listen(3000, () => {})
        