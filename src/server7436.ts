
const express = require('express')
import {handler7436} from "./handler7436";
const app = express()
app.get('/7436', handler7436)
app.listen(3000, () => {})
        