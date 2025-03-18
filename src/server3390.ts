
const express = require('express')
import {handler3390} from "./handler3390";
const app = express()
app.get('/3390', handler3390)
app.listen(3000, () => {})
        