
const express = require('express')
import {handler212} from "./handler212";
const app = express()
app.get('/212', handler212)
app.listen(3000, () => {})
        