
const express = require('express')
import {handler7769} from "./handler7769";
const app = express()
app.get('/7769', handler7769)
app.listen(3000, () => {})
        