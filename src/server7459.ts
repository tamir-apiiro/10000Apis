
const express = require('express')
import {handler7459} from "./handler7459";
const app = express()
app.get('/7459', handler7459)
app.listen(3000, () => {})
        