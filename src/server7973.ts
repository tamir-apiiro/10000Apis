
const express = require('express')
import {handler7973} from "./handler7973";
const app = express()
app.get('/7973', handler7973)
app.listen(3000, () => {})
        