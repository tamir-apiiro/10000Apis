
const express = require('express')
import {handler7474} from "./handler7474";
const app = express()
app.get('/7474', handler7474)
app.listen(3000, () => {})
        