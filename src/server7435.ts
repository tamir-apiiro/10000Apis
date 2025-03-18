
const express = require('express')
import {handler7435} from "./handler7435";
const app = express()
app.get('/7435', handler7435)
app.listen(3000, () => {})
        