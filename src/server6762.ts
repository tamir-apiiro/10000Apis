
const express = require('express')
import {handler6762} from "./handler6762";
const app = express()
app.get('/6762', handler6762)
app.listen(3000, () => {})
        