
const express = require('express')
import {handler403} from "./handler403";
const app = express()
app.get('/403', handler403)
app.listen(3000, () => {})
        