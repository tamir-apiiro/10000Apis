
const express = require('express')
import {handler7748} from "./handler7748";
const app = express()
app.get('/7748', handler7748)
app.listen(3000, () => {})
        