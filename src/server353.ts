
const express = require('express')
import {handler353} from "./handler353";
const app = express()
app.get('/353', handler353)
app.listen(3000, () => {})
        