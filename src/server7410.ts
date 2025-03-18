
const express = require('express')
import {handler7410} from "./handler7410";
const app = express()
app.get('/7410', handler7410)
app.listen(3000, () => {})
        