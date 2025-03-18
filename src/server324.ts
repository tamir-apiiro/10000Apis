
const express = require('express')
import {handler324} from "./handler324";
const app = express()
app.get('/324', handler324)
app.listen(3000, () => {})
        