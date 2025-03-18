
const express = require('express')
import {handler736} from "./handler736";
const app = express()
app.get('/736', handler736)
app.listen(3000, () => {})
        