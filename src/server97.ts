
const express = require('express')
import {handler97} from "./handler97";
const app = express()
app.get('/97', handler97)
app.listen(3000, () => {})
        