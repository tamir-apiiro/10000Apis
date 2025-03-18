
const express = require('express')
import {handler436} from "./handler436";
const app = express()
app.get('/436', handler436)
app.listen(3000, () => {})
        