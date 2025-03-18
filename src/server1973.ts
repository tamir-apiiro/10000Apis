
const express = require('express')
import {handler1973} from "./handler1973";
const app = express()
app.get('/1973', handler1973)
app.listen(3000, () => {})
        