
const express = require('express')
import {handler769} from "./handler769";
const app = express()
app.get('/769', handler769)
app.listen(3000, () => {})
        