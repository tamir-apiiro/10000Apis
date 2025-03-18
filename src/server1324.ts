
const express = require('express')
import {handler1324} from "./handler1324";
const app = express()
app.get('/1324', handler1324)
app.listen(3000, () => {})
        