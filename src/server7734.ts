
const express = require('express')
import {handler7734} from "./handler7734";
const app = express()
app.get('/7734', handler7734)
app.listen(3000, () => {})
        