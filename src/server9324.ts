
const express = require('express')
import {handler9324} from "./handler9324";
const app = express()
app.get('/9324', handler9324)
app.listen(3000, () => {})
        