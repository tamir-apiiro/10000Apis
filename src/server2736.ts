
const express = require('express')
import {handler2736} from "./handler2736";
const app = express()
app.get('/2736', handler2736)
app.listen(3000, () => {})
        