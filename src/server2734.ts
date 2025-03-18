
const express = require('express')
import {handler2734} from "./handler2734";
const app = express()
app.get('/2734', handler2734)
app.listen(3000, () => {})
        