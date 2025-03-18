
const express = require('express')
import {handler1965} from "./handler1965";
const app = express()
app.get('/1965', handler1965)
app.listen(3000, () => {})
        